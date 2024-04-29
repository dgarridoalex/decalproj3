import {React, useState, useEffect} from 'react';
import { Input, Button, Table, Thead, Tbody, Tr, Th, Td, ChakraProvider, Box, Flex, Heading, Text} from '@chakra-ui/react';
import NavBar from './NavBar';
import { v4 as uuidv4 } from 'uuid';

const pageStyle = {
  color: '#EEEEEE',
  fontFamily: "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",
  fontWeight: 'bold',
  fontSize: '32px',
  textAlign: 'center',
  backgroundColor: '#121212',
  //bgGradient: 'linear(to-l, #121212)',
  minHeight: '100vh'
};


  const navStyle = {
    backgroundColor: '#4FD1C5',
    minHeight: '10vh',
    display: 'flex', // Ensure flexbox for horizontal layout
    alignItems: 'center', // Center content vertically within the navbar
    justifyContent: 'space-between', // Distribute content horizontally (NavBar on left, title on right)
    borderRadius: '10px',
    color: 'black', // Removed redundant color property
  };

  function Exercises() {
    const [workouts, setWorkouts] = useState([]); // Stores all workout sessions
    const [newExercise, setNewExercise] = useState(''); // Stores user input for new exercise
    const [newWeight, setNewWeight] = useState(0); // Weight lifted
    const [newReps, setNewReps] = useState(0); // Reps performed
    const [newSets, setNewSets] = useState(0);
    const [isLoading, setIsLoading] = useState(false); // Track loading state for user feedback
    const [error, setError] = useState(null); // Store any errors during data fetching or submission
  
    // Fetch workout data on component mount
    useEffect(() => {
      const fetchData = async () => {
        setIsLoading(true); // Set loading state to true
        setError(null); // Clear any previous errors
  
        try {
          const response = await fetch('http://localhost:3000/exercises');
          if (!response.ok) {
            throw new Error(`Error fetching workouts: ${response.statusText}`);
          }
          const data = await response.json();
          setWorkouts(data); // Set the workouts state with the fetched data
        } catch (error) {
          console.error('Error fetching workouts:', error);
          setError(error.message); // Set error message for display
        } finally {
          setIsLoading(false); // Set loading state to false after operation
        }
      };
      fetchData();
    }, []); // Empty dependency array ensures fetching only once on mount
  
    // Function to handle new exercise submission
    const handleAddWorkout = async () => {
      if (!newExercise || !newWeight || !newReps) return;
  
      const newWorkout = { 
      id: uuidv4(),
      exercise: newExercise,
      sets: newSets,
      weight: newWeight,
      reps: newReps
      }; // Create new workout object
      setIsLoading(true); // Set loading state to true
      setError(null); // Clear any previous errors
  
      try {
        const response = await fetch('http://localhost:3000/exercises', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(newWorkout),
          credentials: 'include'
        });
        if (!response.ok) {
          throw new Error(`Error adding exercise: ${response.statusText}`);
        }
        const data = await response.json(); // Expect success message or additional data
        console.log('Exercise added successfully:', data); // Log success message for debugging
        setWorkouts([...workouts, newWorkout]); // Add the new workout to the workouts state
        setNewExercise(''); // Clear input field
        setNewWeight(0);
        setNewReps(0);
        setNewSets(1);
      } catch (error) {
        console.error('Error adding exercise:', error);
        setError(error.message); // Set error message for display
        // Consider additional error handling logic here (e.g., rollback UI changes)
      } finally {
        setIsLoading(false); // Set loading state to false after operation
      }
    };
    const handleDeleteExercise = async (workout) => {
      if (!workout._id) {
        console.error("Workout ID missing, cannot delete.");
        return;
      }
    
      try {
        const response = await fetch(`http://localhost:3000/exercises/${workout._id}`, {
          method: 'DELETE',
        });
        if (!response.ok) {
          throw new Error(`Error deleting exercise: ${response.statusText}`);
        }
        // Remove workout from state directly (avoiding filter)
        setWorkouts(prevWorkouts => prevWorkouts.filter(w => w._id !== workout._id));
      } catch (error) {
        console.error('Error deleting exercise:', error);
      }
    };
  
    return (
      <ChakraProvider>
        <Box sx={pageStyle}>
          <Flex sx={navStyle}>
            <NavBar></NavBar>  {/* Preserve the NavBar component */}
            <Heading fontSize='96px'>fit.ly</Heading>
          </Flex>
          <Box sx={pageStyle}>
            <h2>Your Exercises</h2> {/* Add a heading for clarity */}
            <Input value={newExercise} onChange={(e) => setNewExercise(e.target.value)} placeholder="Enter Exercise" />
            <Input value={newSets} onChange={(e) => setNewSets(e.target.value)} placeholder="Enter sets" />
            <Input value={newWeight} onChange={(e) => setNewWeight(e.target.value)} placeholder="Enter weight" />
            <Input value={newReps} onChange={(e) => setNewReps(e.target.value)} placeholder="Enter reps" />
            <Button onClick={handleAddWorkout} disabled={isLoading || !newExercise || !newSets|| !newWeight|| !newReps}>
              {isLoading ? 'Adding...' : 'Add Exercise'}
            </Button>
            <br /> {/* Add some space between input and table */}
  
            {error && (
              <Text color="red.500" fontSize="sm">
                {error}
              </Text>
            )}
  
            {isLoading ? (
              <Text>Loading workouts...</Text>
            ) : (
              <Table>
                <Thead>
                  <Tr>
                    <Th>Exercise</Th>
                    <Th>Weight</Th>
                    <Th>Reps</Th>
                    <Th>Sets</Th>
                  </Tr>
                </Thead>
                <Tbody>
                  {workouts.map((workout) => (
                    <Tr key={workout.id}>
                      <Td>{workout.exercise}</Td>
                      <Td>{workout.weight}</Td>
                      <Td>{workout.reps}</Td>
                      <Td>{workout.sets}</Td>
                    </Tr>
                  ))}
                </Tbody>
              </Table>
            )}
          </Box>
        </Box>
      </ChakraProvider>
    );
  }
  
  export default Exercises;