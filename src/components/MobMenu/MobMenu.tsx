import { menuItems, socialItems } from '@/data/data';
import styles from './MobMenu.module.css';
import Icon from '@/helpers/Icon';
import Link from 'next/link';
import { sendToGoogleScript } from '@/api/sendData';

type MobMenuProps = {
  isMenuOpen: boolean;
  closeMenu: () => void;
};

export default function MobMenu({ isMenuOpen, closeMenu }: MobMenuProps) {
  return (
    <div
      onClick={closeMenu}
      className={`${styles.mobile_wrap} ${
        isMenuOpen && styles.mobile_menu_open
      }`}
    >
      <div
        className={styles.burger_menu}
        onClick={event => event.stopPropagation()}
      >
        <nav className={styles.nav}>
          <ul>
            {menuItems.map((item, index) => (
              <li
                className={styles.mobile_item}
                key={index}
                onClick={closeMenu}
              >
                <Link className={styles.mobile_link} href={item.href}>
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <ul className={styles.social}>
          {socialItems.map((item, index) => (
            <li className={styles.social_item} key={index}>
              <a
                className={styles.social_link}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Icon name={item.icon} width={40} height={40} />
              </a>
            </li>
          ))}
        </ul>
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
      </div>
    </div>
  );
}
