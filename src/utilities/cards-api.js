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