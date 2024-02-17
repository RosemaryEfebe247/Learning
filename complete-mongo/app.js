const express = require("express")
const { connectToDb, getDb } = require("./db")
const { ObjectId } = require("mongodb")


// init app and middleware
const app = express()
app.use(express.json())
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
    const page = req.query.param || 0
    const bookPerPage = 2

    db.collection('book')
        .find() // find here returns a cursor. access with toArray or forEach
        .sort({ name: 1 })
        .skip(page * bookPerPage)
        .limit(bookPerPage)
        .forEach(book => books.push(book))
        .then(() => {
            res.status(200).json(books)
        })
        .catch(() => {
            res.status(500).json({ error: "could not fetch the document" })
        })
})


app.get('/books/:id', (req, res) => {
    // Get access to the parameter id that will be passed use req.params.id
    if (ObjectId.isValid(req.params.id)) {
        db.collection("book")
            .findOne({ _id: new ObjectId(req.params.id) })
            .then((data) => {
                if (data) {
                    res.status(200).json(data)
                } else {
                    res.status(404).json({ error: "Document not found" })
                }
            })
            .catch((err) => {
                res.status(500).json({ error: "Internal server error" })
            })
    } else {
        res.status(500).json({ error: "Not a valid ID" })
    }
})

app.post('/books', (req, res) => {
    const input = req.body

    db.collection('book')
        .insertOne(input)
        .then(result => {
            res.status(201).json(result)
        })
        .catch(err => {
            res.status(500).json({ err: "Could not create a new document" })
        })
})


app.delete('/books/:id', (req, res) => {
    if (ObjectId.isValid(req.params.id)) {
        db.collection("book")
            .deleteOne({ _id: new ObjectId(req.params.id) })
            .then((result) => {
                if (result) {
                    res.status(200).json(result)
                } else {
                    res.status(404).json({ error: "Document not found" })
                }
            })
            .catch((err) => {
                res.status(500).json({ error: "Could not delete the document" })
            })
    } else {
        res.status(500).json({ error: "Not a valid ID" })
    }
})


app.patch('/books/:id', (req, res) => {
    updates = req.body

    if (ObjectId.isValid(req.params.id)) {
        db.collection("book")
            .updateOne({ _id: new ObjectId(req.params.id) }, { $set: updates })
            .then((result) => {
                if (result) {
                    res.status(200).json(result)
                } else {
                    res.status(404).json({ error: "Document not found" })
                }
            })
            .catch((err) => {
                res.status(500).json({ error: "Could not update the document" })
            })
    } else {
        res.status(500).json({ error: "Not a valid ID" })
    }
})