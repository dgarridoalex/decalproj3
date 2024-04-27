const express = require('express');
const app = express();
const port = process.env.PORT || 5000; // Use environment variable for port or default to 5000

// Sample data (replace with logic to store data from frontend)
const workouts = [];

app.get('/workouts', (req, res) => {
  res.json(workouts); // Send the workout data as JSON
});

// Add endpoint to handle workout data from frontend (future implementation)

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
