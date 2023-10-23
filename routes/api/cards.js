const express = require('express');
const router = express.Router();
const cardsCtrl = require('../../controllers/api/cards');
const ensureLoggedIn = require('../../config/ensureLoggedIn');


// all paths start with '/api/cards'


// GET /api/cards (get all cards)
router.get('/', cardsCtrl.getAllCards);

//GET /api/cards/:id (get single card)
router.get('/:id', cardsCtrl.getCard);

//PUT /api/cards/:id (update a single card)
// router.put('/:id')

// POST /api/cards (create new card)
router.post('/', cardsCtrl.create);


module.exports = router;