const express = require('express');
const router = express.Router(); // router 객체는 하나의 미들웨어로서 사용됨. router들을 모아두는 객체
const controller = require('../controller/Cmain'); // Cmain.js 불러오기

// 요청에 대한 정보를 모아둠

// localhost:8000
router.get('/', controller.main); // GET. controller에 main이라는 함수

// localhost:8000/comments
router.get('/comments', controller.comments); // GET. controller에 comments이라는 함수

// localhost:8000/user
router.get('/user', function () {});

module.exports = router; // 상단 디렉토리의 index.js 로 export
