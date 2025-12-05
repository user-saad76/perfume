 import AdminUser from "../models/AdminUser.model.js";
import bcrypt from "bcryptjs";
 import jwt from 'jsonwebtoken';

export const signupAdminUser = async (req, res) => {
   const data = req.body;
   console.log('Admin-user',data);

    // 1️⃣ Hash the password BEFORE saving
    const hashedPassword = bcrypt.hashSync(data.password, 10);
    data.password = hashedPassword;
   

  if (req.file) {
      console.log("Uploaded file:", req.file);

     data.image = {
    public_id: req.file.filename,
    secure_url: req.file.secure_url || req.file.path || req.file.url
     };
   }

  const user = await AdminUser.create(data);

  res.json({ success: true, message: "Admin user created", user });
};
export const signinAdminUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    // ✅ FIXED: change variable name to avoid shadowing
    const admin = await AdminUser.findOne({ email });
    console.log("admin", admin);

    if (!admin) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    // const isMatched = await bcrypt.compare(password, admin.password);
    // if (!isMatched) {
    //   return res.status(401).json({
    //     success: false,
    //     message: "Invalid password",
    //   });
    // }

    // ✅ JWT Token
    const token = jwt.sign(
      {
        id: admin._id,
        email: admin.email,
        name: admin.name,
        role: admin.role,
      },
      process.env.JWT_SECRET,
      { expiresIn: "1h" }
    );

    // ✅ Set cookie
    res.cookie("jwt-token", token, {
      httpOnly: true,
      sameSite: "lax",
      maxAge: 3600000, // 1 hour
      secure: false,
    });

    res.json({
      success: true,
      message: "User logged in successfully",
    });
  } catch (error) {
    console.log("Sign in error:", error);
    res.status(500).json({ message: "Server error" });
  }
};
export const Admin = async(req,res,next)=>{
   const user = await AdminUser.findById(req.user.id)
   res.status(200).json(user)
}