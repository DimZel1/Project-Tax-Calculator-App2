const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/taxrates', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const CountrySchema = new mongoose.Schema({
  name: String,
  taxRate: Number,
  averageSalary: Number,
});
const Country = mongoose.model('Country', CountrySchema);

const seedData = [
  { name: 'United States', taxRate: 21, averageSalary: 60000 },
  { name: 'Germany', taxRate: 29.8, averageSalary: 54000 },
  { name: 'India', taxRate: 30, averageSalary: 10000 },
  { name: 'Canada', taxRate: 26.5, averageSalary: 50000 },
];

Country.insertMany(seedData)
  .then(() => {
    console.log('Seeded DB!');
    mongoose.connection.close();
  })
  .catch(err => console.log(err));