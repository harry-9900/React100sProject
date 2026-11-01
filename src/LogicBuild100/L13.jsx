import React from 'react'

function L13() {
    
    const bdfunction = (age) => {
        if(age >= 18){
        return "আপনি ভোট দেওয়ার যোগ্য।";
    } else {
        return "আপনি ভোট দেওয়ার যোগ্য নন।";
    }
    }
    
    const myAge = bdfunction(20);
  return (
    <div>
      <h1> 18বয়স অনুযায়ী ভোট দেওয়ার যোগ্যতা নির্ণয় করা।</h1>
      <p>{myAge}</p>
    </div>
  )
}

export default L13
