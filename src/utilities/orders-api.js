import sendRequest from './send-request';
const BASE_URL = '/api/orders';

export function addCardToCart(cardId) {
    console.log(cardId, 'from orders-api');
    return sendRequest(`${BASE_URL}/cart/items/${cardId}`, 'POST');
}

export function getCart() {
    return sendRequest(`${BASE_URL}/cart`);
}


