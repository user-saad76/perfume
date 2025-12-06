import jwt from "jsonwebtoken";

export const isAdminAuthenticated = async (req, res, next) => {
  try {
    // Read token from cookies
    const token = req.cookies["jwt-token"];
    console.log("jwt-token:", token);

    if (!token) {
      return res.status(401).json({
        message: "You are not authenticated.",
      });
    }

    // Verify token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    console.log("decoded-jwt-admin:", decoded);

    // Attach decoded user to req
    req.user = decoded;

    next();
  } catch (error) {
    console.log("Admin Auth Error:", error);
    return res.status(401).json({
      message: "Invalid or expired token",
    });
  }
};