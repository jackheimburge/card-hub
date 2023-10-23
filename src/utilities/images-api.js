import sendRequest from './send-request';
// const BASE_URL = '/api/images';

export function uploadImgs(imgFiles) {
    // See refactored sendRequest function that now accepts a 4th arg
    // used to specify that the payload is a FormData object
    return sendRequest('/api/images/upload', 'POST', imgFiles, true);
}
