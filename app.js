// app.js

const path = require("path")
process.env['NODE_CONFIG_DIR'] = path.join(path.resolve("./"),"config/")

const express = require('express');
const connectDB = require('./config/db');
const cors = require('cors');

// routes
const articles = require('./routes/api/articles');

const app = express();

// Connect Database
connectDB();

// cors
app.use(cors({ origin: true, credentials: true }));

// Init Middleware
app.use(express.json({ extended: false }));

app.get('/', (req, res) => res.send('Hello world!'));

// use Routes
app.use('/api/articles', articles);

const port = process.env.PORT || 8082;

app.listen(port, () => console.log(`Server running on port ${port}`));