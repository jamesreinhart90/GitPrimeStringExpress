var express = require('express');
var router = express.Router();

var title = 'Prime String Finder';
var primeString = '';

/* GET home page. */
router.get('/', function (req, res) {
    primeStringFinder(req, res);
});

router.post('/', function (req, res) {
    // debugger;
    var id = parseInt(primeString.substring(parseInt(req.body.indexValue) - 1, parseInt(req.body.indexValue) + 4));
    res.render('index', { title: title, minionID: id });
});

function primeStringFinder(req, res) {
    function afterPrimeString(err) {
        if (err) {
            consol.log(err);
            res.render('index', { title: title, error: err });
        } else {
            renderPage();
        }
    }

    function renderPage() {
        res.render('index', { title: title });
    }
    generatePrimeString(afterPrimeString);
}

function generatePrimeString(callback) {

    var isPrime;

    for (var i = 2; i < 1993; i++) {
        isPrime = 0;

        for (var j = 2; j < i; j++) {
            if (i % j === 0) {
                isPrime++;
            }
        }

        if (isPrime === 0) {
            primeString = primeString + i;
        }
    }    

    if (primeString !== '' && primeString !== null) {
        callback(null);
    } else {
        callback('Prime string was not able to be created');
    }
}

module.exports = router;
