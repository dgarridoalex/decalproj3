import React from "react";
import "./style.css"
import { Heading, Text, Box, Center, Button, ButtonGroup} from '@chakra-ui/react'
import {CheckCircleIcon, ArrowDownIcon} from '@chakra-ui/icons'
import { ChakraProvider} from '@chakra-ui/react'

  const headerStyle = {
    color: '#4FD1C5',
    fontFamily: "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",
    fontWeight: 'bold',
    fontSize: '32px',
    textAlign: 'center'
  };

function Header() {
  return (
<div>
  <ChakraProvider>
    <Box sx={headerStyle}>
      <Heading fontSize='96px'>fit.ly</Heading>
      <Text fontSize='32px' color='#4FD1C5'>
        Take control of your fitness journey with fitly. We provide a comprehensive platform to help you achieve your unique goals.&nbsp;&nbsp;<CheckCircleIcon color='#4FD1C5' />
      </Text>
      <br></br>
    </Box>
    <Box sx={headerStyle}>
      <Button leftIcon={<CheckCircleIcon />}  colorScheme='teal' size='lg'>
         Begin now
      </Button>
    </Box>
  </ChakraProvider>
</div>

  );
}

export default Header;