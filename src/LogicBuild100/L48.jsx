import React from 'react'

const L48 = () => {
    const checkEvenOdd = (number) => {
        if (number % 2 === 0) {
            return 'Even';
        } else {
            return 'Odd';
        }
    };

    return (
        <div>
            <h1>Function দিয়ে জোড়-বিজোড় নির্ণয় করা।</h1>
            <p>Number 4 is: {checkEvenOdd(4)}</p>
            <p>Number 7 is: {checkEvenOdd(7)}</p>
        </div>
    )
}

export default L48
