/**
 * @author Disciple_D
 * @since 2015/12/11 15:30
 */
'use strict';
let service;

service.prototype.formatDate = function(date, parrent){
  if (date instanceof Date){

  }else{
    throw new Error('Format Date Error: Type Error, need Date.');
  }
};

module.exports = service;