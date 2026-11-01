import React from 'react'

const L44 = () => {
    const squareStarPattern = (rows) => {
        let result = '';
        for (let i =1; i <= rows; i++) {
            for (let j = 1; j <= rows; j++) {
                result += '*';
            }
            result += '\n';
        }
        return result;
    };

    const pattern = squareStarPattern(5);

  return (
    <div>
      <h1>Square Star Pattern তৈরি করা।</h1>
      <pre>{pattern}</pre>
    </div>
  )
}

export default L44
