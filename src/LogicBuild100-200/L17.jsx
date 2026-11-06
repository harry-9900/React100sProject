import React from 'react'

const L17 = () => {
    const findMajorityElement = (arr) => {
        const countMap = {};
        const majorityCount = Math.floor(arr.length / 2);

        for (const element of arr) {
            countMap[element] = (countMap[element] || 0) + 1;
            if (countMap[element] > majorityCount) {
                return element;
            }
        }

        return null;
    };

    const array = [3, 3, 4, 2, 4, 4, 2, 4, 4];
    const majorityElement = findMajorityElement(array);

    return (
        <div>
            <h1>Array-তে Majority Element খুঁজে বের করো।</h1>
            <p>Array: {JSON.stringify(array)}</p>
            <p>Majority Element: {majorityElement}</p>
        </div>
    )
}

export default L17
