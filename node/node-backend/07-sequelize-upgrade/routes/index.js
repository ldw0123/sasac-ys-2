const express = require('express');
const router = express.Router();
// controller 불러오기
const controller = require('../controller/Cmain');

// controller의 main함수 사용
router.get('/', controller.main);

module.exports = router;
