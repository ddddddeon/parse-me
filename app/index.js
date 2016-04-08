var request = require('request');
var cheerio = require('cheerio');

module.exports = function(url, cb) {
  request(url, function(err, res, body) {
    if (err) {
      cb(err, null);
    } else {
      var $ = cheerio.load(body);
      cb(null, $);
    }
  });
};
