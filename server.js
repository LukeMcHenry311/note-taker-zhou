const express = require("express")
const app = express()
const port = process.env.PORT || 4001

    app.use(express.static("public"))

    app.use(express.urlencoded({ extended:true}))
    app.use(express.json())

    app.use(require("./routes/html"))
    app.use(require("./routes/api"))

app.listen(port, function() {
    console.log(`now listening on port ${port}`)
})