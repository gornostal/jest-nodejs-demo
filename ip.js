var request = require("request")

const myPublicIp = aysnc () => {
  const resp = await request('ifconfig.me/all.json')
  return resp.ip_addr
}

module.export = { myPublicIp }