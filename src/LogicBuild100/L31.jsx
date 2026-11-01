import React from 'react'

const L31 = () => {
    // কোনো সংখ্যার ডিজিটগুলোর যোগফল বের করার ফাংশন
    const sumOfDigits = (num) => {
        return num
            .toString()
            .split('')
            .reduce((acc, curr) => acc + Number(curr), 0);
    }

    let numberToTest = 525;
    let result = sumOfDigits(numberToTest);

    return (
        <div>
            <h1>সংখ্যার Digit-এর যোগফল বের করা।</h1>
            <p>{numberToTest} সংখ্যার ডিজিটগুলোর যোগফল: {result}</p>
        </div>
    )
}

export default L31