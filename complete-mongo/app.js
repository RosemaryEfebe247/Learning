const express = require("express")
const { connectToDb, getDb } = require("./db")
const { ObjectId } = require("mongodb")


// init app and middleware
const app = express()

// db coonection
let db 

connectToDb((err) => {
    if (!err) {
      app.listen(3000, () => {
        console.log("App listening on port 3000")
      })
       db = getDb()
    }
})


//routes
app.get('/books', (req, res) => {
    let books = []

    db.collection('book')
    .find() // find here returns a cursor. access with toArray or forEach
    .sort({ name: 1})
    .forEach(book => books.push(book))
    .then(() => {
        res.status(200).json(books)
    })
    .catch(() => {
        res.status(500).json({error: "could not fetch the document"})
    })
})

app.get('/books/:id', (req, res) => {
    // Get access to the parameter id that will be passed use req.params.id
    if (ObjectId.isvalid) {
    db.collection("book")
    .findOne({ _id: new ObjectId(req.params.id)})
    .then((data) => {
        res.status(200).json(data)
    })
    .catch((err) => {
        res.status(500).json({error: "Document not found"})
    })
} else {
    res.status(500).json({error: "Not a valid ID"})
}
})
