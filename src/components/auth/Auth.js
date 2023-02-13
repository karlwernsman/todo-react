import React, { useState } from 'react';
import { NavLink, Redirect, useParams } from 'react-router-dom';
import { useUser } from '../../context/UserContext.js';
import { authUser } from '../../services/auth.js';

export default function Auth() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { type } = useParams();
  const { user, setUser } = useUser();

  if (user) {
    return <Redirect to="/todos" />;
  }

  const submitAuth = async () => {
    try {
      const newUser = await authUser(email, password, type);
      setUser(newUser);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div>
      <h2>Todo List</h2>
      <div>
        <NavLink to="/auth/sign-in">Sign In</NavLink>
        <NavLink to="/auth/sign-up">Sign Up</NavLink>
      </div>
      <label>Email</label>
      <input
        type="email"
        placeholder="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <label>Password</label>
      <input
        type="password"
        placeholder="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={submitAuth}>Submit</button>
    </div>
  );
}
