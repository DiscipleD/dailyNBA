/**
 * @author Disciple_D
 * @since 2015/12/17 11:00
 */
'use strict';
const express = require('express');
const router = express.Router();
const gameDAO = require('../../API/game/gameDAO');


/* GET home page. */
router.get('/:date', function(req, res) {
  const queryDate = req.params.date;
  gameDAO.findByDate(queryDate, function(data){
    res.send(data);
  });
});

module.exports = router;
