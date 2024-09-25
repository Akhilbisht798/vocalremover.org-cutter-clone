import { CommentHtml } from '@/components/Comment/CommentHTML';
import React from 'react';

const Remove = () => {
    return (
        <>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '100vh', textAlign: 'center' }}>
            <CommentHtml />
        </div>
        </>
    );
}

export default Remove;
