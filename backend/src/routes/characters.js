const express = require("express");
const router = express.Router();
const { getAllCharacters, getCharactersByUserId } = require("../controllers/charactersController");


// GET /api/characters - zwraca wszystkie postacie
router.get('/', getAllCharacters);
// GET /api/characters/:user_id
router.get("/:user_id", getCharactersByUserId);

module.exports = router;
