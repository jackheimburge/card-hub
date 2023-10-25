import sendRequest from './send-request';

const BASE_URL = '/api/cards';

export function getCard(id) {
    return sendRequest(`${BASE_URL}/${id}`)
}

export function getAllCards() {
    return sendRequest(BASE_URL);
}

export function add(cardData) {
    return sendRequest(BASE_URL, 'POST', cardData);
}

export function update(cardData) {
    return sendRequest(`${BASE_URL}/${cardData._id}/edit`, 'PUT', cardData);
}

export function deleteCard(card) {
    console.log(card._id, 'card_id')
    return sendRequest(`${BASE_URL}/${card._id}`, 'DELETE', card)
}