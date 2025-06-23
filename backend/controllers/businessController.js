import Business from '../models/Business.js';

// Register business
export const registerBusiness = async (req, res) => {
  try {
    const { name, industry, email } = req.body;

    const existing = await Business.findOne({ name });
    if (existing)
      return res.status(400).json({ message: 'Business already registered' });

    const business = new Business({ name, industry, email });
    await business.save();

    res.status(201).json({ message: 'Business registered successfully', business });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// (Optional) Admin approves business
export const approveBusiness = async (req, res) => {
  try {
    const { id } = req.params;
    const business = await Business.findById(id);
    if (!business) return res.status(404).json({ message: 'Business not found' });

    business.approved = true;
    await business.save();

    res.json({ message: 'Business approved' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
