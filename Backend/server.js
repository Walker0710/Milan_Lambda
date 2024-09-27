const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const cors = require('cors');

dotenv.config();

const app = express();

connectDB();

app.use(express.json());
app.use(cors({
    origin: 'http://localhost:5173',
    credentials: true,
}));

app.use('/api/auth', require('./routes/auth'));
app.use('/api/users', require('./routes/user'));
<<<<<<< HEAD
app.use('/api/clubs', require('./routes/clubs'));
=======
// app.use('/api/addQuestion', require('./routes/addQuestion'));
>>>>>>> bb71c72574a2a12a0b8d8d69edb6439e2d75858d

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));


