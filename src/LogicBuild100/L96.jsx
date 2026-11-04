import React from 'react';

const L96 = () => {
    // ম্যাট্রিক্স ট্রান্সপোজ ফাংশন
    const transposeMatrix = (matrix) => {
        const rows = matrix.length;
        const cols = matrix[0].length;
        let result = [];

        for (let i = 0; i < cols; i++) {
            let newRow = [];
            for (let j = 0; j < rows; j++) {
                newRow.push(matrix[j][i]);
            }
            result.push(newRow);
        }
        return result;
    };

    const originalMatrix = [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9]
    ];

    const transposed = transposeMatrix(originalMatrix);

    // ম্যাট্রিক্স রেন্ডার করার জন্য হেলপার টেবিল স্টাইল
    const renderMatrixTable = (matrix) => (
        <table style={{ borderCollapse: 'collapse', margin: '10px 0' }}>
            <tbody>
                {matrix.map((row, rowIndex) => (
                    <tr key={rowIndex}>
                        {row.map((cell, colIndex) => (
                            <td 
                                key={colIndex} 
                                style={{
                                    border: '1px solid #333',
                                    padding: '10px 15px',
                                    textAlign: 'center',
                                    fontWeight: 'bold',
                                    backgroundColor: '#f9f9f9'
                                }}
                            >
                                {cell}
                            </td>
                        ))}
                    </tr>
                ))}
            </tbody>
        </table>
    );

    return (
        <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
            <h2>Matrix Transpose</h2>
            
            <div style={{ display: 'flex', gap: '40px', marginTop: '20px' }}>
                <div>
                    <h3>Original Matrix:</h3>
                    {renderMatrixTable(originalMatrix)}
                </div>

                <div>
                    <h3>Transposed Matrix:</h3>
                    {renderMatrixTable(transposed)}
                </div>
            </div>
        </div>
    );
};

export default L96;