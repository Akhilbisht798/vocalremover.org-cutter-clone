import React from 'react';
import { Button } from '@mantine/core';

const Splitter = () => {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '100vh', textAlign: 'center' }}>
            <p>HOW IT WORKS</p>
            <h1>Splitter AI</h1>
            <h2>
                Split music into separated parts with AI-Powered algorithms
            </h2>
            <img 
                src="https://vocalremover.org/img/splitter/player_en.png" // Use the provided image link
                alt="Vocal Removal" 
                style={{ width: '300px', height: 'auto', margin: '20px 0' }} // Adjust size as needed
            />
            <Button variant="outline" size="lg" style={{ marginTop: '20px' }}>
                Browse My File
            </Button>
        </div>
    );
}

export default Splitter;
