import React from 'react';
import { Button } from '@mantine/core';

const Joiner = () => {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '100vh', textAlign: 'center' }}>
            <h1>Audio Joiner</h1>
            <h2>
                Join multiple audio tracks into one. Choose audio files you want to merge
            </h2>
            <Button variant="outline" size="lg" style={{ marginTop: '20px' }}>
                Browse My File
            </Button>
        </div>
    );
}

export default Joiner;
