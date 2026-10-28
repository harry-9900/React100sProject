import React from 'react'

const L3 = () => {

    const number = [10, 20, 30];

    function maxnumber(numbers) {
    let maxv = numbers[0];
    for (let i = 1; i < numbers.length; i++) {
        if (numbers[i] > maxv) {
            maxv = numbers[i];
        }
    }
    return maxv;
}
  return (
    <div>
      <h1>তিনটি সংখ্যার মধ্যে সবচেয়ে বড় সংখ্যা</h1>
      <p>সবচেয়ে বড় সংখ্যা: {maxnumber([10, 20, 30])}</p>
    </div>
  )
}

export default L3



