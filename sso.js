'use strict';

if (!String.prototype.format) {
  String.prototype.format = function () {
    var args = arguments;
    return this.replace(/{(\d+)}/g, function (match, number) {
      return typeof args[number] != 'undefined' ? args[number] : match;
    });
  };
}

var request = require('request');
var cheerio = require('cheerio');
var querystring = require('querystring');

var hostName = 'stl-qa-oalmt3';
var usrAgent = 'Mozilla/5.0 (Windows NT 6.1; WOW64) ' +
  'AppleWebKit/537.36 (KHTML, like Gecko) Chrome/32.0.1700.76 Safari/537.36';
var loginUrl = 'http://{0}/workcenter/tmtrack.dll?shell=swc'.format(hostName); //JSONPage&command=getssotoken'
var authUrl = 'http://{0}:8085/idp/login?sid={1}&continue=http%3A%2F%2F{0}' +
  '%2Fworkcenter%2Ftmtrack.dll%3Fshell%3Dswc';
// var ssoUrl = loginUrl + '&JSONPage&command=getssotoken';

var re = /sid=(.*?)(&)/;
var j = request.jar();

request({
    headers: {
      'User-Agent': usrAgent
    },
    method: 'GET',
    uri: loginUrl,
    jar: j
  },
  function (error, res, body) {
    var $ = cheerio.load(body);
    var matches = $('form#LoginForm').attr('action').match(re);
    var sid = matches[1];
    var opaque = $('input[name=opaque]').val();

    console.log(opaque + '\n' + sid + '\n');
    //console.log(j);

    var form = {
      username: 'admin',
      password: '',
      opaque: opaque,
      logintype: '1'
    };
    var stringifiedForm = querystring.stringify(form);
    var contentLength = stringifiedForm.length;

    authUrl = authUrl.format(hostName, sid);
    request({
      headers: {
        'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8',
        'Accept-Encoding': 'gzip,deflate,sdch',
        'Accept-Language': 'en-US,en;q=0.8,ru;q=0.6,uk;q=0.4',
        'Cache-Control': 'max-age=0',
        'Connection': 'keep-alive',
        'Content-Length': contentLength,
        'Content-Type': 'application/x-www-form-urlencoded',
        'Host': hostName,
        'Origin': 'http://' + hostName + ':8085',
        'Referer': authUrl,
        'User-Agent': usrAgent
      },
      uri: authUrl,
      body: stringifiedForm,
      method: 'POST',
      jar: j
    }, function (e, r, body2) {
      //console.log(r);
      //console.log('-------=======-------');
      console.log(body2);
      //console.log(j);
    });
  });


      //   ssoUrl = 'http://stl-qa-oalmt3/tmtrack/tmtrack.dll?JSONPage&command=getssotoken';
      //   request({
      //     headers: {
      //       'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8',
      //       'Accept-Encoding': 'gzip,deflate,sdch',
      //       'Accept-Language': 'en-US,en;q=0.8,ru;q=0.6,uk;q=0.4',
      //       'Cache-Control': 'max-age=0',
      //       'Connection': 'keep-alive',
      //       'Host': hostName,
      //       'Pragma': 'no-cache',
      //       'User-Agent': usrAgent
      //     },
      //     uri: ssoUrl,
      //     method: 'GET',
      //     followAllRedirects: true,
      //     followRedirect: true,
      //     maxRedirects: 100,
      //     jar: j
      //   }, function (err3, res3, body3) {
      //     console.log(res3);
      //   });
