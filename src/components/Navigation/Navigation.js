import React from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { authSelectors } from 'redux/auth';

const styles = {
  link: {
    display: 'inline-block',
    textDecoration: 'none',
    padding: 12,
    fontWeight: 700,
    color: '#2A363B',
  },
  activeLink: {
    color: '#E84A5F',
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
        Главная
      </NavLink>

      {isLoggedIn && (
        <NavLink
          to="/contacts"
          style={(navData) => navData.isActive ? styles.activeLink : styles.link}
        >
          Контакты
        </NavLink>
      )}
    </nav>
  )
};

export default Navigation;