import sendRequest from './send-request';

export function uploadImgs(imgFiles) {
    return sendRequest('/api/images/upload', 'POST', imgFiles, true);
}
