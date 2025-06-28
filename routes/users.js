var express = require('express');
var router = express.Router();
var USERC = require('../controller/user')
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});


router.get('/getData' , USERC.getData)
router.post('/createData' , USERC.createData)



module.exports = router;
