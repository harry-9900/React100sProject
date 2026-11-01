import React from 'react'

const L49 = () => {
    const factorial = (n) => {
        if (n === 0 || n === 1) {
            return 1;
        }
        return n * factorial(n - 1);
    };

    return (
        <div>
            <h1>Function দিয়ে Factorial বের করা।</h1>
            <p>5! = {factorial(5)}</p>
        </div>
    )
}

export default L49
