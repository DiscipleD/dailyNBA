/**
 * @author Disciple_D
 * @since 2015/12/10 16:00
 */
'use strict';
const db = require('../db');

// need change to Class in ES6
function Game(home, homeScore, away, awayScore, reportTitle, reportUrl, date){
  this.homeTeam = home;
  this.homeScore = homeScore;
  this.awayTeam = away;
  this.awayScore = awayScore;
  this.reportTitle = reportTitle;
  this.reportUrl = reportUrl;
  this.gameDate = date;
}

module.exports = Game;

Game.prototype.save = function(cb){
  let game = {
    homeTeam: this.homeTeam,
    homeScore: this.homeScore,
    awayTeam: this.awayTeam,
    awayScore: this.awayScore,
    reportTitle: this.reportTitle,
    reportUrl: this.reportUrl,
    gameDate: this.gameDate
  };

  if (db){
    db('games', (err, db, collection) => {
      if (err){
        db.close();
        return cb(err);
      }

      collection.insert(game, {
        safe: true
      }, (err, game) => {

        db.close();

        console.log('Mongo Db connection is closed.');

        if (err) return cb(err);

        cb(null, game);
      });
    });
  }

};

