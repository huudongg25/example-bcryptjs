const userRouter = require("./userRouter")

function Router(app){
app.use('/api/v1/user',userRouter)
}

module.exports = Router