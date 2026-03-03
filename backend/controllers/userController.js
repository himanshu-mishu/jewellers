import userModel from "../models/userModel.js";
import validator from "validator";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const createToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: "1d" });
};

// Route for user login
const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    // check user exists
    const user = await userModel.findOne({ email });

    if (!user) {
      return res.json({
        success: false,
        message: "User does not exist",
      });
    }

    // check password
    const isPasswordCorrect = await bcrypt.compare(password, user.password);

    if (!isPasswordCorrect) {
      return res.json({
        success: false,
        message: "Invalid credentials",
      });
    }

    // create token
    const token = createToken(user._id);

    res.json({
      success: true,
      message: "Login successful",
      token,
    });

  } catch (error) {
    console.error("Error in user login:", error);
    res.json({
      success: false,
      message: "Server error during login",
    });
  }
};

// Route for user registration
const registerUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    // CHECKING IF USER ALREADY EXISTS
    const exists = await userModel.findOne({ email });
    if (exists) {
      return res.status(400).json({ message: "User already exists" });
    }

    //Validating email format and password strength
    if (!validator.isEmail(email)) {
      return res.status(400).json({ message: "Invalid email format" });
    }
    if (password.length < 8) {
      return res.status(400).json({
        message:
          "Password must be at least 8 characters long and include uppercase, lowercase, number, and symbol",
      });
    }

    //Hashing password before saving to database
    const salt = await bcrypt.genSaltSync(10);
    const hashedPassword = await bcrypt.hashSync(password, salt);

    const newUser = new userModel({ name, email, password: hashedPassword });
    const user = await newUser.save();

    const token = createToken(user._id);

    res.status(201).json({success: true, message: "User registered successfully", token });
  } catch (error) {
    console.error("Error in user registration:", error);
    res.status(500).json({ success: false,message: "Server error during registration" });
  }
};

// Route for admin login
const adminLogin = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (
      email === process.env.ADMIN_EMAIL &&
      password === process.env.ADMIN_PASSWORD
    ) {
      const token = jwt.sign({ role: "admin", email }, process.env.JWT_SECRET, {
        expiresIn: "1d",
      });
      res.json({ success: true, token });
    } else {
      res.json({ success: false, message: "Invalid  cedentials" });
    }
  } catch (error) {
    console.error("Error in admin login:", error);
    res.status(500).json({ message: "Server error during registration" });
  }
};

export { loginUser, registerUser, adminLogin };
