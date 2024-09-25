"use client"

import '@mantine/core/styles.css';

import React, { useState } from 'react';
import { ColorSchemeScript, MantineProvider, rem, UnstyledButton } from '@mantine/core';
import { theme } from '../theme';
import { NavbarMinimal } from '@/components/Navbar/NavbarMinimal';
import { IconSquareToggle } from '@tabler/icons-react';

const metadata = {
  title: 'Mantine Next.js template',
  description: 'I am using Mantine with Next.js!',
};

export default function RootLayout({ children }: { children: any }) {
  const [navbarVisible, setNavbarVisible] = useState(true);

  const handleToggle = () => {
    setNavbarVisible(!navbarVisible)
  }

  return (
    <html lang="en">
      <head>
        <ColorSchemeScript />
        <link rel="shortcut icon" href="/favicon.svg" />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, user-scalable=no"
        />
      </head>
      <body>
        <MantineProvider theme={theme}>
          <UnstyledButton 
          onClick={handleToggle} 
          style={{
            position: 'fixed', // Ensures it stays fixed on the page
            top: rem(10), // Distance from the top of the screen
            left: rem(30), // Distance from the left of the screen
            zIndex: 1000, // Ensure it stays above other content
          }}
        >
          <IconSquareToggle style={{ width: rem(30), height: rem(30) }} stroke={1.5} />
        </UnstyledButton>
          {navbarVisible && <NavbarMinimal /> }
          {children}
        </MantineProvider>
      </body>
    </html>
  );
}
