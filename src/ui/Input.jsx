const Input = ({label, state, type='text', setState}) => {
  return (
    <div classname="form-floating">
      <input type={type} class="form-control" onChange={e=>setState(e.target.value)} value={state} placeholder={label}/>
      <label for="floatingInput">{label}</label>
    </div>
  )
}

export default Input