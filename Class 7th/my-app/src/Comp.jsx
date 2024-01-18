import React from 'react'

function Comp({age,data}) {
  return (
    <div >
        <p className='text-white'>{data.age}</p>
        <p className='text-white'>{data.name}</p>
        
    </div>
  )
}

export default Comp