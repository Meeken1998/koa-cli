// 爬虫类
const axios = require("axios")

const namespace = "/picture/"

const methods = {
  async sayHello() {
    return "hello"
  },

  async getList(ctx, next) {
    let res = await axios.get("https://e621.net/post?tags=eevee")
    const data = res.data
    let info = []
    for (let i = 0; i < data.length; i++) {
      if (data[i]["file_url"]) {
        info.push(data[i]["file_url"])
      }
    }
    return info
  }
}

const exportRouters = [
  {
    name: "getList",
    method: "post",
    cb: methods.getList
  },
  {
    name: "sayHello",
    method: "get",
    cb: methods.sayHello
  },
  {
    name: "",
    method: "get",
    cb: methods.sayHello
  }
]

module.exports = {
  namespace,
  methods,
  exportRouters
}
