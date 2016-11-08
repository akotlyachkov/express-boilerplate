var router = require('express').Router();

router.get('/test1', function (req, res, next) {
    res.send({test1: true})
});
router.post('/test2', function (req, res, next) {
    res.send({test2: 'test2'})
});
router.post('/test3', function (req, res, next) {
    res.send({test3: 3})
});

module.exports = router;