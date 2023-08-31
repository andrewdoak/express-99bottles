// Load express
const express = require('express');
// Create express app
const app = express();
// Define port as process.env or 3000
const PORT = process.env.PORT || 3000;


// Define a "root" route directly on app
// MOUNT 'ROOT' ROUTE
app.get('/', function(req, res) {
    res
    .send(`
    <h2>99 bottles of beer on the wall...</h2>
    <a href="/98">Take one down...</a>
    `);
  });

// 99 BOTTLES
app.get('/:number_of_bottles', (req, res) => {
    let nextPage = parseInt(req.params.number_of_bottles) - 1
    if (parseInt(req.params.number_of_bottles) > 1) {
        res.send(`<h2>${req.params.number_of_bottles} bottles of beer on the wall.</h2>
        <a href='${nextPage}'>Take one down, pass it around</a>`)
    } else if (parseInt(req.params.number_of_bottles) === 1) {
        res.send(`<h2>${req.params.number_of_bottles} just ONE MORE bottle of beer on the wall.</h2>
        <a href='${nextPage}'>Take one down, pass it around</a>`)
    } else {
        res.send(`
        <h2>We're out of bottles!</h2>
        <a href="/">Better make a store run. Get some veggie chips, too!</a>`);
    }
})

// BONUS 99 little bugs
app.get('/debug', (req, res) => {
    res.send (`<h2>99 Little bus in the code</h2><h2>99 Little bugs</h2>
    <a href="/debug/123>Take one down patch it around</a>
    `);
});

// BONUS 99 Little Bugs Continued
app.get('/bug/:num', (req,res) => {
    let rdm = Math.floor(Math.random() * 50) + 1;
    let nextBug = parseInt(req.params.num) + rdm;
    res.send(`
        <h2>${req.params.num} Little bugs in the code</h2><h3>${req.params.num} Little bugs</h3>
        <a href ='/bug/${nextBug}'>Take one down patch it around</a>
    `);
});

// Tell the app to listen on port 3000
// for HTTP requests from clients
app.listen(3000, function () {
  console.log(`Listening on port ${PORT}`);
});

/* 
HOMEWORK URL
https://ps-rtt-sei.herokuapp.com/15-week/mod-3/week-11/day-2/hw/

NOTES/CODE COMMENTS
====================

*/