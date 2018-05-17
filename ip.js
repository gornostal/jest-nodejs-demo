var request = require("async-request")

async function myPublicIp() {
    const resp = await request("http://ifconfig.me/all.json", {
        headers: { Accept: "application/json" }
    })
    console.log(resp)
    return resp.ip_addr
}

exports.myPublicIp = myPublicIp
