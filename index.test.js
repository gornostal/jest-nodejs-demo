import { myPublicIp } from "./index"

describe("myPublicIp()", () => {
  it("returns ip_addr property from HTTP response", async () => {
    const randomIp = "1.2.3.4"
    const ip = await myPublicIp()
    expect(ip).equal(randomIp, "Incorrect IP address returned")
  })
})
