import React from 'react';
import { Button } from '@mantine/core';

const Pitcher = () => {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '100vh', textAlign: 'center' }}>
            <p>HOW IT WORKS</p>
            <h1>Audio Speed and Pitch Changer</h1>
            <h2>
               Changes pitch and tempo of the song by adjusting musical key and bpm sliders 
            </h2>
            <Button variant="outline" size="lg" style={{ marginTop: '20px' }}>
                Browse My File
            </Button>
        </div>
    );
}

export default Pitcher;
