import React from 'react'

const L41 = () => {
    const starPyramid = (n) => {
        const rows = [];
        
        for (let i = 1; i <= n; i++) {
            let row = "";

            // ১. স্পেস যোগ করার লুপ (n - i সংখ্যক স্পেস)
            for (let j = 1; j <= n - i; j++) {
                row += " ";
            }

            // ২. স্টার যোগ করার লুপ (i সংখ্যক স্টার এবং পরে স্পেস)
            for (let k = 1; k <= i; k++) {
                row += "* ";
            }

            rows.push(row);
        }
        
        return rows.join("\n");
    }

    let print = starPyramid(4);

    return (
        <div style={{ padding: '20px' }}>
            <h1>Star Pyramid Pattern</h1>
            {/* monospace ফন্ট ব্যবহার করলে সব ক্যারেক্টারের উইডথ সমান থাকে, ফলে পিরামিড সোজা দেখায় */}
            <pre style={{ fontFamily: 'monospace', fontSize: '1.2rem', lineHeight: '1.5' }}>
                {print}
            </pre>
        </div>
    )
}

export default L41