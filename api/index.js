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

const app = express()

dotenv.config()

const connect = async () => {
    try {
        await mongoose.connect('mongodb+srv://aashutoshag03:EeNywFp4tAHaWC6s@cluster0.ubxkjer.mongodb.net/test?retryWrites=true&w=majority');
        console.log("connected to mongoDb.")
    }
    catch (error) {
        throw error

    }
};

mongoose.connection.on("disconnected", () => {
    console.log("mongo disconnected")
})

app.use(cors());
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

app.listen(8080, listen => {
    connect()
    console.log('connected to server..')
})

