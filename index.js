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

if (mongoose.connection.readyState !== 1) {
  console.log("MongoDB connection is not established.");
} else {
  console.log("MongoDB connection is established.");
}
