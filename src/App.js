import 'bootstrap/dist/css/bootstrap.min.css';
import { ChakraProvider} from '@chakra-ui/react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import React from 'react';
import Home from './Home.js'
import Exercises from './Exercises.js';
import Nutrition from './Nutrition.js'

function App() {
  return (
<ChakraProvider>
  <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/exercises" element={<Exercises />} />
      <Route path="/nutrition" element={<Nutrition />} />
    </Routes>
  </Router>
</ChakraProvider>
  );
}

export default App;
