const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

// Connect to your local MongoDB
mongoose.connect('mongodb://localhost:27017/aushadhi')
  .then(() => console.log('Connected to MongoDB!'))
  .catch(err => console.error('MongoDB connection error:', err));

// Define a Medicine Schema
const medicineSchema = new mongoose.Schema({
  name: String,
  price: Number,
  shop: String,
  location: String
});
const Medicine = mongoose.model('Medicine', medicineSchema);

// API: Get all medicines
app.get('/medicines', async (req, res) => {
  const medicines = await Medicine.find();
  res.json(medicines);
});

// API: Add a new medicine
app.post('/medicines', async (req, res) => {
  const newMedicine = new Medicine(req.body);
  await newMedicine.save();
  res.status(201).json(newMedicine);
});

// Start server
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Backend running on http://localhost:${PORT}`);
});