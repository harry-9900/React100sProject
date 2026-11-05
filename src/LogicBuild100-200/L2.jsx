import React from 'react'

const L2 = () => {
   const BinaryToDecimal = (binary) => {
    let decimal = 0;
    let binaryString = binary.toString();
    let length = binaryString.length;

    for (let i = 0; i < length; i++) {
      if (binaryString[i] === '1') {
        decimal += Math.pow(2, length - 1 - i);
      }
    }

    return decimal;
  };

  const binaryNumber = 1010;
  const decimalNumber = BinaryToDecimal(binaryNumber);

  return (
    <div>
      <p>Binary: {binaryNumber}</p>
      <p>Decimal: {decimalNumber}</p>
    </div>
  )
}

export default L2
