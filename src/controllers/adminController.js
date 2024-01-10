const User = require('../models/User');

async function createAdmin(req, res) {
  try {
    const { email, phone, name, password } = req.body;

    // Encrypt password
    const hashedPassword = await bcrypt.hash(password, 10);

    const admin = new User({
      email,
      phone,
      name,
      password: hashedPassword,
      role: 'Admin',
    });

    await admin.save();
    res.status(201).json({ message: 'Admin account created successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
}

module.exports = { createAdmin };
