'use client';

import Link from 'next/link';
import styles from './Header.module.css';
import Icon from '@/helpers/Icon';
import MobMenu from '../MobMenu/MobMenu';
import { useState } from 'react';
import { menuItems } from '@/data/data';
import { sendToGoogleScript } from '@/api/sendData';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => {
    setIsMenuOpen(false);
    document.body.style.overflow = 'auto';
    document.body.style.touchAction = 'auto';
  };
  const openMenu = () => {
    setIsMenuOpen(true);
    document.body.style.overflow = 'hidden';
    document.body.style.touchAction = 'none';
  };
  return (
    <>
      <header
        className={`${styles.header} ${isMenuOpen && styles.mobile_menu_open}`}
      >
        <Link className={styles.logo_wrap} href={`/`}>
          <Icon name="icon-logo" width={40} height={33} />
          <span className={styles.logo_text}>MUSTAGE</span>
        </Link>

        <nav className={styles.nav}>
          <ul className={styles.nav_list}>
            {menuItems.map((item, index) => (
              <li key={index} className={styles.nav_item}>
                <Link className={styles.nav_link} href={item.href}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <button
          type="button"
          onClick={e => {
            e.preventDefault();
            sendToGoogleScript('https://t.me/mustage_channel');
          }}
          className={styles.button}
        >
          Бесплатное обучение арбитражу трафика
        </button>
        <div
          className={`${styles.burger_wrap} ${
            isMenuOpen ? styles.burger_open : ''
          }`}
          onClick={isMenuOpen ? closeMenu : openMenu}
        >
          <span className={styles.line}></span>
          <span className={styles.line}></span>
          <span className={styles.line}></span>
        </div>
      </header>
      <MobMenu isMenuOpen={isMenuOpen} closeMenu={closeMenu} />
    </>
  );
}
