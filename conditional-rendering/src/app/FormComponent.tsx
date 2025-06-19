import React, { useState } from 'react'

const FormComponent = () => {
  const validAccounts = {
    email: "barrosaur@gmail.com",
    password: "123456"
  }

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [display, setDisplay] = useState('');
  const [loginSuccess, setLoginSuccess] = useState<boolean | null>(null);
                                        // accepts only boolean or null but default is null which means user hasnt logged in yet

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if(email == validAccounts.email && password == validAccounts.password) {
        setLoginSuccess(true)
        setDisplay("Logged in");
    } else {
        setLoginSuccess(false);
        setDisplay("Invalid account!");
    }

    // clears fields after submission
    setEmail('');
    setPassword('');
  }

  return (
    <form onSubmit={handleSubmit}>
        <label htmlFor="email-input">Email</label>
        <input type="email" value={email} id="email-input" onChange={(e) => setEmail(e.target.value)}/>

        <label htmlFor="password-input">Password</label>
        <input type="password" value={password} id="password-input" onChange={(e) => setPassword(e.target.value)} />

        <button type="submit">Log in</button>

        {loginSuccess != null && (
            <h2 className={loginSuccess ? 'logged-in' : 'invalid'}>{display}</h2>
        )}

    </form>
  )
}

export default FormComponent