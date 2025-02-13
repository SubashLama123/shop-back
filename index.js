import express from "express";
import productRoutes from './routes/productRoutes.js';
import userRoutes from './routes/userRoutes.js';
import mongoose from "mongoose";


const port = 5000;

const app = express();

mongoose.connect('mongodb+srv://lamasubaah2:moles900@cluster0.vzpci.mongodb.net/ShopUs').then((val) => {
  app.listen(port, (e) => {
    console.log('connected');
  });

}).catch((err) => {
  console.log(err);
});


app.use(express.json());


app.get('/', (req, res) => {
  return res.status(200).json({ data: 'hello jee' });
});


app.use('/api/products', productRoutes);
app.use('/api/users', userRoutes);


