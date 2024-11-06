// routes/index.js
var express = require('express');
var router = express.Router();

// Show login page
router.get('/', function(req, res, next) {
    res.render('login');
});

// Handle login form submission
router.post('/login', function(req, res, next) {
    const username = req.body.username;
    const password = req.body.password;
    // For now, just redirect to the diary page
    res.redirect('/diary');
});

module.exports = router;