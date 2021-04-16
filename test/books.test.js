const app = require("../app");
const request = require("supertest")(app);
const books = require("../mock-data/books.json");

describe("the /books path", () => {
  it("GETs the expected data from books endpoint", async (done) => {
    const res = await request.get("/api/v1/books");
    let expected = res.body[0]["id"];
    expect(expected).toEqual(1);
    done();
  });

  it("GETs the expected data for a specific book id", async (done) => {
    const myID = Math.floor(Math.random() * 3) + 1;
    const res = await request.get(`/api/v1/books/${myID}`);
    let expected = res.body["id"];
    expect(expected).toEqual(myID);
    done();
  });
});
