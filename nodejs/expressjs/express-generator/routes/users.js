var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.render('users', { livia: 'Lívia a mais top' });
});

module.exports = router;
