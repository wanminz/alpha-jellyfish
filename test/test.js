const assert = require('assert').strict;

const jellyfish = require('../lib/flight-data.js');

describe('getFlightData', function() {
  it('should return a known API response object', function() {
    return jellyfish.getFlightData()
      .then(function(data) {
        assert.equal(data[0].number, "UA 427", "should be 'UA 427'");
      });
  });
});
