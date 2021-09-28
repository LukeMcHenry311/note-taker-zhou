const router = require("express").Router()
const fs = require("fs")
let db = require("../db/db.json")

// get route
// res.json(db) is JSON'ing the response up to db.json which is just the database for the notes
router.get("/api/notes", function (req,res) {
    res.json(db)
})

// post route
// db.push pushes the notes data into request.body which is just the body of the html file
// fs.writefilesync sends the string of the data up to the notes database information
// res.json(db) just sends the response string up to the notes file (db.json)
router.post("/api/notes", function (req, res) {
    db.push(req.body)
    fs.writeFileSync("./db/db.json", JSON.stringify(db,null,2))
    res.json(db)
})

module.exports = router