const assert = require('assert');
process.env.NODE_ENV = "test";
const main = require('../main');

describe("test suite", function () {
    var status;

    before(function () {
        mockResponse = {
            status(statusCode) { status = statusCode; },
            send(error) { }
        };
    });

    it("should use the ejs view engine", function () {
        assert.equal(main.app.get("view engine"), "ejs");
    });

    it("should report error status 500", function () {
        status = 200;
        main.serverError("ERROR", mockResponse);
        assert.equal(status, 500);
    });

    it("should connect to the database", function (done) {
        main.connection.ping(function (err) {
            assert.equal(err, null);
            done();
        });
    });

    after(function(done) {
        main.connection.end(function() { done(); });
    });

});