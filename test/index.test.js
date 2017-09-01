const app = require("../index.js");
const  supertest = require("supertest")(app);

describe('Test Policy Service', function() {
  it('Responds with list of policies', function(done) {
    supertest
        .get("/policy")
        .expect(200)
        .expect([
            {
                number: 1,
                name: 'Tom',
                address: '1234 Main St',
                type: 'Auto',
                state: 'IN'
            },
            {
                number: 2,
                name: 'Bill',
                address: '1234 Main St',
                type: 'Home',
                state: 'IN' 
            }
        ])
        .end(done);
  });

  it('Responds with a single policy', function(done) {
    supertest
      .get("/policy/1")
      .expect(200)
      .expect({
              number: 1,
              name: 'Tom',
              address: '1234 Main St',
              type: 'Auto',
              state: 'IN'
      })
      .end(done);
  })
})