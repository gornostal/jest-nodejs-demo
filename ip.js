var request = require("async-request")

async function myPublicIp() {
    const resp = await request("https://api.ipify.org?format=json", {
        headers: { Accept: "application/json" }
    })
    const jsonBody = JSON.parse(resp.body)
    return jsonBody.ip
}

exports.myPublicIp = myPublicIp
