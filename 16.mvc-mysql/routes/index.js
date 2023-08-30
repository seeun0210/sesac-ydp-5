const express = require('express');
const controller = require('../controller/Cvisitor');
const router = express.Router();

// 기본주소: localhost:PORT
router.get('/', controller.main);
router.get('/visitors', controller.getVisitors);
router.post('/visitor', controller.postVisitor);
router.delete('/visitor', controller.deleteVisitor);
router.get('/visitor/:id', controller.getVisitor);
router.patch('/visitor', controller.updateVisitor);
//모든정보를 조회할 때는 s붙였고 하나만 조회할때는 s안붙임

module.exports = router;
