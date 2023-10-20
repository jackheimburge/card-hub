import sendRequest from './send-request';

const BASE_URL = '/api/cards';

export function getAllCards() {
    return sendRequest(BASE_URL);
}