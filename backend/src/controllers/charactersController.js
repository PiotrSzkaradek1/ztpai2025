const db = require("../db");

const getAllCharacters = async (req, res) => {
  try {
    const result = await db.query('SELECT * FROM characters');
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
};

const getCharactersByUserId = async (req, res) => {
  const userId = parseInt(req.params.user_id);

  if (isNaN(userId)) {
    return res.status(400).json({ message: "Invalid user_id" });
  }

  try {
    const result = await db.query(
      "SELECT * FROM characters WHERE user_id = $1",
      [userId]
    );

    if (result.rows.length === 0) {
      return res.status(404).json({ message: "No characters found" });
    }

    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error", error: err.message });
  }
};

const getCharactersGroupByLevel = async (req, res) => {
  try {
    const result = await db.query(`SELECT level, COUNT(*) 
    FROM characters
    GROUP BY level
    ORDER BY level;
    `);
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
};

module.exports = { 
  getAllCharacters,
  getCharactersByUserId,
  getCharactersGroupByLevel
  };
