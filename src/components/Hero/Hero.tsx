import styles from './Hero.module.css';
import Button from '../Button/Button';
export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <p className={styles.text}>FlexiFun - divoká príroda savany</p>
          <h1 className={styles.header}>Objavte</h1>
          <div className={styles.heroImg}></div>
          <p className={styles.par}>Vzdelávacia</p>
          <div className={styles.buttonWrap}>
            <div className={styles.priceWrap}>
              <span className={styles.styledPrice}>65€</span>
              <span className={styles.styledPriceSecond}>20€</span>
            </div>
            <Button>Dajte die</Button>
          </div>
        </div>
      </div>
    </section>
  );
}
