const User = require('../models/user');

async function modifyUserDetails(req, res) {
  try {
    const { name, profileImage } = req.body;
    const userId = req.user._id;

    // Users can only modify their own name and profile image
    await User.findByIdAndUpdate(userId, { name, profileImage });

    res.json({ message: 'User details updated successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
}

async function deleteUser(req, res) {
  try {
    const userId = req.user._id;

    // Delete user
    await User.findByIdAndDelete(userId);

    res.json({ message: 'User account deleted successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
}

module.exports = { modifyUserDetails, deleteUser };
