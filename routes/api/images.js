const express = require('express');
const router = express.Router();
const upload = require('multer')();
const imagesCtrl = require('../../controllers/api/images');

//POST api/images/upload
router.post('/upload', upload.array('images'), imagesCtrl.upload);


module.exports = router;