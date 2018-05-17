var request = require("async-request")

class IpException extends Error {}

async function myPublicIp() {
  try {
    const resp = await request("https://api.ipify.org?format=json", {
      headers: { Accept: "application/json" }
    })
    const jsonBody = JSON.parse(resp.body)
    return jsonBody.ip
  } catch (e) {
    throw new IpException("Unable to get an IP")
  }
}

exports.myPublicIp = myPublicIp
exports.IpException = IpException
