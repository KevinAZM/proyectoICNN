import mongoose from 'mongoose';

async function connectDB() {
  try {
    await mongoose.connect('mongodb+srv://pablo:jrbehAcCfNLJBiOD@cluster0.je3g2jd.mongodb.net/productsCRUD');
    console.log('Conexión exitosa a MongoDB');
  } catch (error) {
    console.error('Error al conectar con MongoDB:', error);
  }
}

export default connectDB;

