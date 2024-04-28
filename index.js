<<<<<<< HEAD
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
=======
require("dotenv").config(); 
const express = require('express');
const mongoose = require("mongoose");
const { MongoClient, ServerApiVersion } = require('mongodb');
const app = express();
const cors = require('cors');

app.use(cors()); // Add CORS middleware
app.use(express.json());

const uri = "mongodb+srv://daniel:TMlG1WTbK0g9WSaP@cluster0.xr7hpln.mongodb.net/?retryWrites=true&w=majority";

mongoose.connect(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
})
  .then(() => {
    console.log("MongoDB connection established");
  })
  .catch((err) => {
    console.error("MongoDB connection error:", err);
  });

app.listen(3000, () => console.log("Server is running"));


const workoutSchema = new mongoose.Schema({
  exercise: String
});

const Workout = mongoose.model('Workout', workoutSchema);

app.post('/exercises', async (req, res) => {
  const newWorkout = new Workout(req.body);
  try {
    await newWorkout.save();
    res.json({ message: 'Exercise added successfully!' });
  } catch (error) {
    console.error('Error adding exercise:', error);
    res.status(500).json({ message: 'Error adding exercise' });
  }
});

app.get('/exercises', async (req, res) => {
  try {
    const workouts = await Workout.find();
    res.json(workouts);
  } catch (error) {
    console.error('Error fetching workouts:', error);
    res.status(500).json({ message: 'Error fetching workouts' });
  }
});

app.put('/exercises/:id', async (req, res) => {
  const workoutId = req.params.id;
  const updates = req.body;
  try {
    const workout = await Workout.findByIdAndUpdate(workoutId, updates, { new: true }); // 'new: true' returns the updated document
    if (!workout) {
      return res.status(404).json({ message: 'Workout not found' });
    }
    res.json(workout);
  } catch (error) {
    console.error('Error updating workout:', error);
    res.status(500).json({ message: 'Error updating workout' });
  }
});

app.delete('/exercises/:id', async (req, res) => {
  const workoutId = req.params.id;
  try {
    await Workout.findByIdAndDelete(workoutId);
    res.json({ message: 'Workout deleted successfully' });
  } catch (error) {
    console.error('Error deleting workout:', error);
    res.status(500).json({ message: 'Error deleting workout' });
  }
});


app.get('/exercises/:id', async (req, res) => {
  const workoutId = req.params.id;
  try {
    const workout = await Workout.findById(workoutId);
    if (!workout) {
      return res.status(404).json({ message: 'Workout not found' });
    }
    res.json(workout);
  } catch (error) {
    console.error('Error fetching workout:', error);
    res.status(500).json({ message: 'Error fetching workout' });
  }
});

app.get('/', (req, res) => {
  res.send('Welcome to your workout API!');
});

app.use((req, res) => {
  res.status(404).send('404 Not Found');
});

<<<<<<< HEAD

// // Replace with your database connection details (URI)
// const uri = "mongodb://localhost:27017/your-fitness-tracker-db";
// const MongoClient = require('mongodb').MongoClient;

// app.post('/workouts', async (req, res) => {
//   const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
//   try {
//     await client.connect();
//     const database = client.db('your-fitness-tracker-db');
//     const workoutsCollection = database.collection('workouts');
//     const result = await workoutsCollection.insertOne(req.body); // Insert the received workout data
//     res.json({ message: 'Exercise added successfully!' });
//   } catch (error) {
//     console.error('Error adding exercise:', error);
//     res.status(500).json({ message: 'Error adding exercise' }); // Send error response
//   } finally {
//     await client.close();
//   }
// });

// app.listen(port, () => console.log(`Server listening on port ${port}`));
>>>>>>> 2ba812f8f96aac5da8b4d53f323b8dfb31326bfd
=======
if (mongoose.connection.readyState !== 1) {
  console.log("MongoDB connection is not established.");
} else {
  console.log("MongoDB connection is established.");
}
>>>>>>> f442347315104b0ee88fb503e76c964ab8dab525
