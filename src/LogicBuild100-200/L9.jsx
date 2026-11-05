import React from 'react'

const L9 = () => {
    const nthRoot = (number, n) => {
        // ঋণাত্মক সংখ্যা এবং n যদি জোড় সংখ্যা হয়, তবে বাস্তব সংখ্যায় তার root সম্ভব নয় (NaN রিটার্ন করবে)
        if (number < 0 && n % 2 === 0) return NaN;
        if (number === 0) return 0;

        let low = 0;
        let high = Math.max(1, number); // উচ্চ সীমা নির্ধারণ
        let mid = 0;
        
        // দশমিকের পর নিখুঁত মানের জন্য একটি ছোট মান (epsilon) ধরা যাক
        const precision = 0.00001; 

        while ((high - low) > precision) {
            mid = (low + high) / 2;
            
            // mid এর ওপর পাওয়ার n হিসাব করা (mid^n)
            let power = Math.pow(mid, n);

            if (power === number) {
                return mid;
            } else if (power < number) {
                low = mid; // মান কম হলে low বাড়িয়ে দেবো
            } else {
                high = mid; // মান বেশি হলে high কমিয়ে দেবো
            }
        }

        // দশমিকের নির্দিষ্ট ঘর পর্যন্ত রাউন্ড করে রিটার্ন করা
        return Number(mid.toFixed(4));
    };

    const number = 50;
    const n = 3; // ৫০ এর কিউব রুট (Cube Root)

    return (
        <div>
            <h1>একটি সংখ্যার Nth Root বের করার Logic তৈরি করো।</h1>
            <p>Number: {number}</p>
            <p>Nth Root ({n}): {nthRoot(number, n)}</p>
        </div>
    )
}

export default L9;