import styles from './Reasons.module.css';
import Image from 'next/image';
import { reasonsItems } from '@/data/data';
export default function Reasons() {
  return (
    <section id="reasons" className={styles.reasons}>
      <div className={styles.container}>
        <h2 className={styles.header}>4 dôvody, pre</h2>

        <ul className={styles.list}>
          {reasonsItems.map((item, index) => (
            <li key={index}>
              <h3 className={styles.parHead}>{item.head}</h3>
              <div className={styles.reasonsImg}>
                <Image
                  src={item.img}
                  width={0}
                  height={0}
                  sizes="100vw"
                  alt="Deti v savane"
                  priority
                ></Image>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
