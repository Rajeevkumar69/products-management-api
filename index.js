import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from 'mongoose';
import helmet from "helmet";
import router from "./routes/product-route.js";

dotenv.config();

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(helmet());

const dbUrl = process.env.DATABASE_URL; 
const dbName = 'product'; 

try {
     await mongoose.connect(`${dbUrl}/${dbName}`);
     console.log("___________Connected_______________");
} catch (err) {
     console.error("MongoDB connection error:", err);
     process.exit(1);
}


app.use("/products", router);

app.get('', (req, res)=>{
     res.send(`Hello World!`);
} );


const PORT = process.env.PORT || 4800;
app.listen(PORT, () => {
     console.log(`Server is running on port ${PORT}`);
});
