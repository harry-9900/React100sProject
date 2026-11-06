// import React from 'react'

// const L16 = () => {
//     const findFirstAndLastPositions = (arr, target) => {
//         const firstPosition = arr.indexOf(target);
//         const lastPosition = arr.lastIndexOf(target);
//         return { firstPosition, lastPosition };

//     }
//    const array = [1, 2, 3, 4, 2, 5, 2, 6];
//    const print = findFirstAndLastPositions(array, 2);
//   return (
//     <div>
//       <h1>Array-তে প্রতিটি Element-এর প্রথম ও শেষ অবস্থান বের করো।</h1>
//       <p>Array: {JSON.stringify(array)}</p>
//       <p>Target Element: 2</p>
//       <p>প্রথম অবস্থান: {print.firstPosition}</p>
//       <p>শেষ অবস্থান: {print.lastPosition}</p>
        
//     </div>
//   )
// }

// export default L16

import React from 'react';

const L16 = () => {
    
    
    function analyzeArray(numbersArray) {
       
        if (numbersArray.length === 0) return null;

        let firstItem = numbersArray[0].toString();
        let lastItem = numbersArray[numbersArray.length - 1].toString();

        return {
            first: firstItem[0], 
            last: lastItem[lastItem.length - 1], 
            totalLength: numbersArray.length
        };
    }

    
    const numbers = [458929];

  
    const result = analyzeArray(numbers);

    return (
        <div>
            <h3>অ্যারে অ্যানালাইসিস রেজাল্ট:</h3>
            <p>অ্যারের প্রথম সংখ্যার প্রথম ডিজিট: {result.first}</p>
            <p>অ্যারের শেষ সংখ্যার শেষ ডিজিট: {result.last}</p>
            <p>অ্যারেতে মোট কয়টি উপাদান আছে (Length): {result.totalLength}</p>
        </div>
    );
}

export default L16;



