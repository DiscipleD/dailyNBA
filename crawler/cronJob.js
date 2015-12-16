/**
 * @author Disciple_D
 * @since 2015/12/16 11:00
 */
'use strict';
const path = require('path');
const spawn =require('child_process').spawn;
const cronJob = require('cron').CronJob;
const config = require('./config');

module.exports = new cronJob(config.autoUpdate, function(){
  const job = spawn(process.execPath, [path.resolve(__dirname, 'score_box.js')]);

  console.log('cron job start：' + new Date());

  job.stdout.pipe(process.stdout);
  job.stderr.pipe(process.stderr);

  job.on('close', function(code){
    console.log('cron job end: ' + new Date() + ', code: ' + code);
  });
}, null, true);