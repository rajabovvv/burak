import dotenv from "dotenv";
import mongoose from "mongoose";
import app from "./app";
dotenv.config();

mongoose

.connect(process.env.MONGO_URL as string, {})
.then((data) => {
    console.log("MngoDB connnection succeed");
    const PORT = process.env.PORT ?? 3003;
    app.listen(PORT,function () {
        console.log(`The server is running successfully on port:${PORT}`);
    })
})
.catch((err) => console.log("ERROR on connection",err)); 