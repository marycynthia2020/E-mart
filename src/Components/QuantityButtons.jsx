import React, { useState } from 'react'

const QuantityButtons = () => {
    const [qty, setQty] = useState(0)
  return (
    <div className="flex items-center border border-gray-300 rounded px-2">
        <button className="text-lg" onClick={()=> setQty(qty +1)}>+</button>
        <span className="px-2">{qty}</span>
        <button className="text-lg" onClick={()=> qty >0 ? setQty(prev=> prev-1): setQty(0)}>-</button>
    </div>
  )
}

export default QuantityButtons