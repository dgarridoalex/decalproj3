import React from "react";
import {ChakraProvider, Box, Text, Flex, Spacer, Heading} from '@chakra-ui/react'
import NavBar from "./NavBar";

import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
} from '@chakra-ui/react'

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

    </Box>
  </Box>
</ChakraProvider>
  );
}



<TableContainer>
  <Table variant='simple'>
    <TableCaption>My Exercises</TableCaption>
    <Thead>
      <Tr>
        <Th>Exercise</Th>
        <Th>Sets</Th>
        <Th isNumeric>Weight</Th>
      </Tr>
    </Thead>
    <Tbody>
      <Tr>
        <Td>bicep curl</Td>
        <Td>2</Td>
        <Td isNumeric>20</Td>
      </Tr>
      <Tr>
        <Td>feet</Td>
        <Td>centimetres (cm)</Td>
        <Td isNumeric>30.48</Td>
      </Tr>
      <Tr>
        <Td>yards</Td>
        <Td>metres (m)</Td>
        <Td isNumeric>0.91444</Td>
      </Tr>
    </Tbody>
    <Tfoot>
      <Tr>
        <Th>To convert</Th>
        <Th>into</Th>
        <Th isNumeric>multiply by</Th>
      </Tr>
    </Tfoot>
  </Table>
</TableContainer>



export default Exercises;
