 import AdminUser from "../models/AdminUser.model.js";
import bcrypt from "bcryptjs";

export const signupAdminUser = async (req, res) => {
  console.log("REQ BODY:", req.body);
  console.log("REQ FILE:", req.file);


  //const hashedPassword = bcrypt.hashSync(req.body.password, 10);

  const data = {
    fullName: req.body.fullName,
    email: req.body.email,
    phone: req.body.phone,
    address: req.body.address,
    cnic: req.body.cnic,
    password:req.body.password,
    image: req.file.path,
  };

  const user = await AdminUser.create(data);

  res.json({ success: true, message: "Admin user created", user });
};
