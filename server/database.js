const mongoose = require('mongoose');

module.exports = async () => {
  await mongoose
    .connect('mongodb://localhost:27017/mytodos')
    .then(() => console.log('DB Connected 🎉'))
    .catch((error) => console.log('Error in DB Connection 😔', error));
};
