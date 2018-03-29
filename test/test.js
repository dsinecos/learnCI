const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../index.js');
const expect = chai.expect;

chai.use(chaiHttp);

describe("Testing server", function () {
    it("Test GET '/' endpoint", function (done) {
        chai
            .request(server)
            .get('/')
            .end(function (err, res) {
                expect(res.status).to.equal(200);
                done();
            })
    })
})