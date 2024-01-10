const bcrypt = require('bcrypt');
const { generateJWT } = require('../utils/authUtils');
const User = require('../models/User');

async function signup(req, res) {
  try {
    const { email, phone, name, password } = req.body;


    // Encrypt password
    const hashedPassword = await bcrypt.hash(password, 10);

    const user = new User({
      email,
      phone,
      name,
      password: hashedPassword,
    });

    await user.save();
    res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
}

async function login(req, res) {
  try {
    const { email, phone, password } = req.body;


    // Find user by email or phone
    const user = await User.findOne({ $or: [{ email }, { phone }] });

    if (!user || !(await bcrypt.compare(password, user.password))) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    // Generate JWT
    const token = generateJWT(user._id, user.role);

    res.json({ token });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
}

module.exports = { signup, login };
