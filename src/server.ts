import dotenv from "dotenv";
import mongoose from "mongoose";
dotenv.config();

mongoose

.connect(process.env.MONGO_URL as string, {})
.then((data) => {
    console.log("MngoDB connnection succeed");
    const PORT = process.env.PORT ?? 3003;
})
.catch((err) => console.log("ERROR on connection",err));