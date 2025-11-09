import express from "express";
import cors from "cors";
import { getRandomQuote } from "./quotes.js";

const app = express();

// Enable CORS so the frontend (running on a different port) can call this API
app.use(cors());

// Test root route
app.get("/", (req, res) => {
	res.send("Welcome to the Quote Generator API");
});

// Quote API route
app.get("/api/quote", (req, res) => {
	const quote = getRandomQuote();
	res.json({ quote });
});

const PORT = 3000;

app.listen(PORT, () => {
	console.log(`Server running on http://localhost:${PORT}`);
});