"use client"

import '@mantine/core/styles.css';

import React, { useState } from 'react';
import { ColorSchemeScript, Flex, MantineProvider, rem, UnstyledButton } from '@mantine/core';
import { theme } from '../theme';
import { NavbarMinimal } from '@/components/Navbar/NavbarMinimal';
import { IconSquareToggle } from '@tabler/icons-react';
import styles from './layout.module.css'

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
          <div style={{ margin: "15px"}}>
            <UnstyledButton
              onClick={handleToggle}
              style={{
                position: 'fixed',
                top: rem(10),
                left: rem(30),
                zIndex: 1000,
              }}
            >
              <IconSquareToggle style={{ width: rem(30), height: rem(30) }} stroke={1.5} />
            </UnstyledButton>
          </div>
         <div style={{ display: "flex", gap: "10px" }}>
            <div style={{ minHeight: "100vh" }}>
              {navbarVisible && <NavbarMinimal />}
            </div>
            <div>
              {children}
            </div>
          </div>
        </MantineProvider>
      </body>
    </html>
  );
}
