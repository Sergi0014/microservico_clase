const express = require('express'); 
const router = express.Router(); 
const controller = require('./service1.controller'); 
router.get('/hello', controller.sayHello); 
module.exports = router;