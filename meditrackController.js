// controllers/meditrackController.js
const MediTrack = require('../models/meditrackModel');

const getAllMediTracks = async (req, res) => {
  try {
    const { sortOrder } = req.body;
    const tracks = await MediTrack.find().sort({ startDate: sortOrder });
    res.status(200).json(tracks);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const addMediTrack = async (req, res) => {
  try {
    await MediTrack.create(req.body);
    res.status(200).json({ message: 'Medicine Track Added Successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { getAllMediTracks, addMediTrack };
