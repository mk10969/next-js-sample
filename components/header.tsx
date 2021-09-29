import Image from 'next/image';
import vercel from '../public/vercel.svg';
import styles from '../styles/header.module.scss';

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.header__logo}>
        <Image src={vercel} alt='' width='38' height='38' />
        <h1 className={styles.header__title}>Next Js Sample Component</h1>
      </div>
      <a
        className='header__summary snipcart-checkout snipcart-summary'
        href='#'
        style={{ textDecoration: 'none' }}
      ></a>
    </header>
  );
}
