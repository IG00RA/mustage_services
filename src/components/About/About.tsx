import styles from './About.module.css';
// import { aboutItems } from '@/data/data';
import Icon from '@/helpers/Icon';

export default function About() {
  return (
    <section id="about" className={styles.about}>
      <div className={styles.imgWrap}></div>
      <div className={styles.wrapper}>
        <h2 className={styles.header}>om je tento súbor?</h2>
        <p className={styles.text}>Fascinujúca interaktívna hra - rozprávka</p>
        {/* <ul className={styles.list}>
          {aboutItems.map((item, index) => (
            <li key={index}>
              <div className={styles.iconWrap}>
                <Icon name="icon-arrow_r" width={16} height={16} />
              </div>
              <p className={styles.par}>{item}</p>
            </li>
          ))}
        </ul> */}
      </div>
    </section>
  );
}
