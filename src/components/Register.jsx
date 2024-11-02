import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { icon } from '../constants'
import {Input} from '../ui/'
import { registerUserStart } from '../slice/auth'
const Register = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const dispatch = useDispatch()
    const {isLoading} = useSelector(state => state.auth)

    const registerHandler = e=>{
        e.preventDefault()
        dispatch(registerUserStart())
    }
  return (
    <main class="form-signin w-25 text-center m-auto mt-5">
  <form>
    <img class="mb-2" src={icon} alt="" width="72" height="60"/>
    <h1 class="h3 mb-3 fw-normal">Please register</h1>

    <Input label={'Username'} state={name} setState={setName}/>
    <Input label={'Email address'} type={'email'} state={email} setState={setEmail}/>
    <Input label={'Password'} type={'password'} state={password} setState={setPassword}/>

    <div class="checkbox mb-3">
      <label>
        <input type="checkbox" value="remember-me"/> Remember me
      </label>
    </div>
    <button class="w-100 btn btn-lg btn-primary" type="submit" disabled={isLoading} onClick={registerHandler} >{isLoading ? "Loading..." : "Register"}</button>
  </form>
</main>
  )
}

export default Register