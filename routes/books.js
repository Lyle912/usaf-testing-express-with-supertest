var express = require("express");
var router = express.Router();
var books = require("../mock-data/books.json");

router.get("/:id", function (req, res, next) {
  req.params.id > books.length || req.params.id == 0
    ? res.sendStatus(404)
    : res.send(books[req.params.id - 1]);
});

router.get("/", function (req, res, next) {
  res.send(books);
});

module.exports = router;
