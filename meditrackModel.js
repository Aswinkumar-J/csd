// models/meditrackModel.js
const mongoose = require('mongoose');

const mediTrackSchema = new mongoose.Schema({
  medicineName: { type: String, required: true },
  dosage: { type: String, required: true },
  frequency: {
    type: String,
    required: true,
    enum: ['Once Daily', 'Twice Daily', 'Three Times Daily', 'As Needed'],
  },
  timings: {
    type: [String],
    required: true,
    validate: {
      validator: (v) => v && v.length > 0,
      message: 'At least one timing is required',
    },
  },
  startDate: { type: Date, required: true },
  endDate: {
    type: Date,
    required: true,
    validate: {
      validator: function (v) {
        return !this.startDate || v >= this.startDate;
      },
      message: 'End date must be after start date',
    },
  },
  purpose: { type: String, required: true },
  isActive: { type: Boolean, default: true },
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
});

const MediTrack = mongoose.model('MediTrack', mediTrackSchema);
module.exports = MediTrack;
