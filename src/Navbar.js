import React from "react";
import {ChakraProvider, Box} from '@chakra-ui/react'
import {ChevronRightIcon} from '@chakra-ui/icons'
import { Link, useLocation } from 'react-router-dom';

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
} from '@chakra-ui/react'

const headerStyle = {
  color: '#4FD1C5',
  fontFamily: "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",
  fontWeight: 'bold',
  fontSize: '24px',
  textAlign: 'center'
};

const breadcrumbs = [
  { label: 'Home', path: '/' },
  { label: 'Exercises', path: '/exercises' }
];



function Navbar() {
  const location = useLocation();
  return (
    <ChakraProvider>
      <Breadcrumb separator={<ChevronRightIcon></ChevronRightIcon>}>
        {breadcrumbs.map((item, index) => (
          <BreadcrumbItem key={index}>
            {location.pathname === item.path ? (
              <span>{item.label}</span>
            ) : (
              <Link to={item.path}>
                {item.label}
              </Link>
            )}
            {index < breadcrumbs.length - 1}
          </BreadcrumbItem>
        ))}
      </Breadcrumb>
    </ChakraProvider>
  );
}

export default Navbar;