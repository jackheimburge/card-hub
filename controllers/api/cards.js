const Card = require('../../models/card');

module.exports = {
    getAllCards,
    create,
    getCard,
    deleteCard

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

async function getCard(req, res) {
    const card = await Card.findById(req.params.id).populate('user');
    res.json(card);
}

async function deleteCard(req, res) {
    const deletedCard = await Card.deleteOne(req.body);
    console.log('deleted card in controller:', deletedCard.player)
    res.json(deletedCard);
}