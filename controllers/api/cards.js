const Card = require('../../models/card');

module.exports = {
    getAllCards,
    create,
    getCard

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
    console.log(card, 'card in controller');
    res.json(card);
}