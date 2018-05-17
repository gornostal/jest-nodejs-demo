const ip = require("./ip")

ip.myPublicIp().then(myIp => {
  console.log("your ip:", myIp)
})
