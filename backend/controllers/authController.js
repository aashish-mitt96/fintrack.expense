import User from "../models/User.js";
import Business from "../models/Business.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";

// Generate JWT token
const generateToken = (user) => {
  return jwt.sign({ id: user._id, role: user.role, businessId: user.businessId }, process.env.JWT_SECRET, {
    expiresIn: "7d",
  });
};

// Admin registers a business and gets businessId/password
export const registerBusiness = async (req, res) => {
  try {
    const { name, email, password, businessName } = req.body;
    const existingUser = await User.findOne({ email });
    if (existingUser) return res.status(400).json({ msg: "Admin already exists" });

    const businessId = `BIZ-${Math.floor(100000 + Math.random() * 900000)}`;
    const businessPasswordPlain = Math.random().toString(36).slice(-8);
    const hashedBusinessPassword = await bcrypt.hash(businessPasswordPlain, 10);

    const business = await Business.create({
      businessName,
      businessId,
      businessPassword: hashedBusinessPassword,
    });

    const user = await User.create({
      name,
      email,
      password,
      role: "admin",
      businessId,
    });

    res.status(201).json({
      msg: "Business Registered",
      businessId,
      businessPassword: businessPasswordPlain,
      token: generateToken(user),
    });
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
};

// Login for all roles
export const loginUser = async (req, res) => {
  try {
    const { businessId, email, password } = req.body;

    const business = await Business.findOne({ businessId });
    if (!business) return res.status(400).json({ msg: "Business not found" });

    const user = await User.findOne({ email, businessId });
    if (!user) return res.status(400).json({ msg: "User not found" });

    const isPasswordMatch = await user.matchPassword(password);
    if (!isPasswordMatch) return res.status(400).json({ msg: "Invalid credentials" });

    res.status(200).json({
      token: generateToken(user),
      user: {
        id: user._id,
        name: user.name,
        role: user.role,
        businessId: user.businessId,
        email: user.email,
      },
    });
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
};

// Add accountant or viewer (by admin)
export const addUserToBusiness = async (req, res) => {
  try {
    const { name, email, password, role, businessId, businessPassword } = req.body;
    if (!["accountant", "viewer"].includes(role)) return res.status(400).json({ msg: "Invalid role" });

    const business = await Business.findOne({ businessId });
    if (!business || !(await bcrypt.compare(businessPassword, business.businessPassword))) {
      return res.status(401).json({ msg: "Invalid business credentials" });
    }

    const existingUser = await User.findOne({ email, businessId });
    if (existingUser) return res.status(400).json({ msg: "User already exists" });

    const user = await User.create({ name, email, password, role, businessId });
    res.status(201).json({ msg: `${role} added`, userId: user._id });
  } catch (err) {
    res.status(500).json({ msg: err.message });
  }
};
