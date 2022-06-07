const express = require('express');
const cors = require('cors');
var bodyParser = require('body-parser');
const app = express();
var jsonParser = bodyParser.json()

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json())
app.use(cors())

const port = 8080;

const MongoClient = require('mongodb').MongoClient
const ObjectId = require('mongodb').ObjectID;

const connectionString = 'mongodb+srv://srishtis19:spedathome@cluster0.tm4x2jn.mongodb.net/?retryWrites=true&w=majority'

app.listen(port, ()=>{
    console.log(`App listening to port ${port}`)
})

app.post('/sendStudentDetails',(req,res)=>{

    studentData = req.body
    modifiedData = {
        ...studentData,
        country: req.body.country.name
    }
    console.log(modifiedData)

    MongoClient.connect(connectionString).then((client => {

        console.log("Database Connected!")
        var db = client.db('student-master')
        var studentDetails = db.collection('student-data')
      
        studentDetails.insertOne(modifiedData)
        .then(result => {
          console.log("Data logged!")
        })
        .catch(err => {
          console.log(err)
        })
      }))
    
    //return res.send(req.body)
})

app.get('/getStudentDetails',(req,res)=>{

    MongoClient.connect(connectionString).then((client => {

        console.log("Database Connected!")
        var db = client.db('student-master')
        var studentDetails = db.collection('student-data')

        studentDetails.find().toArray()
        .then(results => {
          console.log(results)
          res.send(results)
        })
        .catch(error => console.error(error))

    }))

})

app.delete('/removeStudent/:id',(req,res)=>{
    console.log("called!")

    const { id } = req.params;
    console.log(id)
    MongoClient.connect(connectionString).then((client => {

        console.log("Database Connected!")
        var db = client.db('student-master')
        var studentDetails = db.collection('student-data')

        studentDetails.deleteOne({_id:ObjectId(id)});

    }))

})