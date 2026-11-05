import React from 'react'

const L3 = () => {
    const DecimalToHexadecimal = (decimal) => {
        let hex = '';
        const hexChars = '0123456789ABCDEF';

        if (decimal === 0) {
            return '0';
        }

        while (decimal > 0) {
            const remainder = decimal % 16;
            hex = hexChars[remainder] + hex;
            decimal = Math.floor(decimal / 16);
        }

        return hex;
    };

    const decimalNumber = 90;
    const hexadecimalNumber = DecimalToHexadecimal(decimalNumber);

    return (
        <div>
            <h1>Decimal Number-কে Hexadecimal-এ রূপান্তর করো।</h1>
            <p>Decimal: {decimalNumber}</p>
            <p>Hexadecimal: {hexadecimalNumber}</p>
        </div>
    )
}

export default L3
