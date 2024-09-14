const express = require('express'); 
const router = express.Router(); 
const controller = require('./service2.controller'); 
router.get('/goodbye', controller.sayGoodbye); 
module.exports = router;