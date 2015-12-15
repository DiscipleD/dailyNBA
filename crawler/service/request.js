/**
 * @author Disciple_D
 * @since 2015/12/09 11:00
 */
'use strict';
const req = require('request');
const iconv = require('iconv-lite');

function throwError(){
  throw new Error('miss param.');
}

//function request(url = throwError(), method = 'GET', encoding = 'UTF8', cb = throwError()){
function request(url, method, encoding, cb){
  req({
    url: url,
    method: method,
    encoding: null, // ��ʹ��Ĭ��UTF8����
    headers: {
      'Accept-Language': 'zh-CN,zh;q=0.8'     // ���� Accept-language
    }
  }, function(err, res){
    cb(err, res, iconv.decode(res.body, encoding)); // ���ݲ�ͬ���룬ת��response body����
  });
}

module.exports = request;