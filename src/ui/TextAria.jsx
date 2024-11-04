import React from 'react'

const TextAria = ({label, state, setState, height= '100px'}) => {
  return (
    <div className='form-floating'>
        <textarea 
        className='form-control'
        placeholder={label}
        id='floatingTextarea2'
        value={state}
        onChange={e=>setState(e.target.value)}
        style={{height:height}}
        >
        </textarea>
        <label htmlFor='floatingTextarea2'>
           {label}
        </label>
    </div>
  )
}

export default TextAria