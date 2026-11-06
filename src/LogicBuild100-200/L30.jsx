import React from 'react'

const L30 = () => {
    const nextGreaterElement = (arr) => {
        const result = new Array(arr.length).fill(-1);
        const stack = [];

        for (let i = arr.length - 1; i >= 0; i--) {
            while (stack.length > 0 && stack[stack.length - 1] <= arr[i]) {
                stack.pop();
            }

            if (stack.length > 0) {
                result[i] = stack[stack.length - 1];
            }

            stack.push(arr[i]);
        }

        return result;
    };

    const array = [4, 5, 2, 25];
    const nextGreaterElements = nextGreaterElement(array);

    return (
        <div>
            <h1>Array-এর প্রতিটি Element-এর Next Greater Element বের করো।</h1>
            <p>Array: {JSON.stringify(array)}</p>
            <p>Next Greater Elements: {JSON.stringify(nextGreaterElements)}</p>
        </div>
    )
}

export default L30
