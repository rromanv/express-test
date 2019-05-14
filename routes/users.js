var express = require('express');
var router = express.Router();

const users = [
  {
    id: 0,
    name: 'User 1'
  },
  {
    id: 1,
    name: 'User 2'
  }
]
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.json(users);
});

module.exports = router;
