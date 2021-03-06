import React from 'react';
import { Link } from 'react-router-dom';
import LogOutButton from '../LogOutButton/LogOutButton';
import './Nav.css';
import { useSelector } from 'react-redux';

function Nav() {
  const user = useSelector((store) => store.user);

  return (
    <div className="nav">
      <Link to="/home">
        <h2 className="nav-title">At Home Logger</h2>
      </Link>
      <div>
        {/* If no user is logged in, show these links */}
        {!user.id && (
          // If there's no user, show login/registration links
          <Link className="navLink" to="/login">
            Log In / Create Account
          </Link>
        )}

        {/* If a user is logged in, show these links */}
        {user.id && (
          <>
            <Link className="navLink" to="/user">
              Home
            </Link>

            {/* <Link className="navLink" to="/info">
              Info Page
            </Link> */}
            <Link className="navLink" to="/inventory">
              Logger
            </Link>

            <Link className="navLink" to="/add">
              Add
            </Link>    

        <Link className="navLink" to="/about">
          About
        </Link>

        <LogOutButton className="navLink" />
          </>
 )}
      </div>
    </div>
  );
}

export default Nav;
