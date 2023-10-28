const express = require('express');
const router = express.Router();
const controller = require('../controller/Cvisitor');

// ~~~~:8000 -> index.ejs 렌더하기
router.get('/', controller.home);

// ~~~~:8000/visitors -> visitor.ejs 렌더하기
router.get('/visitors', controller.visitor);

// 방명록 등록 (post)
router.post('/visitor', controller.postVisitor);

// 방명록 수정 (patch)
router.patch('/visitor/:id', function (req, res) {
  res.send('');
});

// 방명록 삭제 (delete)
router.delete('/visitor/:id', controller.deleteVisitor);

module.exports = router;
