'use client';

import styles from './Footer.module.css';
import { footerItems } from '@/data/data';
import Icon from '@/helpers/Icon';
import Image from 'next/image';
import mail from '../../img/footer/mail.webp';
import { sendToGoogleScript } from '@/api/sendData';

export default function Footer() {
  return (
    <ul className={styles.list}>
      <div className={styles.column}>
        {footerItems.slice(0, 3).map((item, index) => (
          <li key={index} className={styles.item}>
            <Image
              src={item.icon}
              width={0}
              height={0}
              sizes="100vw"
              alt={`${item.header} logo`}
              className={styles.img}
              priority
            />

            <h3 className={styles.item_header}>{item.header}</h3>
            {item.text.split('\n').map((line, index) => (
              <p className={styles.item_text} key={index}>
                {line}
              </p>
            ))}
            <button
              type="button"
              onClick={e => {
                e.preventDefault();
                sendToGoogleScript(item.link);
              }}
              className={styles.item_link}
            >
              <Icon name="icon-arrow-right" width={24} height={24} />
            </button>
          </li>
        ))}
      </div>
      <div className={styles.column}>
        {footerItems.slice(3, 4).map((item, index) => (
          <li key={index} className={styles.item}>
            <Image
              src={item.icon}
              width={0}
              height={0}
              sizes="100vw"
              alt={`${item.header} logo`}
              className={styles.img}
              priority
            />

            <h3 className={styles.item_header}>{item.header}</h3>
            {item.text.split('\n').map((line, index) => (
              <p className={styles.item_text} key={index}>
                {line}
              </p>
            ))}
            <button
              type="button"
              onClick={e => {
                e.preventDefault();
                sendToGoogleScript(item.link);
              }}
              className={styles.item_link}
            >
              <Icon name="icon-arrow-right" width={24} height={24} />
            </button>
          </li>
        ))}
        <li className={styles.item_mail}>
          <Image
            src={mail}
            width={0}
            height={0}
            sizes="100vw"
            alt={`Mail logo`}
            className={styles.img}
            priority
          />
          <h3 className={styles.mail_header}>
            Кнопка для комерческих предложений
          </h3>
          <ul className={styles.mail_list}>
            <li className={styles.mail_list_item}>
              <p className={styles.mail_text}>
                Индивидуальные заливы на ваш оффер
              </p>
            </li>
            <li className={styles.mail_list_item}>
              <p className={styles.mail_text}>Реклама в паблике</p>
            </li>
            <li className={styles.mail_list_item}>
              <p className={styles.mail_text}>
                Опт расходников/ и индивидуальные условия для команд
              </p>
            </li>
          </ul>
          <a className={styles.mail_link} href="mailto:support@mustage.io">
            <Icon name="icon-arrow-right" width={24} height={24} />
          </a>
        </li>
      </div>
    </ul>
  );
}
