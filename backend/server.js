import dotenv from 'dotenv';
dotenv.config();

import express from 'express'
import cors from 'cors';
import path from 'path';
import { fileURLToPath } from 'url';

//ES6 Module_dirname alternative
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

//Initialize express app
const app = express();

//Connect to MongoDB
connectBD();

//Middleware to handle CORS
app.use(
  cors({
    origin: "*",
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true,
  })
);

app.use(express.json());
app.use(express.urlencoded({extended: true}));