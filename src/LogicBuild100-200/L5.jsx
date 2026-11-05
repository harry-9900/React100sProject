import React from 'react'

const L5 = () => {
    const findSmallestDigit = (number) => {
        let smallestDigit = 9;
        number = Math.abs(number); // Handle negative numbers

        while (number > 0) {
            const digit = number % 10;
            if (digit < smallestDigit) {
                smallestDigit = digit;
            }
            number = Math.floor(number / 10);
        }

        return smallestDigit;
    };

    const number = 12345;
    const smallestDigit = findSmallestDigit(number);

    return (
        <div>
            <h1>একটি সংখ্যার সব Digit-এর মধ্যে সবচেয়ে ছোট Digit বের করো।</h1>
            <p>Number: {number}</p>
            <p>Smallest Digit: {smallestDigit}</p>
        </div>
    )
}

export default L5
