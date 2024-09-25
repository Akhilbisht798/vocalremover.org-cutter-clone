import React from 'react';
import { Button } from '@mantine/core';

const Karaoke = () => {
    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '100vh', textAlign: 'center' }}>
            <h1>Audio JoinerRecording Voice Over a Song</h1>
            <h2>
                Sing & record, tune voice and save complete song. Choose karaoke track you want to sing with
            </h2>
            <Button variant="outline" size="lg" style={{ marginTop: '20px' }}>
                Browse My File
            </Button>
        </div>
    );
}

export default Karaoke;
