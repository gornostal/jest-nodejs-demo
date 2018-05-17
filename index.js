const ip = require("./ip")

ip.myPublicIp().then(myIp => {
  console.log(myIp)
})
