import Head from 'next/head';
import { ReactNode } from 'react';
import styles from '../styles/layout.module.css';

interface LayoutProps {
  children: ReactNode;
}

export default function Layout(props: LayoutProps) {
  return (
    <>
      <Head>
        <title>Layouts Example</title>
      </Head>
      <main className={styles.main}>{props.children}</main>
    </>
  );
}
