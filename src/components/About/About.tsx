import styles from './About.module.css';
import Icon from '@/helpers/Icon';
import clock from '../../img/about/clock.webp';
import video from '../../img/about/video.webp';
import Image from 'next/image';
import Footer from '../Footer/Footer';

export default function About() {
  return (
    <section id="about" className={styles.about}>
      <div className={styles.container}>
        <div className={styles.header_wrap}>
          <Icon name="icon-logo" width={96} height={80} />
          <h2 className={styles.header}>Кто мы такие?</h2>
        </div>
        <h3 className={styles.text_header}>
          Mustage Team
          <span className={styles.separator}>/ или /</span>
          команда Усатого Арбитражника
        </h3>
        <div className={styles.main_text_wrap}>
          <div className={styles.text_wrap}>
            <p className={styles.text_image}>
              Мы варимся в арбитраже трафика - <span>БОЛЕЕ четырех лет.</span>
            </p>
            <Image
              src={clock}
              width={0}
              height={0}
              sizes="100vw"
              alt="Clock logo"
              className={styles.clock_icon}
              priority
            ></Image>
          </div>
          <p className={styles.text}>
            На старте наша команда насчитывала всего три человека, а сейчас у
            нас
            <span> более 8 отдельных продуктов</span> под одной крышей, в
            которые входят как публичные так и закрытые продукты, с некоторыми
            из них вы уже могли ознакомится на нашем сайте
          </p>
          <p className={styles.text}>
            За время нашей работы мы протестировали огромное количество путей,
            решений и инструментов, нашли сотни лайфхаков , миллион раз упали в
            лужу за вас,{' '}
            <span>
              вывели свою формулу успеха в нише, и готовы поделится ей с вами!
            </span>
          </p>
        </div>
        <div className={styles.text_footer_wrap}>
          <Image
            src={video}
            width={0}
            height={0}
            sizes="100vw"
            alt="Video logo"
            className={styles.video_icon}
            priority
          ></Image>
          <p className={styles.text}>
            Ведем свой
            <span> авторский канал на YouTube – Усатый арбитражник, </span>где
            уже
            <span> 17,7 тысяч подписчиков и более 70 видео </span>с ценными
            гайдами и небанальными советами из нашего опыта! И мы не будем
            останавливаться на этом, вас ожидает еще больше обучающего,
            познавательного, и развлекательного контента, сервисов для успешного
            залива, а так же активностей внутри нашего комьюнити!
          </p>
        </div>
        <div className={styles.footer_box}>
          <p className={styles.footer_box_text}>
            Мы создаем <span>новую экосистему</span> <br /> в мире арбитража
            трафика
          </p>
          <button className={styles.button} type="button">
            <span className={styles.button_text}>ЗАЛЕТАЙ К НАМ</span>
            <Icon name="icon-rocket" width={24} height={24} />
          </button>
        </div>
        <Footer />
      </div>
    </section>
  );
}
