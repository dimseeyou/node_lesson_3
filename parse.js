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
  
  var temp = $('#tbwdaily1 > tr:nth-of-type(3) > td.temp > span:first-child')
    .text()
    .trim();

  console.log('temp is: ', temp);
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
