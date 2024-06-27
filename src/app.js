import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();

//Middleware for CORS
app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
  })
);

//Middleware for JSON
app.use(express.json({ limit: "16kb" }));

//Middleware for URL Handling
app.use(express.urlencoded({ extended: true, limit: "16kb" }));

//Middleware for public folder with assets
app.use(express.static("public"));

//Middleware for Cookie Parser
app.use(cookieParser());

export { app };
