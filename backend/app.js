const express = require("express");
const mongoose=require("mongoose")
const collection = require("../mongo");
const Category = collection.Category;
const cors = require("cors");
const bcrypt = require("bcrypt");
const path = require("path");
const nodemailer = require("nodemailer");
require("dotenv").config();
const app = express();

const transporter = nodemailer.createTransport({
  service: 'Gmail',
  auth: {
    user: process.env.EMAIL_ADDRESS,
    pass: process.env.EMAIL_PASSWORD,
  },
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(express.static(path.join(__dirname, "public")));

app.post("/", async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await collection.User.findOne({ email: email });

    if (user) {
      const passwordMatch = await bcrypt.compare(
        password.trim(),
        user.hashedpassword.trim()
      );

      if (passwordMatch) {
        res.json("exist");
      } else {
        res.json("wrongpassword");
      }
    } else {
      res.json("notexist");
    }
  } catch (e) {
    res.json("fail");
  }
});

app.post("/signup", async (req, res) => {
  const { name, email, mobile, address, password } = req.body;

  const hashedPassword = await bcrypt.hash(password, 10);

  const data = {
    name: name,
    email: email,
    mobile: mobile,
    address: address,
    password: password,
    hashedpassword: hashedPassword,
  };

  try {
    const check = await collection.User.findOne({ email: email });

    if (check) {
      res.json("exist");
    } else {
      res.json("notexist");
      await collection.User.insertMany([data]);
    }
  } catch (e) {
    console.error(e);
    res.json("fail");
  }
});

app.post("/fetchcategories", async (req, res) => {
  try {
    const categories = await collection.Category.find();
    res.json(categories);
  } catch (error) {
    console.error("Error fetching categories:", error);
    res.status(500).json("Internal server error");
  }
});

app.get("/:categoryId", async (req, res) => {
  const { categoryId } = req.params;
  try {
    const category = await Category.findById(categoryId);
    if (!category) {
      return res.status(404).json({ message: "Category not found" });
    }
    res.json(category);
  } catch (error) {
    console.error("Error fetching category details:", error);
    res.status(500).json({ message: "Error fetching category details" });
  }
});

app.post("/addproducts", async (req, res) => {
  const { name, url, cost, categoryId } = req.body;

  try {
    const category = await Category.findById(categoryId);
    if (!category) {
      return res.status(400).json({ message: "Invalid category ID" });
    }

    category.detail.push({ name, url, cost });
    await category.save();

    res.status(201).json({ message: "Product added successfully" });
  } catch (error) {
    console.error("Error adding product:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});

app.post("/profile", async (req, res) => {
  try {
    const userEmail = req.query.email;
    const user = await collection.User.findOne({ email: userEmail });

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    res.status(200).json(user);
  } catch (error) {
    console.error("Error fetching user profile:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});
app.put("/profile/:email", async (req, res) => {
  const { email } = req.params;
  const { name, mobile, address } = req.body;

  try {
    const user = await collection.User.findOne({ email });

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    user.name = name;
    user.mobile = mobile;
    user.address = address;

    await user.save();

    res.json({ message: "Profile updated successfully" });
  } catch (error) {
    console.error("Error updating user profile:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});

const sendConfirmationEmail = async (user, message) => {
  try {
    const mailOptions = {
      from: process.env.EMAIL_ADDRESS,
      to: user.email,
      subject: 'Order Confirmation',
      text: message,
    };

    const info = await transporter.sendMail(mailOptions);
    console.log('Email sent:', info.response);
  } catch (error) {
    console.error('Error sending confirmation email:', error);
  }
};

app.post("/order", async (req, res) => {
  const { items, user, total, paymentOption } = req.body;

  try {
    const existingOrder = await collection.Orders.findOne({ user: user.email });

    if (existingOrder) {
      return res.status(400).json({ message: "Order already exists for this user" });
    }

    const newOrder = new collection.Orders({
      items: items.map(item => ({
        name: item.name,
        cost: item.cost,
      })),
      user: {
        name: user.name,
        mobile: user.mobile,
        email: user.email,
        address: user.address
      },
      total,
      paymentOption,
      orderDate: new Date(), // Set the order date
    });

    await newOrder.save();

    const message = `Thank you for your order!\n\nOrder Details:\nItems: ${items.map(item => `${item.name} (${item.cost})`).join(', ')}\nTotal: ${total}\nPayment Option: ${paymentOption}\nOrder Date: ${newOrder.orderDate}`;
    await sendConfirmationEmail(user, message);

    res.status(201).json({ message: "Order placed successfully" });
  } catch (error) {
    console.error("Error placing order:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});

const contactMessageSchema = new mongoose.Schema({
  email: String,
  message: String,
  createdAt: { type: Date, default: Date.now },
});

const ContactMessage = mongoose.model('ContactMessage', contactMessageSchema);
app.post('/api/contact', async (req, res) => {
  const { email, message } = req.body;

  try {
    const newMessage = new ContactMessage({ email, message });
    await newMessage.save();
    res.status(201).json({ message: 'Message submitted successfully' });
  } catch (error) {
    console.error('Error submitting message:', error);
    res.status(500).json({ error: 'An error occurred while submitting the message' });
  }
});

app.listen(8000, () => {
  console.log("Server is running on port 8000");
});
