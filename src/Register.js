import React, {useState} from 'react'
import './App.css'

function Register(props) {
  const [data,setData] = useState({
    email:'',
    password:'',
    username:'',
    confirmPassword:''
})
const {email,password,username,confirmPassword} = data

    const onChangeHandler = e =>{
      setData({...data,[e.target.name]:e.target.value})
    }
    const onSubmitHandler = e =>{
      e.preventDefault()
      if(password!==confirmPassword){
        alert("passwords are not matching")
      }
      else{
        console.log(data)
        setData({...data,email:'',password:'',username:'',confirmPassword:''})
        alert('Registered Successfully')
      }
     
    }

  return (
    <div className='user-form-container'>
      <form className="register-form-container" onSubmit = {onSubmitHandler}> 
        <label htmlFor='username'>UserName</label>
        <input style={{textTransform:'uppercase'}} type = "text" autoComplete="username" id = "username" value={username} name="username" placeholder='Full Name' onChange={onChangeHandler} />
        <label htmlFor='email'>Email</label>
        <input type="email" id='email' autoComplete="off"  value={email} name="email" placeholder='abc@gmail.com' onChange = {onChangeHandler}/>
        <label htmlFor='password'>Password</label>
        <input type='password' id="password" autoComplete="current-password" value={password} name='password' placeholder='password' onChange = {onChangeHandler}/>
        <label htmlFor='confirmPassword'>confirmPassword</label>
        <input type='password' id="confirmPassword" autoComplete="new-password"  value={confirmPassword} name='confirmPassword' placeholder='confirmPassword' onChange = {onChangeHandler}/>
        <div>
        <button type="submit" name="submit" onSubmit = {onSubmitHandler}>Register</button>
        </div>
        
    </form>
    <p>Already have an Account?<a href='#Login' onClick = {()=>props.onFormSwitch('Login')}>Login Here</a></p>
    </div>
  )
}

export default Register