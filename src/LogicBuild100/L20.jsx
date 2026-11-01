import React from 'react'

// শর্ত	কোণ অনুযায়ী ধরন	বাহু অনুযায়ী ধরন
// যদি \(a^2 + b^2 > c^2\) হয়	সূক্ষ্মকোণী	বাহুর মান অনুযায়ী সমবাহু, সমদ্বিবাহু বা বিষমবাহু হতে পারে
// যদি \(a^2 + b^2 = c^2\) হয় (পিথাগোরাস উপপাদ্য)	সমকোণী	সমদ্বিবাহু বা বিষমবাহু হতে পারে
// যদি \(a^2 + b^2 < c^2\) হয়	স্থূলকোণী	সমদ্বিবাহু বা বিষমবাহু হতে পারে

const L20 = () => {
    const angelShap = (a,b,c)=>{
        if(a*a + b*b > c*c){
            return "সূক্ষ্মকোণী";
        }else if(a*a + b*b === c*c){
            return "সমকোণী";
        }else if(a*a + b*b < c*c){
            return "স্থূলকোণী";
        }else{
            return "nothing";
        }
    }
    const result = angelShap(3,4,5)
  return (
    
    <div>
      <h1>ত্রিভুজের ধরন নির্ণয় করা।</h1>
      <p>{result}</p>
    </div>
  )
}

export default L20
