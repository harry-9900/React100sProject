import React from 'react'

const L90 = () => {
    const str = "Hello World";
    const codePoints = [...str].map(char => char.charCodeAt(0));
  return (
    <div>
      <h1>প্রতিটি Character-এর Unicode Code Point বের করা।</h1>
      <p>String: {str}</p>
      <p>Unicode Code Points: {codePoints.join(', ')}</p>
    </div>
  )
}

export default L90
