const jwt = require('jsonwebtoken');
const User = require('../models/User');

function generateJWT(userId, role) {
    return jwt.sign({ userId, role }, 'your-secret-key', { expiresIn: '1h' });
  }
  
  

function authenticateJWT(req, res, next) {
  const token = req.header('Authorization');

  if (!token) return res.status(401).json({ message: 'Unauthorized' });

  jwt.verify(token, 'your-secret-key', async (err, user) => {
    if (err) return res.status(403).json({ message: 'Forbidden' });

    req.user = await User.findById(user.userId);
    next();
  });
}

module.exports = { generateJWT, authenticateJWT };
