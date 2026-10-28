import React from 'react'

const L2 = () => {

    const checkEvenOrOdd = (number) => {
  if (number % 2 === 0) {
    return "Even (জোড় সংখ্যা)";
  } else {
    return "Odd (বিজোড় সংখ্যা)";
  }
};

console.log(checkEvenOrOdd(4)); // Output: Even (জোড় সংখ্যা)
console.log(checkEvenOrOdd(7)); // Output: Odd (বিজোড় সংখ্যা)

  return (
    <div>
      <p>{checkEvenOrOdd(4)}</p>
      <p>{checkEvenOrOdd(7)}</p>
    </div>
  )
}

export default L2
