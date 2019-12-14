var url = 'http://mylogger.io/log'; // no

function log(message) {
    // Send an HTTP request
    console.log(message);
}

// explicit exports
module.exports = log; // log function above
//module.exports.url = url; // could export the var from above, but we don't its an implementation detail (private)