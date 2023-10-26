const express = require('express');
const router = express.Router();
const controller = require('../controller/CUser');

// localhost:8000/user
router.get('/', controller.main); // index.ejs render

// localhost:8000/user/login (POST)
router.post('/login', controller.login);

module.exports = router;
