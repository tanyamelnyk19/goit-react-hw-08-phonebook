import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { authSelectors } from 'redux/auth';

const styles = {
  link: {
    display: 'inline-block',
    textDecoration: 'none',
    padding: 12,
    fontSize: 24,
    fontWeight: 700,
    color: '#2A363B',
  },
  activeLink: {
    fontSize: 24,
    color: '#0d6efd',
  },
};

const Navigation = () => {
  const isLoggedIn = useSelector(authSelectors.getIsLoggedIn);

  return (
    <nav>
      <NavLink 
        to="/"  
        style={(navData) => navData.isActive ? styles.activeLink : styles.link}
      >
        Home
      </NavLink>

      {isLoggedIn && (
        <NavLink
          to="/contacts"
          style={(navData) => navData.isActive ? styles.activeLink : styles.link}
        >
          Contacts
        </NavLink>
      )}
    </nav>
  )
};

export default Navigation;