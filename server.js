const express = require('express');
const path = require('path');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.static(path.join(__dirname, '/client')));

const server = app.listen(8000, () => {
    console.log('Server is running on port: 8000');
});