import React,{ useState } from 'react'
import './App.css'

function Login(props) {
    const [data,setData] = useState({
        email:'',
        password:''
    })

    const {email,password} = data
    const onChangeHandler = e =>{
      setData({...data,[e.target.name]:e.target.value})
    }
    const onSubmitHandler = e =>{
      e.preventDefault()
      setData({...data,email:'',password:''})
      alert('logIn successfull')
      console.log(data)
    }
  return (
    <div className='user-form-container'>
    <form className="login-form-container" onSubmit = {onSubmitHandler}> 
        <label htmlFor='email'>Email</label>
        <input type="email" id='email'autoComplete="email" value={email} name="email" placeholder='abc@gmail.com' onChange = {onChangeHandler}/>
        <label htmlFor='password'>Password</label>
        <input type='password' id="password" autoComplete="current-password" value={password} name='password' placeholder='password' onChange = {onChangeHandler}/>
        <div className="button-container">
            <button type="submit" name="submit">Log In</button>
        </div>
        
    </form>
    <p>Don't have an Account?<a href='#Register' onClick = {()=>props.onFormSwitch('Register')}>Register Here</a></p>
    </div>
  )
}

export default Login