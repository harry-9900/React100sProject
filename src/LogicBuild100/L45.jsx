import React from 'react'

const L45 = () => {
    const hollowSquarePattern = (rows) => {
        let result = '';
        for (let i = 1; i <= rows; i++) {
            for (let j = 1; j <= rows; j++) {
                if (i === 1 || i === rows || j === 1 || j === rows) {
                    result += '*';
                } else {
                    result += ' ';
                }
            }
            result += '\n';
        }
        return result;
    };

    const pattern = hollowSquarePattern(5);

    return (
        <div>
            <h1>Hollow Square Pattern তৈরি করা</h1>
            <pre>{pattern}</pre>
        </div>
    )
}

export default L45
