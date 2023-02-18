import express from "express";
import path from "path";
import logger from "morgan";
import dotenv from "dotenv";
import cors from "cors";
import { dirname } from "path";
import { fileURLToPath } from "url";
import sendMail from "./sendMail.js";

// dirname
export const __dirname = dirname(fileURLToPath(import.meta.url));

// dotenv
dotenv.config();

// express
var app = express();

// middlewares
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));
app.use(cors());

// socket
app.post("/sendmail", async (req, res) => {
    const { name, email, college, code } = req.body;
    const mail = await sendMail(name, code, college, email);
    if (mail) {
        res.status(200).json({ message: "OK" });
    } else {
        res.status(400).json({ message: "Message not sent!" });
    }
});

// catch 404 and forward to error handler
app.use(function (req, res, next) {
    next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
    res.status(400).json({
        error: err,
        message: "FAILURE",
    });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Successfully listening on port ${PORT}!`);
});
