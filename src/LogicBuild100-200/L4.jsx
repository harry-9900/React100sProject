import React from 'react'

const L4 = () => {
    const findLargestDigit = (number) => {
        let largestDigit = 0;
        number = Math.abs(number); // Handle negative numbers

        while (number > 0) {
            const digit = number % 10;
            if (digit > largestDigit) {
                largestDigit = digit;
            }
            number = Math.floor(number / 10);
        }

        return largestDigit;
    };

    const number = 12345;
    const largestDigit = findLargestDigit(number);

    return (
        <div>
            <h1>একটি সংখ্যার সব Digit-এর মধ্যে সবচেয়ে বড় Digit বের করো।</h1>
            <p>Number: {number}</p>
            <p>Largest Digit: {largestDigit}</p>
        </div>
    )
}

export default L4
