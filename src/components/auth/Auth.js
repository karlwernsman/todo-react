import React, { useState } from 'react';
import { NavLink, Redirect, useParams } from 'react-router-dom';
import { useUser } from '../../context/UserContext.js';
import { authUser } from '../../services/auth.js';
import './Auth.css';

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
    <div className="authContainer">
      <div className="container">
        <div className="navContainer">
          <NavLink to="/auth/sign-in" className="navLink signIn">
            Sign In
          </NavLink>
          <NavLink to="/auth/sign-up" className="navLink signOut">
            Sign Up
          </NavLink>
        </div>
        <div className="signInContainer">
          <div className="emailContainer">
            <label>Email</label>
            <input
              type="email"
              placeholder="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="loginInput"
            />
          </div>
          <div className="emailContainer">
            <label>Password</label>
            <input
              type="password"
              placeholder="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="loginInput"
            />
          </div>
        </div>
        <button onClick={submitAuth} className="submitButton">
          Submit
        </button>
      </div>
    </div>
  );
}
