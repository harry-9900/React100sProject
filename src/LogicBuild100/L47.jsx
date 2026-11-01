import React from 'react'

const L47 = () => {
    const returnLargeNumber = () => {
        const largeNumber = 1000000;
        return largeNumber;
    };

    return (
        <div>
            <h1>Function দিয়ে বড় সংখ্যা Return করা।</h1>
            <p>The large number is: {returnLargeNumber()}</p>
        </div>
    )
}

export default L47
