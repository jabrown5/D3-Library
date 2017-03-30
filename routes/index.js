var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


router.get('/divvy', function(req, res, next) {
    res.render('divvy', { });
});

router.get('/divvy-gender', function(req, res, next) {
    res.render('divvy-gender', { });
});

router.get('/ga-job-fair', function(req, res, next) {
    res.render('ga-job-fair', { });
});



router.get('/nfl-arrests-d3', function(req, res, next) {
    res.render('nfl-arrests-d3', { });
});




router.get('/test', function(req, res, next) {
    res.render('test', { });
});


router.get('/data.tsv', function(req, res, next) {
    res.render('data.tsv', { });
});

module.exports = router;
