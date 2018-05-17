const { myPublicIp } = require("./ip");

const testMock = jest.fn();

testMock.mockReturnValue({body: '{"ip":"84.47.179.70"}' });

describe("myPublicIp()", () => {

  it("returns ip_addr property from HTTP response", async () => {
    const ip = await myPublicIp();

    expect(ip).toEqual("84.47.179.70", "Incorrect IP address returned")
  })

})
