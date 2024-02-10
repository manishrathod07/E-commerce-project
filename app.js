const express = require("express");
const collection = require("./mongo");
// const path = require('path');
const cors = require("cors");
const bcrypt = require("bcrypt");
const path=require('path')
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
      const passwordMatch = await bcrypt.compare(password.trim(), user.password.trim());


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
  const { name, email, mobile, password } = req.body;

  const hashedPassword = await bcrypt.hash(password, 10);

  const data = {
    name: name,
    email: email,
    mobile: mobile,
    password: hashedPassword,
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

app.listen(8000, () => {
  console.log("Server is running on port 8000");
});