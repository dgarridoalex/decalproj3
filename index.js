require("dotenv").config(); 
const express = require('express');
const app = express();
app.listen(3000, () => console.log("Server is running"));
app.use(express.json())
const mongoose = require("mongoose");
const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://dgarridoalex:<password>@cluster0.xr7hpln.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});


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
