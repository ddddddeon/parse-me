var parseMe = require('./index');

parseMe('http://www.google.ca', function(err, $) {
  if (err) {
    return console.log(err);
  } else {
    return console.log($('body').find('a').eq(0).attr('href'));
  }
});
