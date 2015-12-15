/**
 * @author Disciple_D
 * @since 2015/12/08 16:30
 */
  'use strict';
const cheerio = require('cheerio');

const request = require('./service/request');
const Team = require('./../db/modules/team');
const Game = require('./../db/modules/game');

request('http://nba.hupu.com/', 'GET', 'gb2312', (err, res, body) => {
  if (err) return console.error(err);

  // load page content, and create DOM object
  const $ = cheerio.load(body.toString());

  let gameList = [];
  $('.boxscore .nbaBox>.listBox>.gamespace_list_no').each((index, item) =>{
    let self = $(item);

    let homeTeam = new Team(self.find('.nameText a').first().text().trim());
    let awayTeam = new Team(self.find('.nameText a').last().text().trim());
    let score = self.find('.bifen a').text().split(':');
    let homeScore = parseInt(score[0].trim());
    let awayScore = parseInt(score[1].trim());
    let report = self.find('tr').last().find('td').first().find('a');
    let reportTitle = report.text();
    let reportUrl = report.attr('href');

    let game = new Game(homeTeam, homeScore, awayTeam, awayScore, reportTitle, reportUrl, new Date());

    gameList.push(game);

    game.save((err, result) => {
      console.log(err, result);
    });
  });

  console.log(gameList);
});