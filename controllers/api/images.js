const uploadImages = require('../../config/upload-images');

module.exports = {
    upload
}

async function upload(req, res) {
    try {
        if (req.files) {
            const imgUrls = await Promise.all(req.files.map(uploadImages))
            res.json(imgUrls);
        } else {
            throw new Error('Must select a file');
        }
    } catch (error) {
        console.log('error reached in controller');
        res.status(400).json(error.message);
    }
}