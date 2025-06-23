import User from '../models/User.js';
import Business from '../models/Business.js';
import bcrypt from 'bcrypt';

// Create Admin account for an approved business
export const createAdmin = async (req, res) => {
  try {
    const { name, email, password, businessName } = req.body;

    // Find the business and check if approved
    const business = await Business.findOne({ name: businessName });
    if (!business) return res.status(404).json({ message: 'Business not found' });
    if (!business.approved) return res.status(400).json({ message: 'Business not approved yet' });

    // Check if admin user already exists for this business
    const existingAdmin = await User.findOne({ businessId: business._id, role: 'admin' });
    if (existingAdmin) return res.status(400).json({ message: 'Admin already exists for this business' });

    const hashedPassword = await bcrypt.hash(password, 10);
    const adminUser = new User({
      name,
      email,
      password: hashedPassword,
      role: 'admin',
      status: 'approved',
      businessId: business._id
    });

    await adminUser.save();

    res.status(201).json({ message: 'Admin user created', adminUser: { name, email, businessName } });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Approve user signup requests (only admin)
export const approveUser = async (req, res) => {
  try {
    const { userId } = req.params;
    const user = await User.findById(userId);
    if (!user) return res.status(404).json({ message: 'User not found' });

    user.status = 'approved';
    await user.save();

    res.json({ message: 'User approved' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Reject user signup requests (only admin)
export const rejectUser = async (req, res) => {
  try {
    const { userId } = req.params;
    const user = await User.findById(userId);
    if (!user) return res.status(404).json({ message: 'User not found' });

    user.status = 'rejected';
    await user.save();

    res.json({ message: 'User rejected' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// List users pending approval for the admin's business
export const listPendingUsers = async (req, res) => {
  try {
    const users = await User.find({ businessId: req.user.businessId, status: 'pending' }).select('-password');
    res.json(users);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
