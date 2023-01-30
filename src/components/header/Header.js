import React from 'react';
import { Redirect } from 'react-router-dom';
import { useUser } from '../../context/UserContext.js';
import { signOut } from '../../services/auth.js';

export default function Header() {
  //   const [activeCookie, setActiveCookie] = useState(false);
  const { user, setUser } = useUser();

  const handleLogout = async () => {
    try {
      await signOut();
      setUser(null);
    } catch (e) {
      console.error(e.message);
    }
  };

  return (
    <div>
      {!user && <Redirect to="/auth/sign-in" />}
      {user && (
        <div>
          <p>Howdy, {user.email}!</p>
          <button onClick={handleLogout}>Sign out</button>
        </div>
      )}
    </div>
  );
}
