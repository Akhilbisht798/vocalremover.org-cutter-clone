import React from 'react';
import { Button } from '@mantine/core';

const BpmFinder = () => {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '100vh', textAlign: 'center' }}>
            <p>HOW IT WORKS</p>
            <h1>Song Key and BPM Finder</h1>
            <h2>
                Analyzes music and finds Key, Scale and BPM for any song
            </h2>
            <Button variant="outline" size="lg" style={{ marginTop: '20px' }}>
                Browse My File
            </Button>
        </div>
    );
}

export default BpmFinder;
