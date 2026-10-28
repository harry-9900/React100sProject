import React from 'react'

const L5 = () => {

     const Lty5 = (num) => {
        let result = 1;
        for (let i = 1; i <= num; i++) {
            result *= i;
        }
        return result;
    }
    Lty5(5)
  return (
   
    <div>
      <p>{Lty5(5)}</p>
    </div>
  )
}

export default L5
