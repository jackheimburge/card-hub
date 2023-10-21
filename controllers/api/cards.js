const Card = require('../../models/card');

module.exports = {
    getAllCards,
    create

}

async function getAllCards(req, res) {
    const allCards = await Card.find({});
    res.json(allCards);
}

async function create(req, res) {
    req.body.user = req.user._id;
    const newCard = await Card.create(req.body);
    res.json(newCard);
}