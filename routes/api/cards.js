const express = require('express');
const router = express.Router();
const cardsCtrl = require('../../controllers/api/cards');
const ensureLoggedIn = require('../../config/ensureLoggedIn');

// all paths start with '/api/cards'


// GET /api/cards (get all cards)
router.get('/', cardsCtrl.getAllCards);
// POST /api/users/login


module.exports = router;