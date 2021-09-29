import styles from '../styles/footer.module.scss';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <p>
        Next.js app with a&nbsp;
        <a href='https://qiita.com/masakinihirota/items/39888f37000f0d17111b'>Sample code list</a>
        &nbsp;- click here!
      </p>
      <div className={styles.footer__left}>
        <a href='https://github.com/vercel/next.js'>Github</a>
      </div>
    </footer>
  );
}
