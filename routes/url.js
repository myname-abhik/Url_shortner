const express = require('express');
const router = express.Router();
const GenerateNewShortUrl = require('../controllers/url');
router.post('/', GenerateNewShortUrl.post);
module.exports = router;