import React from 'react'

const L10 = () => {
    const number = (n) => {
        if(n % 5 === 0){
            return "true";
        }else{
            return "false";
        }
    }
    let n = 10;
  return (
    
    <div>
      <p>সংখ্যা {n} 5 এর গুণিতক কিনা: {number(n)}</p>
    </div>
  )
}

export default L10
