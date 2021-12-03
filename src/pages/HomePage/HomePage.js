import React from 'react';
import './HomePage.css';

const styles = {
  container: {
    minHeight: 'calc(100vh - 50px)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontWeight: 500,
    fontSize: 48,
    textAlign: 'center',
  },
};

const HomePage = () => (
  <div style={styles.container} className="home-page">
    <h1 style={styles.title} className="funny-title section-title">
      Welcome to our Phonebook service!
    </h1>
  </div>
);

export default HomePage;