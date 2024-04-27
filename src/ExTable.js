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

const tableTextStyle = {
  color: 'white', // Change the color to white or any other color you prefer
};

function ExTable() {
    return (
  <ChakraProvider>
    <Box sx={pageStyle} style={boxStyle}>
    <Heading as="h1" size="xl" mb={6} style={{ color: 'white' }}>My Exercises</Heading>
    <TableContainer>
  <Table variant='simple' colorScheme="white">
    <Thead>
      <Tr>
        <Th style={tableTextStyle}>Exercise</Th>
        <Th style={tableTextStyle}>Sets</Th>
        <Th style={tableTextStyle} isNumeric>Weight</Th>
      </Tr>
    </Thead>
    <Tbody>
      <Tr>
        <Td style={tableTextStyle}>bicep curl</Td>
        <Td style={tableTextStyle}>2</Td>
        <Td style={tableTextStyle} isNumeric>20</Td>
      </Tr>
      <Tr>
        <Td style={tableTextStyle}>feet</Td>
        <Td style={tableTextStyle}>centimetres (cm)</Td>
        <Td style={tableTextStyle} isNumeric>30.48</Td>
      </Tr>
      <Tr>
        <Td style={tableTextStyle}>yards</Td>
        <Td style={tableTextStyle}>metres (m)</Td>
        <Td style={tableTextStyle} isNumeric>0.91444</Td>
      </Tr>
    </Tbody>
    <Tfoot>
      <Tr>
        <Th style={tableTextStyle}>To convert</Th>
        <Th style={tableTextStyle}>into</Th>
        <Th style={tableTextStyle} isNumeric>multiply by</Th>
      </Tr>
    </Tfoot>
  </Table>
</TableContainer>
    </Box>
  </ChakraProvider>
    );
  }


export default ExTable;