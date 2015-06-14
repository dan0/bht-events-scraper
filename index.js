var request = require("request");
var cheerio = require("cheerio");
var	url = "https://www.ticketsource.co.uk/belfasthiddentours";

request(url, function (error, response, body) {
	if (!error) {
		var $ = cheerio.load(body);
    var events = [];

    $('tr').each(function(i, elem) {
      events.push({
        id: $(this).data('id')
      })
    });

		console.log(events);
	} else {
		console.log("We’ve encountered an error: " + error);
	}
});
