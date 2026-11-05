import React from 'react'

const L6 = () => {
    const calculateSumOfPowers = (number, power) => {
        let sum = 0;
        number = Math.abs(number); // Handle negative numbers

        while (number > 0) {
            const digit = number % 10;
            sum += Math.pow(digit, power);
            number = Math.floor(number / 10);
        }

        return sum;
    };

    const number = 12345;
    const power = 2;
    const sumOfPowers = calculateSumOfPowers(number, power);

    return (
        <div>
            <h1>একটি সংখ্যার প্রতিটি Digit-এর ঘাতের যোগফল বের করো।</h1>
            <p>Number: {number}</p>
            <p>Power: {power}</p>
            <p>Sum of Powers: {sumOfPowers}</p>
        </div>
    )
}

export default L6
