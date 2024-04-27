import React from "react";
import {ChakraProvider, Box, Text, Flex, Spacer, Heading, Table, Thead, Tbody, Tfoot ,Tr, Th, Td, TableCaption, TableContainer} from '@chakra-ui/react'


const pageStyle = {
  color: '##4fd1af',
  fontFamily: "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",
  fontWeight: 'bold',
  fontSize: '32px',
  textAlign: 'center',
  backgroundColor: '#121212',
  minHeight: '100vh'
};

const boxStyle = {
  width: '80%', // Adjust the width as per your requirement
  margin: 'auto', // Center the box horizontally
  marginTop: '20px', // Add some top margin
};

function ExTable() {
    return (
  <ChakraProvider>
    <Box sx={pageStyle} style={boxStyle}>
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
    </Box>
  </ChakraProvider>
    );
  }


export default ExTable;