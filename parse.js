// Parsing data from external site with cheerio module

var request = require('request');
var cheerio = require('cheerio');

request('https://www.gismeteo.ru/city/daily/4720/', function (error, response, html) {
  if (error) {
    return console.error('error is: ', error);
  } 
  
  if ( response.statusCode !== 200 ) {
    return console.log('incorrect statusCode: ', response.statusCode);
  }

  var $ = cheerio.load(html);
  
  $('#tbwdaily1 > tr').eq(2).find('td.temp > span').eq(0).each(function(i, element) {
    console.log($(element).text().trim());
  });
});

request('http://www.rbc.ru/', function (error, response, html) {
  if (error) {
    return console.error('error is: ', error);
  } 
  
  if ( response.statusCode !== 200 ) {
    return console.log('incorrect statusCode: ', response.statusCode);
  }

  var $ = cheerio.load(html);
  
  $('.indicators_vert__ticker__td').each(function(i, element) {
    console.log($(element).text().trim());
  });
});
