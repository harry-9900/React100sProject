import React from 'react'

const L92 = () => {
    const arr = [2, 5, 8, 12, 16, 23, 38, 45, 56, 67, 78, 89, 99];
    const target = 23;

    const binarySearch = (arr, target) => {
        let low = 0;
        let high = arr.length - 1;

        while (low <= high) {
            const mid = Math.floor((low + high) / 2);
            if (arr[mid] === target) {
                return mid;
            } else if (arr[mid] < target) {
                low = mid + 1;
            } else {
                high = mid - 1;
            }
        }
        return -1;
    };

    const result = binarySearch(arr, target);
  return (
    <div>
      <h1>Binary Search দিয়ে Array-তে সংখ্যা খুঁজে বের করা।</h1>
      <p>Array: {arr.join(', ')}</p>
      <p>Target: {target}</p>
      {result !== -1 ? (
        <p>Index: {result}</p>
      ) : (
        <p>Element not found.</p>
      )}
    </div>
  )
}

export default L92
