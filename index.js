import express from "express"
import dotenv from "dotenv"
import mongoose from "mongoose"
import authRoute from "./routes/auth.js"
import hallsRoute from "./routes/halls.js"
import slotsRoute from "./routes/slots.js"
import usersRoute from "./routes/users.js"
import contactRoute from "./routes/contact.js"
import confirmbRoute from "./routes/confirmb.js"
import cookieParser from "cookie-parser"
import cors from "cors"
import path from "path"
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);


const app = express()
dotenv.config()


const connect = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log("connected to mongoDb.")
    }
    catch (error) {
        throw error

    }
};

mongoose.connection.on("disconnected", () => {
    console.log("mongo disconnected")
})

app.use(cors())
app.use(cookieParser())
app.use(express.json())

app.use("/api/auth", authRoute);
app.use("/api/halls", hallsRoute);
app.use("/api/slots", slotsRoute);
app.use("/api/users", usersRoute);
app.use("/api/contact", contactRoute)
app.use("/api/confirmb", confirmbRoute)

app.use((err, req, res, next) => {
    const errorStatus = err.status || 500;
    const errorMessage = err.message || "Something went wrong"
    return res.status(errorStatus).json({
        success: false,
        status: errorStatus,
        messgae: errorMessage,
        stack: err.stack,
    });
});

app.get("/", (req, res) => {
    app.use(express.static(path.resolve(__dirname, "admin", "build")));
    res.sendFile(path.resolve(__dirname, "admin", "build", "index.html"));
});

app.listen(8080, listen => {
    connect()
    console.log('connected to server..')
})

