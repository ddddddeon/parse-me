var parseme = require('./index');

parseme('http://www.google.ca', function(err, $) {
  if (err) {
    return console.log(err);
  } else {
    console.log($);
  }
});
