const mongoose = require("mongoose");
const dotenv = require("dotenv");

// Load environment variables from .env file
dotenv.config();

// Define the connection string with environment variables
const username = process.env.MONGO_USERNAME;
const password = process.env.MONGO_PASSWORD;
const database = process.env.MONGO_DATABASE;
const connectionString = `mongodb+srv://${encodeURIComponent(
  username
)}:${encodeURIComponent(
  password
)}@cluster0.e2oazkz.mongodb.net/${database}?retryWrites=true&w=majority&appName=Cluster0`;

// Connect to MongoDB Atlas
mongoose
  .connect(connectionString, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("MongoDB connected");
  })
  .catch((err) => {
    console.log("Failed to connect:", err);
  });

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  mobile: {
    type: Number,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  hashedpassword: {
    type: String,
    required: true,
  },
});

const categorySchema = new mongoose.Schema({
  name: {
    type: String,
  },
  url: {
    type: String,
  },
  detail: [
    {
      id: {
        type: Number,
      },
      name: {
        type: String,
      },
      url: {
        type: String,
      },
      cost: {
        type: Number,
      },
    },
  ],
});

const orderSchema = new mongoose.Schema({
  items: [
    {
      name: String,
      cost: Number,
    },
  ],
  user: {
    name: String,
    mobile: String,
    email: String,
    address: String,
  },
  total: {
    type: String,
  },
  orderDate: {
    type: Date,
    default: Date.now,
  },
});

const Orders = mongoose.model("Orders", orderSchema);
const User = mongoose.model("users", userSchema);
const Category = mongoose.model("Category", categorySchema);

module.exports = {
  User: User,
  Category: Category,
  Orders: Orders,
};
