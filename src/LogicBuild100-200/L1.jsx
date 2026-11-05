import React from 'react'
// যেমন, ৯ এর ক্ষেত্রে:
// • ৯ কে ২ দিয়ে ভাগ করলে হয় ৪, অবশিষ্ট ১
// • ৪ কে ২ দিয়ে ভাগ করলে হয় ২, অবশিষ্ট ০
// • ২ কে ২ দিয়ে ভাগ করলে হয় ১, অবশিষ্ট ০
// • ১ কে ২ দিয়ে ভাগ করা যায় না, তাই অবশিষ্ট ১
// এখন এই অবশিষ্টগুলো শেষ থেকে শুরুর দিকে সাজালে পাই: 1001।
const L1 = () => {
    const BinaryRepresentation = (number) => {
        number = parseInt(number);
        let binary = '';
        while (number > 0) {
            binary = (number % 2) + binary;
            number = Math.floor(number / 2);
        }
        return binary;
    }
    const peramiter = 9;
    const printvalue = BinaryRepresentation(peramiter);
  return (

    <div>
      <h1>একটি সংখ্যার Binary Representation বের করো।</h1>
      <p> {peramiter} এর Binary Representation: {printvalue} </p> 
    </div>
  )
}

export default L1
