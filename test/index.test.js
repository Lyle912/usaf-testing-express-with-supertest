const app = require("../app");
const request = require("supertest")(app);

// test("GET /", done => {
//   request
//     .get("/")
//     .expect(200, JSON.stringify({greeting: "Welcome to the Book Catalog API!"}))
//     .end(done)
// })

// test("GET /books", done => {
//   request.get('/books')
//       .expect(200)
//       .end(function(err, res) {
//         expect(res.body.length).toEqual(0)
//         done()
//       })
// })
