const Koa = require("koa")
const Router = require("koa-router")
const routerList = require("./router/index")

const app = new Koa()
const router = new Router()

console.log(routerList)

routerList.map(val => {
  switch (val.method) {
    case "POST":
      router.post(val.route, async (ctx, next) => {
        ctx.body = await val.cb(ctx, next)
      })

    case "GET":
      router.get(val.route, async (ctx, next) => {
        ctx.body = await val.cb(ctx, next)
      })
  }
})

app.use(router.routes()).use(router.allowedMethods())
app.listen(3000)
console.log("🐱 u can see yr API on localhost:3000")
