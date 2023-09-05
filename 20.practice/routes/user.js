const express = require('express');

const controller = require('../controller/Cuser');
const router = express.Router();

router.get('/', controller.index);
router.get('/users', controller.getUsers);

router.get('/register', controller.getRegister);
router.post('/register', controller.postRegister);

router.get('/login', controller.getLogin);
router.post('/login', controller.postLogin);

router.get('/profile', controller.getProfile);
router.patch('/profile/edit', controller.patchProfile);
router.delete('/destroy', controller.deleteUser);

module.exports = router;
