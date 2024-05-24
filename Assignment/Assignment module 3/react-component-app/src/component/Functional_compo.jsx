import React from 'react'
const a=20;
const b=5;
const c=a+b;
const d=a-b;
const e=a*b;
const f=a/b;

export default function Functional_compo() {
  return (
    <div>
     adiition is :{c}
     <hr/>
     substraction is:{d}
     <hr/>
     multiplication is:{e}  
     <hr/>
     division is :{f}
    </div>
  )
}
/* 
functional Component :
note:-  
        functional component can be reusable and  independent..
        functional component is easy using with hooks..
        its easier to tasted because it is only functions
        It is statless  component..

*/