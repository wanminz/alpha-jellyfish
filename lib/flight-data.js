var http = require("https");

var options = {
	"method": "GET",
	"hostname": "aerodatabox.p.rapidapi.com",
	"port": null,
	"path": "/flights/airports/icao/UUEE/2019-12-26T12%253A00/2019-12-27T00%253A00?withLeg=false&direction=Both",
	"headers": {
		"x-rapidapi-host": "aerodatabox.p.rapidapi.com",
		"x-rapidapi-key": "3b8190c7d8msh904a6feb726d2c5p1b6787jsneaca744ee5ce"
	}
};

var req = http.request(options, function (res) {
	var chunks = [];

	res.on("data", function (chunk) {
		chunks.push(chunk);
	});

	res.on("end", function () {
		var body = Buffer.concat(chunks);
		console.log(body.toString());
	});
});

req.end();
