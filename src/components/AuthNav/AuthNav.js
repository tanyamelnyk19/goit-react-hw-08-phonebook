import React from 'react';
import { NavLink } from 'react-router-dom';

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

export default function AuthNav() {
  return (
    <div>
      <NavLink
        to="/register"
        style={(navData) => navData.isActive ? styles.activeLink : styles.link}
      >
        Registration
      </NavLink>
      <NavLink
        to="/login"
        style={(navData) => navData.isActive ? styles.activeLink : styles.link}
      >
        Login
      </NavLink>
    </div>
  );
}