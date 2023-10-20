const Card = require('../../models/card');

module.exports = {
    getAllCards,

}

async function getAllCards(req, res) {
    const allCards = await Card.find({});
    res.json(allCards);
}