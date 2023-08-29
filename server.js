// Load express
const express = require('express');

// Create our express app
const app = express();
// Define a "root" route directly on app
// Tomorrow, we'll use best practice routing
// Mount routes
app.get('/', function(req, res) {
    res
    .send(`
    <h1>99 Bottles of Beer on the Wall.</h1>
    <a href="#">Pass it around</a>
    `);
  });

/* 
ASHLEY
<h1>${currentBottles} Bottles of Beer on the Wall.</h1>
<a href=“/take-one-down”>${currentBottles === 0? “No :”Take}</a>
*/

// Tell the app to listen on port 3000
// for HTTP requests from clients
app.listen(3000, function () {
  console.log('Listening on port 3000');
});

/* 
HOMEWORK URL
https://ps-rtt-sei.herokuapp.com/15-week/mod-3/week-11/day-2/hw/

REMEMBER, RIGHT NOW, IF YOU MAKE SOME CHANGES, 
YOU HAVE TO STOP AND START YOUR SERVER
BUT NODEMON SAVES THE DAY
WATCHES YOUR FILES FOR CHANGES, THEN DOES THE SERVER RESTART WORK
RUN NODEMON => SAME LIKE RUNNING NODE FILES 'nodemon your-file.js'


NOTES/CODE COMMENTS
====================

OUTLINE OF EXPRESS SERVER
// 1. REQUIRE MODULES
// IT'S A FUNCTION
// DIFFERENT PACKAGES REQUIRE DIFFERENT DATATYPES
const express = require('express');


// 2. CREATE APP
// Express method
const app = express();

// IF YOU WANT TO SEE WHAT'S GOING ON
    // console.log(app)


// 3. CONFIGURE APP 
    // (app.set)


// 4. MOUNT MIDDLEWARE 
    // (app.use)


// 5. MOUNT ROUTES
app.get('/', function(req, res) {
  	res.send('<h1>Hello World!</h1>');
});
    // Can check out Headers, Preview, Response in Network Tab (Inspect)

    // Specifies what happens when a user makes a request to our server.
    // Base URL
    // PATH, ALWAYS A STRING, ALWAYS A FORWARD SLASH
    // ALWAYS HAS A REQUEST AND RESPONSE (req, res) 
    // .send Method SENDS A RESPONSE (HTML in this case). 
    // SIMILAR TO return. CAN'T HAPPEN 2x
    // RESPONSE SHOULD ALWAYS BE LAST

    // In the res.send, it only runs when you get a response.
        // Verb AND Path have to match.
    // This is where we write logic for anything we want to return.
    // Could be login or other stuff than HTML.

    // MOST USED METHODS
        // res.render()- Render a view template and send the resulting HTML to the browser.
        // res.redirect()- Tell the browser to issue another GETrequest.
        // res.json()- Send a JSON response (used when we build an API).
        // you can also chain some methods on, like status()
    
    // YOU CAN DEFINE MORE THAN ONE ROUTE ON THE SAME PATH
        // GET
        // POST
        // DELETE
        // PUT 
        // but not more than one of each verb 

// 6. LISTEN ON p 3000
    // NEEDS A CALLBACK FUNCTION, COULD ALSO USE AN ARROW FUNCTION
    // FUNCTION IS CALLED AFTER WE KNOW THE SERVER'S LISTENING
    // THAT clg MESSAGE PRINTS ONCE WE KNOW IT'S LISTENING

app.listen(3000, function() {
 console.log('Listening on port 3000');
});
*/