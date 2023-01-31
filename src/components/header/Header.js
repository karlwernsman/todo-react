import React from 'react';
import { Button } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import { useUser } from '../../context/UserContext.js';
import { signOut } from '../../services/auth.js';
import './Header.css';

export default function Header() {
  //   const [activeCookie, setActiveCookie] = useState(false);
  const { user, setUser } = useUser();
  const history = useHistory();

  const handleLogout = async () => {
    try {
      await signOut();
      setUser(null);
      history.push('/auth/sign-in');
    } catch (e) {
      console.error(e.message);
    }
  };

  return (
    <header>
      {!user && <h1 className="noUserHeader">Todo List</h1>}
      {user && (
        <div className="headerUserContainer">
          <span>Howdy, {user.email}!</span>

          <Button variant="light" onClick={handleLogout} className="signOutButton">
            Sign out
          </Button>
        </div>
      )}
    </header>
  );
}
