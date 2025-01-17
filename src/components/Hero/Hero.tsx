import styles from './Hero.module.css';
import Icon from '@/helpers/Icon';
export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.header_wrap}>
        <h1 className={styles.header}>
          Mustage Team <span>- all Services</span>
        </h1>
        <div className={styles.header_icon}>
          <Icon name="icon-hero-box" width={38} height={38} />
        </div>
      </div>
      <p className={styles.text}>
        Все что тебе нужно для запуска эффективных рекламных кампаний
      </p>
      <div className={styles.back}></div>
      <div className={styles.button_wrap}>
        <button className={styles.button} type="button">
          <span className={styles.button_text}>Telegram канал</span>
          <Icon name="icon-tg" width={24} height={24} />
        </button>
        <button className={styles.button_support} type="button">
          <span className={styles.button_text_support}>Support</span>
          <Icon name="icon-arrow-right" width={20} height={20} />
        </button>
      </div>
      <div className={styles.support_box}>
        <h3 className={styles.support_title}>Ищете помощь?</h3>
        <div className={styles.support_arrow}>
          <Icon name="icon-arrow-hero-mob" width={100} height={60} />
        </div>
        <p className={styles.support_text}>
          Наш саппорт всегда на связи, чтобы помочь вам с любыми вопросами по
          арбитражу трафика и нашим продуктам.
        </p>
        <div className={styles.support_icon}>
          <Icon name="icon-customer" width={32} height={32} />
        </div>
      </div>
      <div className={styles.marquee_wrap}>
        <div className={styles.marquee}>
          {[...Array(10)].map((_, index) => (
            <div key={index} className={styles.text_wrap}>
              <span className={styles.hero_link}>Mustage Team</span>
            </div>
          ))}
        </div>
        <div aria-hidden="true" className={styles.marquee}>
          {[...Array(10)].map((_, index) => (
            <div key={index} className={styles.text_wrap}>
              <span className={styles.hero_link}>Mustage Team</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
