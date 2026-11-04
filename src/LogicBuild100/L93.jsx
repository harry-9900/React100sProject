import React from 'react'

const L93 = () => {
    const reverseArray = (arr) => {
        let left = 0;
        let right = arr.length - 1;
        while (left < right) {
            [arr[left], arr[right]] = [arr[right], arr[left]];
            left++;
            right--;
        }
        return arr;
    };
  return (
    <div>
      <h1>অতিরিক্ত Array ছাড়া Array Reverse করা।</h1>
        <p>Original Array: [1, 2, 3, 4, 5]</p>
        <p>Reversed Array: {reverseArray([1, 2, 3, 4, 5]).join(', ')}</p>
    </div>
  )
}

export default L93
