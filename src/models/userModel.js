const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
         type: String,
          required: true 
        },

  email: { 
    type: String, 
    required: true,
     unique: true 
    },
  phone: {
     type: String,
      required: true,
       unique: true 
    },
  profileImage: {
    type: String,
  },
  password: {
     type: String,
      required: true 
    },
  role: {
     type: String,
      enum: ['Admin', 'User'],
       default: 'User' 
    },
});

module.exports = mongoose.model('User', userSchema);
