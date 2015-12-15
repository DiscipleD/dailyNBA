var express = require('express');
var router = express.Router();
var path = require('path');

/* GET users listing. */
router.get('/', function(req, res, next) {
  var locPath = path.join(__dirname, '../public/templates/user.html');
  console.log(locPath);
  res.sendFile(locPath);
});

module.exports = router;
