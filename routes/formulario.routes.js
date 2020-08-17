const express = require('express');
const router = express.Router();
const formCtrl = require('../controller/formulario.controller')


router.post('/email',formCtrl.email);


module.exports = router;
