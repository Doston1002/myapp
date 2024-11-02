import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { icon } from '../constants'
import {Input} from '../ui/'
import { loginUserStart } from '../slice/auth'
const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const dispatch = useDispatch()
    const {isLoading} = useSelector(state => state.auth)

    const loginHandler = e=>{
        e.preventDefault()
        dispatch(loginUserStart())
    }

  return (
    <main class="form-signin w-25 text-center m-auto mt-5">
  <form>
    <img class="mb-2" src={icon} alt="" width="72" height="60"/>
    <h1 class="h3 mb-3 fw-normal">Please login</h1>

    <Input label={'Email address'} type={'email'} state={email} setState={setEmail}/>
    <Input label={'Password'} type={'password'} state={password} setState={setPassword}/>

    <div class="checkbox mb-3">
      <label>
        <input type="checkbox" value="remember-me"/> Remember me
      </label>
    </div>
    <button class="w-100 btn btn-lg btn-primary" type="submit" disabled={isLoading} onClick={loginHandler}>{isLoading ? "Loading..." : "Login"}</button>
  </form>
</main>
  )
}

export default Login