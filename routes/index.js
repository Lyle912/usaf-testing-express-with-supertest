var express = require('express');
var router = express.Router();
var url = require('url');

router.get('/', function(req, res, next) {
  res.json({
    books: url.format({ protocol: req.protocol, host: req.get('host'), pathname: '/api/v1/books' }),
    authors: url.format({ protocol: req.protocol, host: req.get('host'), pathname: '/api/v1/authors' }),
  })
});


module.exports = router;
