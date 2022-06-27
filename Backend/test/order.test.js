const server = require("../index");
// let chai = require("chai");
// let chaiHttp = require("chai-http");
const request = require("supertest");
/**
 * @jest-environment node
 */

// chai.use(chaiHttp);

describe("Get Order", () => {
  it("should get all orders", () => {
    const res = request(server)
      .get("/order")
      .expect(res.statusCode)
      .toEqual(200)
      .expect(res.length)
      .toEqual(10);
    done();
  });
});
describe("Get Order by id", () => {
  const id = "62b93e501aebbf878cf8a20c";
  it("should get order by id", () => {
    const res = request(server)
      .get("/order/" + id)
      .expect(res.statusCode)
      .toEqual(200);
    done();
  });
});
describe("post Order", () => {
  it("should post order", () => {
    const res = request(server).post("/order/").send({
      CustID: "SO-20335",
      ProdID: "FUR-CH-10000454",
      OrderDate: "1-5-2020",
      Quantity: 10,
      ShipDate: "2-5-2017",
      ShipMode: "First Class",
    });
  })
    .expect(res.statusCode)
    .toEqual(200);
  done();
});

describe("put Order", () => {
  it("should put order by id", () => {
    const id = "62b93e501aebbf878cf8a20c";
    const res = request(server)
      .post("/order/" + id)
      .send({
        CustID: "SO-20335",
        ProdID: "FUR-CH-10000454",
        OrderDate: "1-5-2020",
        Quantity: 15,
        ShipDate: "2-5-2017",
        ShipMode: "First Class",
      });
  })
    .expect(res.statusCode)
    .toEqual(200);
  done();
});

describe("delete Order", () => {
  it("should delete order by id", () => {
    const id = "62b93e501aebbf878cf8a20c";
    const res = request(server).delete("/order/" + id);
  })
    .expect(res.statusCode)
    .toEqual(200);
  done();
});
