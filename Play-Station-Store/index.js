// mongodb+srv://jashwanthsai07251:<db_password>@cluster0.00xpv.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0

import dotenv from 'dotenv';
import express from 'express';
import connectDB from './mongodb.js';

dotenv.config();

const app = express();

connectDB();

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
}); 