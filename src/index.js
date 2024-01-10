const express = require('express');
const mongoose = require('mongoose');
const authRoutes = require('./routes/routes');


const app = express();

app.use(express.json());

mongoose.connect('mongodb+srv://stuti3007:w14E1dmx6wAE1h7i@cluster0.rrvbnsb.mongodb.net/BWI-ASSIGN', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});



const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
