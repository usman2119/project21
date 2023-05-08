import axios from 'axios'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Signup = () => {

    const [email,setemail]=useState('')
    const [password,setpassword]=useState('')
    const history=useNavigate

    async function submit(e){
        e.preventDefault();
        try {
            await axios.post("http://localhost:8000/signup",{
                email,password
            })
            .then(res=>{
                // eslint-disable-next-line
                 if(res.data=="exist"){
                  alert("user  exist")
                 }
                 // eslint-disable-next-line
                 else if(res.data=="notexist"){
                    history("/home",{state:{id:email}})
                 }
              })
              .catch(e=>{
                 alert("wrong details")
                 console.log(e)
              })
        } catch (error) {
            console.log(error)
        }
    }
  return (
    <div>
        <h1>Signup</h1>
        <form action="POST">
            <input type="email" placeholder='email'  onChange={(e)=>{setemail(e.target.value)}} />
            <input type="password" placeholder='password' onChange={(e)=>{setpassword(e.target.value)}} />
            <input type='submit' onClick={submit}/>
        </form>
        <br/>
        <Link to="/">Login</Link>
    </div>
  )
}

export default Signup