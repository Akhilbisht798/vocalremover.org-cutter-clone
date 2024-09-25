import React from 'react';
import { Button } from '@mantine/core';

const Cutter = () => {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '100vh', textAlign: 'center' }}>
            <p>HOW IT WORKS</p>
            <h1>Audio Cutter</h1>
            <h2>
                Free editor to trim and cut any audio file online
            </h2>
            <Button variant="outline" size="lg" style={{ marginTop: '20px' }}>
                Browse My File
            </Button>
        </div>
    );
}

export default Cutter;
