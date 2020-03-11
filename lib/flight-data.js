var http = require("https");

var options = {
	"method": "GET",
	"hostname": "aerodatabox.p.rapidapi.com",
	"port": null,
/*need to regenerate api key*/
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
