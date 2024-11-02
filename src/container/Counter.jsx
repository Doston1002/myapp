import React from 'react'
import { useDispatch } from 'react-redux'
import { plusCounter, minusCounter, resertCounter } from '../reducers/countSlice'
const Counter = () => {
    const dispatch = useDispatch()
  return (
    <div className='btn-group'>
<button className='btn btn-success' onClick={()=> dispatch(plusCounter())}>
    Plus
</button>
<button className='btn btn-secondary' onClick={()=> dispatch(minusCounter())}>
    Minus
</button>
<button className='btn btn-danger' onClick={()=> dispatch(resertCounter())}>
   Resert
</button>
    </div>
  )
}

export default Counter