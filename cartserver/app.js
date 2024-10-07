const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const productRoutes = require('./routes/productRoute');
const cartRoutes = require('./routes/cartRoute');

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Routes
app.use('/api/products', productRoutes);
app.use('/api/cart', cartRoutes);

// MongoDB Connection
mongoose.connect('mongodb://localhost:27017/cart', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log('Connected to MongoDB'))
.catch((err) => console.error(err));

// Start server
app.listen(5000, () => {
    console.log('Server is running on port 5000');
});
