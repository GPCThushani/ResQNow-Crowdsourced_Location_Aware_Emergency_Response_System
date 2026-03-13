const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { 
    type: String, 
    enum: ['Citizen', 'Admin', 'Authority'], // Matches your Role Modeling 
    default: 'Citizen' 
  },
  contact_number: { type: String, required: true },
  registered_date: { type: Date, default: Date.now }
});

module.exports = mongoose.model('User', UserSchema);