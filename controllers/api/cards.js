const Card = require('../../models/card');

module.exports = {
    getAllCards,
    create,
    getCard,
    deleteCard,
    update
}

async function getAllCards(req, res) {
    const allCards = await Card.find({ isSold: false });
    res.json(allCards);
}

async function create(req, res) {
    req.body.user = req.user._id;
    const newCard = await Card.create(req.body);
    res.json(newCard);
}

async function getCard(req, res) {
    const card = await Card.findById(req.params.id).populate('user');
    res.json(card);
}

async function deleteCard(req, res) {
    const deletedCard = await Card.deleteOne(req.body);
    res.json(deletedCard);
}

async function update(req, res) {
    await Card.findByIdAndUpdate(req.params.id, req.body);
    const allCards = await Card.find({})
    res.json(allCards);
}