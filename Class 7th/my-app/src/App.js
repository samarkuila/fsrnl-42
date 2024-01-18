import React, { useState } from 'react'
import Comp from './Comp';



function App() {

  var [a,b] = useState(10)
  return (
  
    <><div className="w-full h-20 bg-zinc-600 p4">App

      <p>{a}</p>
      <button className='px-3 py-1 bg-green-500 rounded-md'onClick={()=>b(a+1)}>Click</button>  
 
      
    </div> 
    
    <Comp age="25" data={{age: 15, name: "Sam"}}/></>
    
    
  );
}

export default App