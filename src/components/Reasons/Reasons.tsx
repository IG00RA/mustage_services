import styles from './Reasons.module.css';
import Image from 'next/image';
import { reasonsItems } from '@/data/data';
import Icon from '@/helpers/Icon';
export default function Reasons() {
  return (
    <section id="reasons" className={styles.reasons}>
      <ul className={styles.list}>
        {reasonsItems.map((item, index) => (
          <li className={styles.item} key={index}>
            <Image
              src={item.img}
              width={0}
              height={0}
              sizes="100vw"
              alt={item.head}
              className={styles.image}
              priority
            ></Image>
            <div className={styles.par}>
              <h3 className={styles.par_head}>{item.head}</h3>
              <p className={styles.par_text}>{item.text.first}</p>
              <p className={styles.par_text_second}>{item.text.second}</p>
            </div>
            <div className={styles.button_wrap}>
              <button className={styles.button} type="button">
                <span className={styles.button_text}>{item.btn.first}</span>
                <Icon name="icon-arrow-right" width={24} height={24} />
              </button>
              {item.btn.second && (
                <button className={styles.button_support} type="button">
                  <span className={styles.button_text_support}>
                    {item.btn.second}
                  </span>
                  <Icon name="icon-arrow-right" width={24} height={24} />
                </button>
              )}
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
