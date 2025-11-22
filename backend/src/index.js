const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config();

const charactersRouter = require("./routes/characters");

app.use(express.json());
app.use(cors());

// Root endpoint
app.get("/", (req, res) => {
  res.send("API is working!");
});

// Obsługa characters
app.use("/api/characters", charactersRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`API running on port ${PORT}`));
