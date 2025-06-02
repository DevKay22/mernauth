import express from "express";
import cors from "cors";
import 'dotenv/config';
import cookieParser from "cookie-parser";
import connectDB from "./config/mongodb.js";

const app = express();

const port = process.env.PORT || 5000;
connectDB();
import authRouter from './Routes/authRoutes.js'

app.use(express.json());
app.use(cookieParser());
app.use(cors({credentials: true}));

// API endpoints
app.get("/", (req, res)=> {
    res.send("api is working fine");
})
app.use('/api/auth', authRouter )
app.listen(port, () => {
    console.log(`Server is listening on port ${port}`)
})

