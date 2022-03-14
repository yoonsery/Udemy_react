import React from 'react';
import mealsImage from '../../assets/sara-dubler_unsplash.jpg';
import styles from './Header.module.css';
import HeaderCartButton from './HeaderCartButton';

function Header(props) {
  return (
    <>
      <header className={styles.header}>
        <h1>React Meals</h1>
        <HeaderCartButton onClick={props.onShowCart} />
      </header>
      <div className={styles['main-image']}>
        <img src={mealsImage} alt="vegetables and breaded dishes" />
      </div>
    </>
  );
}

export default Header;
