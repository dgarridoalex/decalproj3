import React from "react";
import NavBar from './NavBar.js'
import { Heading, Text, Box, Center, Button, ButtonGroup, Flex} from '@chakra-ui/react'
import { ChakraProvider} from '@chakra-ui/react'

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

function Home() {
  return (
<ChakraProvider>
  <Box sx={pageStyle}>
    <Flex sx={navStyle}>
      <NavBar></NavBar>
      <Heading fontSize='96px'>fit.ly</Heading>
    </Flex>
    <Box sx={pageStyle}>
      <Flex>
      <Text fontSize='32px'>
        Take control of your fitness journey with fitly. We provide a comprehensive platform to help you achieve your unique goals.
      </Text>
      <br></br>
      </Flex>
    </Box>
  </Box>
</ChakraProvider>
  );
}

export default Home;