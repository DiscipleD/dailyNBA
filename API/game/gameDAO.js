/**
 * @author Disciple_D
 * @since 2015/12/17 10:00
 */
'use strict';
const gameModule = require('../../db/modules/game');

console.log('query start');

exports.findByDate = function(date, cb){
  (new gameModule()).find({'gameDate': {"$gt": new Date(date)}}, (err, result) => {
    cb(result);
  });
};