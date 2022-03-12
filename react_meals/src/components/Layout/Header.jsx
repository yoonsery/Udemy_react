import React from 'react';
import mealsImage from '../../assets/sara-dubler_unsplash.jpg';
import styles from './Header.module.css';

function Header() {
  return (
    <>
      <header className={styles.header}>
        <h1>React Meals</h1>
        <button>Cart</button>
      </header>
      <div className={styles['main-image']}>
        <img src={mealsImage} alt="vegetables and breaded dishes" />
      </div>
    </>
  );
}

export default Header;
