const express = require("express");
const collection = require("./mongo");
const Category = collection.Category;
// const path = require('path');
const cors = require("cors");
const bcrypt = require("bcrypt");
const path = require("path");
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// Serve static files from the 'public' directory
app.use("public", express.static(path.join(__dirname, "public")));

// app.get("/", cors(), (req, res) => {
//   // Your logic for the "/" route
// });

app.post("/", async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await collection.User.findOne({ email: email });

    if (user) {
      const passwordMatch = await bcrypt.compare(
        password.trim(),
        user.hashedpassword.trim()
      );

      console.log(passwordMatch);

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
    address:address,
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
    // res.json("fail");
  }
});
let products = [];

// Route to handle POST requests for adding products

app.post("/fetchcategories", async (req, res) => {
  try {
    const categories = await collection.Category.find();
    res.json(categories);
    // console.log(categories);
  } catch (error) {
    console.log("error fetching" + error);
    res.status(500).json("internal server error");
  }
});

app.get("/:categoryId", async (req, res) => {
  const { categoryId } = req.params;
  try {
    const category = await Category.findById(categoryId); // Populate associated products
    if (!category) {
      return res.status(404).json({ message: "Category not found" });
    }
    res.json(category);
  } catch (error) {
    console.error("Error fetching category details:", error);
    res.status(500).json({ message: "Error fetching category details" });
  }
});

// app.post("/addproducts", async (req, res) => {
//   const { categoryId, detail } = req.body;

//   // Validate request body
//   if (!categoryId || !detail) {
//     return res
//       .status(400)
//       .json({ error: "Category ID and product detail are required" });
//   }

//   try {
//     // Save the product detail to the database
//     const result = await collection.Product.create({ categoryId, ...detail });

//     // Respond with success message
//     res.status(201).json({ message: "Product added successfully", productId: result._id });
//   } catch (error) {
//     console.error("Error adding product:", error);
//     res.status(500).json({ error: "Internal server error" });
//   }
// });
app.post("/addproducts", async (req, res) => {
  const { name, url, cost, categoryId } = req.body;
  console.log(req)

  try {
    // Check if category exists
    const category = await Category.findById(categoryId);
    if (!category) {
      return res.status(400).json({ message: "Invalid category ID" });
    }

    category.detail.push({ name, url, cost });
    await category.save();

    res.status(201).json({ message: "Product added successfully" });
  } catch (error) {
    console.error("Error adding product:", error);
    res.status(500).json({ message: "Internal server error" }); // Generic error for client
  }
});

const User = require("./mongo").User; // Import the User model

app.post("/profile", async (req, res) => {
  try {
    const userEmail = req.query.email; // Use req.query.email for query parameters
    const user = await User.findOne({ email: userEmail });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    res.status(200).json(user);
  } catch (error) {
    console.error("Error fetching user profile:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});


app.listen(8000, () => {
  console.log("Server is running on port 8000");
});
