import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import password from "./api/password.route.js";

const app = express();

app.use(cors());
app.use(express.json());
app.use(bodyParser.json());

app.use("/api/v1/password", password);
app.use("*", (req, res) => res.status(404).json({ error: "Page not found" }));
export default app;
