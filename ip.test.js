const { myPublicIp, IpException } = require("./ip")

jest.mock("async-request")
const request = require("async-request")
request.mockReturnValue({ body: '{"ip":"1.2.3.4"}' })

describe("myPublicIp()", () => {
  it("returns 'ip' property from an HTTP response", async () => {
    const ip = await myPublicIp()
    expect(ip).toEqual("1.2.3.4", "Incorrect IP address returned")
  })

  it("calls request() with correct Accept headers", async () => {
    const ip = await myPublicIp()
    expect(request).toBeCalledWith("https://api.ipify.org?format=json", {
      headers: { Accept: "application/json" }
    })
  })

  it("throws IpException if HTTP request fails", () => {
    request.mockImplementation(async () => {
      throw new Error("something went wrong")
    })
    return expect(myPublicIp()).rejects.toThrowError(IpException)
  })
})
