var request = require('request');

//get a single biobrick id either from the command line or another source
//it will look like this: BBa_B0034




//make an http request to http://parts.igem.org/cgi/xml/part.cgi?part=BBa_B0034
request('http://parts.igem.org/cgi/xml/part.cgi?part=BBa_B0034', function (error, response, body) {
  if (!error && response.statusCode == 200) {
    console.log(body) // Print the response body.
    //parse the response to json
  }
})
//get the response and parse it into a meaningful json object

//
