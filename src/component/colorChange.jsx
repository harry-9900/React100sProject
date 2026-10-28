import React, { useState } from 'react';

function ColorChange() {
    const [color, setColor] = useState('red');
    const [copied, setCopied] = useState(false);

    const colorgenaretor = () => {
        const randomColor = Math.floor(Math.random() * 16777215).toString(16);
        setColor(`#${randomColor.padStart(6, '0')}`);
        setCopied(false); // Notun color asle copy status reset hobe
    };

    // Color code copy korar function
    const copyToClipboard = () => {
        navigator.clipboard.writeText(color);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000); // 2 সেকেন্ড পর message চলে যাবে
    };

    return (
        <div style={{ textAlign: 'center', marginTop: '50px' }}>
            <h1>Color Change & Copy</h1>
            <p>Current Color: <strong>{color}</strong></p>
            
            <div 
                style={{ 
                    backgroundColor: color, 
                    width: '150px', 
                    height: '150px', 
                    margin: '20px auto',
                    borderRadius: '10px',
                    border: '2px solid #ccc',
                    transition: 'background-color 0.3s ease'
                }}
            ></div>

            <div style={{ display: 'flex', justifyContent: 'center', gap: '10px' }}>
                <button 
                    onClick={colorgenaretor}
                    style={{ padding: '10px 20px', fontSize: '16px', cursor: 'pointer' }}
                >
                    Change Color
                </button>

                <button 
                    onClick={copyToClipboard}
                    style={{ padding: '10px 20px', fontSize: '16px', cursor: 'pointer', backgroundColor: '#4CAF50', color: 'white', border: 'none', borderRadius: '5px' }}
                >
                    {copied ? 'Copied!' : 'Copy Code'}
                </button>
            </div>

            {copied && <p style={{ color: 'green', marginTop: '10px' }}>Color code copied to clipboard!</p>}
        </div>
    );
}
export default ColorChange;