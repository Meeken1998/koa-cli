const Picture = require("./picture/index")

const mapRouters = m => {
  let r = [],
    n = ""
  if (
    typeof m == "object" &&
    m.namespace &&
    m.methods &&
    typeof m.methods == "object" &&
    m.exportRouters instanceof Array
  ) {
    n = m.namespace
    m.exportRouters.map(val => {
      r.push({
        route: n + val.name,
        method: val.method.toUpperCase() || "GET",
        cb: val.cb
      })
    })
    return r
  } else {
    console.error({
      code: "1401",
      message: "需要提供正确的路由 api 格式"
    })
    return []
  }
}

let routers = [...mapRouters(Picture)]

module.exports = routers
