import React from 'react'
// °C থেকে °F রূপান্তরের উদাহরণ
// উদাহরণস্বরূপ, ২৬°C কে °F (একটি উষ্ণ দিনের তাপমাত্রা)-এ রূপান্তর করতে:

//  °F = (°C × 9/5) + 32

//  °F = (২৬ × ৯/৫) + ৩২

// °F = (46.8) + 32

// °F =  ৭৮.৮° ফারেনহাইট
const L17 = () => {
    const convertToFahrenheit = (celsius) => (celsius * 1.8 + 32).toFixed(1);

 
    return(
    <div>
      <h1>Celsius থেকে Fahrenheit-এ রূপান্তর করা।</h1>
      <p>{convertToFahrenheit(26)}<sup>°</sup></p>
    </div>
  )
}

export default L17





