import React from 'react'

const L10 = () => {
    const countTrailingZeros = (number) => {
        let count = 0;
        while (number > 0) {
            number = Math.floor(number / 5);
            count += number;
        }
        return count;
    };

    const number = 25;
    const trailingZeros = countTrailingZeros(number);

    return (
        <div>
            <h1>দুটি সংখ্যার মধ্যে Trailing Zeros কতটি আছে তা নির্ণয় করো (Factorial-এর ক্ষেত্রে)।</h1>
            <p>Number: {number}</p>
            <p>Trailing Zeros: {trailingZeros}</p>
        </div>
    )
}

export default L10
