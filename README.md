# parse-me

Gets a url and calls back with err or a $ object

## Installation

This module is ~10 lines of code. Installing this via npm would be vulgar. Either copy and paste or just write this functionality yourself :)
*BUT* if you really have to, install with
```
npm install --save git+https://github.com/ddddddeon/parse-me.git
```

## Usage

```
var parseMe = require('parse-me');

parseMe('https://google.com', function(err, $) {
  if (err) {
    return console.log(err)
  }

  var link = $('body').find('a').eq(0).attr('href');
  return console.log(link);
});
