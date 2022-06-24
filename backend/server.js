const express = require("express")
const dotenv = require("dotenv")
const dataRouter = require("./router/router")
const cors = require("cors")

dotenv.config()
const app = express()

app.use(express.json())
app.use(cors())
app.use("/api", dataRouter)

const PORT = process.env.PORT || 5000

app.listen(PORT, console.log(`server is running on ${PORT}`))
