import React from 'react'

const L25 = () => {
    const odenumber = (number)=> {
        let num1 = []
        for(let i = 1; i <= number; i += 2){
            num1.push(
                <span key={i} style={{ marginRight: '10px' }}>
                    {i}
                </span>
            );
        }
        return num1;
    }
    const print = odenumber(100)
  return (

    <div>
        <h1>১ থেকে N পর্যন্ত বিজোড় সংখ্যা প্রিন্ট করা</h1>
      <div style={{ wordBreak: 'break-word', lineHeight: '2' }}>
                {print}
            </div>
    </div>
  )
}

export default L25





