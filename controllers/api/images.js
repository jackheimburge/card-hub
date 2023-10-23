const uploadImage = require('../../config/upload-images');

module.exports = {
    upload
}

async function upload(req, res) {
    try {
        if (req.file) { // Use req.files.images to access the uploaded images
            console.log('img url')
            const imgUrl = await uploadImage(req.file);
            console.log('img url')
            res.json(imgUrl);
        } else {
            throw new Error('Must select a file');
        }
    } catch (error) {
        console.log('error reached in controller');
        res.status(400).json(error.message);
    }
}