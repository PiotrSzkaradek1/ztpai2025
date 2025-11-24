const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config();

const charactersRouter = require("./routes/characters");
const usersRouter = require("./routes/users");

app.use(express.json());
app.use(cors());

// Root endpoint
app.get("/", (req, res) => {
  res.send("API is working!");
});

// Obsługa characters
app.use("/api/characters", charactersRouter);
app.use("/api/users", usersRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`API running on port ${PORT}`));
