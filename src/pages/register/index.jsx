import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import axios from 'axios';

const Register = () => {
  const {register, unregister, handleSubmit, setValue, errors} = useForm();
  const [passwordConfirmation, setPasswordConfirmation] = useState("");

  const submitForm = (data) => {
    let user = {}
    console.log(data)
    if(data.password === data.password_confirmation){
      user = {...data}
      console.log(user)
    } else {
      setPasswordConfirmation("Password confirmation does not match with password")
    }
    
    axios.post("https://ka-users-api.herokuapp.com/users",{user})
    .then((res) => {
      console.log(res)
    })
  }

  useEffect(() => {
    register("name", {required: "Name cannot be blank"});
    register("user", {required: "User cannot be blank"});
    register("email", {required: "E-mail cannot be blank",
      pattern: {value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
        message: "Invalid e-mail format"}});
    register("password", {required: "Password cannot be blank",
      pattern: {value: /^(?=.*\d)(?=.*[A-Z0-9])(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]).{6,}$/i,
        message: "Password must be at least 6 characters, at least one number and at least one special character"}});
    register("password_confirmation", {required: "Please confirm your password",
      pattern: {value: /^(?=.*\d)(?=.*[A-Z0-9])(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]).{6,}$/i,
        message: "Password confirmation does not match with password"}});
    return () => {
      unregister("name")
      unregister("user")
      unregister("email")
      unregister("password")
      unregister("password_confirmation")
    }
  }, [register, unregister])

  return (
    <>
    <h4>Create your account</h4>
    <form onSubmit={handleSubmit(submitForm)}>
      <div>
        <label>Name</label>
      </div>
        <input onChange={(e) => setValue("name", e.target.value)}/>
      <div>
        <label>User</label>
      </div>
      <input onChange={(e) => setValue("user", e.target.value)} />
      <div>
        <label>E-mail</label>
      </div>
      <input onChange={(e) => setValue("email", e.target.value)} />
      <div>
        <label>Password</label>
      </div>
      <input onChange={(e) => setValue("password", e.target.value)} type="password" />
      <div>
        <label>Password Confirmation</label>
      </div>
      <input onChange={(e) => setValue("password_confirmation", e.target.value)} type="password"/>
      <div>
        <button type="submit">Submit</button>
      </div>
    </form>
    {errors.name && <p>{errors.name.message}</p>}
    {errors.user && <p>{errors.user.message}</p>}
    {errors.email && <p>{errors.email.message}</p>}
    {errors.password && <p>{errors.password.message}</p>}
    {passwordConfirmation}
    </>
  )
}

export default Register;