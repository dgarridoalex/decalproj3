// const express = require('express');
// const app = express();
// const port = process.env.PORT || 5000; // Use environment variable for port or default to 5000

// // Sample data (replace with logic to store data from frontend)
// const workouts = [];

// app.get('/workouts', (req, res) => {
//   res.json(workouts); // Send the workout data as JSON
// });

// // Add endpoint to handle workout data from frontend (future implementation)

// app.listen(port, () => {
//   console.log(`Server listening on port ${port}`);
// });









var Express = require("express");
var Mongoclient = require("mongodb").MongoClient;
var cors=require("cors");
const multer=require("multer");

var app=Express();
app.use(cors())

var CONNECTION_STRING="mongodb+srv://evanwoo:<WQiYE1MMkO7UK9x7>@cluster0.xeg7hf5.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();










var DATABASE="fitlydb"
var database;

const port = 3000;
app.listen(port,()=>{
  Mongoclient.connect(CONNECTION_STRING,(error,client)=>{
    database=client.db(DATABASE);
    console.log("Mongo DB Connection Successful")
  })
})