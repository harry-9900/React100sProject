import React from 'react'

const L8 = () => {
    const binarySearchSquareRoot = (number) => {
        if (number < 0) return NaN;
        if (number === 0) return 0;

        let low = 0;
        let high = number;
        let mid;

        while (low <= high) {
            mid = Math.floor((low + high) / 2);
            const square = mid * mid;

            if (square === number) {
                return mid;
            } else if (square < number) {
                low = mid + 1;
            } else {
                high = mid - 1;
            }
        }

        return NaN; // Not a perfect square
    };

    const number = 25;
    const squareRoot = binarySearchSquareRoot(number);

    return (
        <div>
            <h1>একটি সংখ্যার Square Root বের করো Binary Search ব্যবহার করে।</h1>
            <p>Number: {number}</p>
            <p>Square Root: {squareRoot}</p>
        </div>
    )
}

export default L8
