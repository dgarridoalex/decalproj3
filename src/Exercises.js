import React from "react";
import {ChakraProvider, Box, Text, Flex, Spacer, Heading} from '@chakra-ui/react'
import NavBar from "./NavBar";
import ExTable from "./ExTable.js"

const pageStyle = {
    color: '##4fd1af',
    fontFamily: "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",
    fontWeight: 'bold',
    fontSize: '32px',
    textAlign: 'center',
    backgroundColor: '#121212',
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
  return (
<ChakraProvider>
  <Box sx={pageStyle}>
    <Flex sx={navStyle}>
      <NavBar></NavBar>
      <Heading fontSize='96px'>fit.ly</Heading>
    </Flex>
    <Box sx={pageStyle}>
<ExTable></ExTable>
    </Box>
  </Box>
</ChakraProvider>
  );
}

export default Exercises;
