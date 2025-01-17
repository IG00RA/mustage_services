import Icon from '@/helpers/Icon';
import styles from './Footer.module.css';
import { footerItems } from '@/data/data';

export default function Footer() {
  return (
    <section id="footer" className={styles.footer}>
      <div className={styles.container}>
        <h3 className={styles.header}>'Footer.title</h3>

        <ul className={styles.list}>
          {footerItems.map((item, index) => (
            <li key={index}>
              <a
                className={styles.item}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                <p>{item.text}</p>
                <Icon name={item.icon} width={40} height={40} />
              </a>
            </li>
          ))}
        </ul>
        <div className={styles.email_wrap}>
          <a href="mailto:support@mustage.io">support@mustage.io</a>
          <div className={styles.email_icon_wrap}>
            <Icon name="icon-email" width={32} height={32} />
          </div>
        </div>
      </div>

      <div className={styles.marquee_wrap}>
        <div className={styles.marquee}>
          {[...Array(10)].map((_, index) => (
            <div key={index} className={styles.text_wrap}>
              <span className={styles.link}>mustage.team</span>
              <span className={styles.link}>/</span>
            </div>
          ))}
        </div>
        <div aria-hidden="true" className={styles.marquee}>
          {[...Array(10)].map((_, index) => (
            <div key={index} className={styles.text_wrap}>
              <span className={styles.link}>mustage.team</span>
              <span className={styles.link}>/</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
