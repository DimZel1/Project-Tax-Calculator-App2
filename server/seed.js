const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/taxrates', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const CountrySchema = new mongoose.Schema({
  name: String,
  taxRate: Number,
});
const Country = mongoose.model('Country', CountrySchema);

const seedData = [
  { name: 'United States', taxRate: 21 },
  { name: 'Germany', taxRate: 29.8 },
  { name: 'India', taxRate: 30 },
  { name: 'Canada', taxRate: 26.5 },
];

Country.insertMany(seedData)
  .then(() => {
    console.log('Seeded DB!');
    mongoose.connection.close();
  })
  .catch(err => console.log(err));