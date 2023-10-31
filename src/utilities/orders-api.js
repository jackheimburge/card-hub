import sendRequest from './send-request';
const BASE_URL = '/api/orders';

export function addCardToCart(cardId) {
    return sendRequest(`${BASE_URL}/cart/items/${cardId}`, 'POST');
}

export function removeCardFromCart(cardId) {
    return sendRequest(`${BASE_URL}/cart/items/${cardId}`, 'DELETE')
}

export function getCart() {
    return sendRequest(`${BASE_URL}/cart`);

}

export function checkout() {
    return sendRequest(`${BASE_URL}/cart/checkout`, 'POST')
}


