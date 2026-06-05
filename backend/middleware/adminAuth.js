// middleware/adminAuth.js

import jwt from "jsonwebtoken";

const adminAuth = (req, res, next) => {
  try {
    // get token from headers
    const token = req.headers.authorization?.split(" ")[1];
    // expects: Authorization: Bearer <token>

    if (!token) {
      return res.json({
        success: false,
        message: "Not Authorized — No Token",
      });
    }

    // verify token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // check admin role
    if (decoded.role !== "admin") {
      return res.json({
        success: false,
        message: "Not Authorized — Admin Only",
      });
    }

    next();
  } catch (error) {
    console.error("Admin Auth Error:", error);
    return res.json({
      success: false,
      message: "Invalid Token",
    });
  }
};

export default adminAuth;
