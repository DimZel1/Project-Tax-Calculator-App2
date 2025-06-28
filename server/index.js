const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/taxrates', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const CountrySchema = new mongoose.Schema({
  name: String,
  taxRate: Number,
});
const Country = mongoose.model('Country', CountrySchema);

app.get('/api/countries', async (req, res) => {
  const countries = await Country.find();
  res.json(countries);
});

app.listen(5000, () => {
  console.log('Server running on port 5000');
});