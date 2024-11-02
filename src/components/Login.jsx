import React, { useState } from 'react'


import { icon } from '../constants'
import {Input} from '../ui/'
const Login = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

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
    <button class="w-100 btn btn-lg btn-primary" type="submit">Sign in</button>
    <p class="mt-5 mb-3 text-muted">© 2017–2022</p>
  </form>
</main>
  )
}

export default Login