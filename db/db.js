/**
 * @author Disciple_D
 * @since 2015/12/11 11:00
 */
'use strict';
const settings = require('./settings'),
  MongoClient = require('mongodb').MongoClient;

const dbConnection = function(name, cb){
  MongoClient.connect(settings.host + '/' + settings.db, (err, db) => {
    if (err) cb(err);

    console.log('Mongo Db is connected.');

    let collection = db.collection(name);

    if (typeof collection === 'undefined') {
      db.createCollection(name);
      collection = db.collection(name);
    }
    cb(null, db, collection);
    //if (typeof callback === 'function') {
    //  cb(db, collection);
    //}
  });
};

module.exports = dbConnection;