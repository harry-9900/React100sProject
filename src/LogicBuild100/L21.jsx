import React from 'react'

const L21 = () => {
    const numberprint = () => {
        let numbers = [] // সংখ্যাগুলো রাখার জন্য একটি খালি অ্যারে নিলাম
        for (let i = 1; i <= 100; i++) {
            // প্রতিবার লুপ ঘোরার সময় সংখ্যাটিকে অ্যারেতে পুশ (push) করছি
            numbers.push(
                <span key={i} style={{ marginRight: '10px' }}>
                    {i}
                </span>
            )
        }
        return numbers // তৈরি হওয়া অ্যারেটি রিটার্ন করে দিলাম
    }

    const print = numberprint()

    return (
        <div>
            <h1>১ থেকে ১০০ পর্যন্ত সংখ্যা প্রিন্ট করা</h1>
            {/* এখন print এর ভেতর ১ থেকে ১০০ পর্যন্ত সংখ্যার পুরো লিস্টটি আছে */}
            <div style={{ wordBreak: 'break-word', lineHeight: '2' }}>
                {print}
            </div>
        </div>
    )
}

export default L21

