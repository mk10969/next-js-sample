import Link from 'next/link';
import React from 'react';
import Footer from '../components/footer';
import Header from '../components/header';
// import WasmComponent from '../components/wasmSample';

const TIMEOUT = 400;

export default function Home(): JSX.Element {
  return (
    <div className='app'>
      <Header />
      <nav>
        <style jsx>{`
          a {
            margin: 0 10px 0 0;
          }
        `}</style>
        <Link href='/'>
          <a>Home</a>
        </Link>
        <Link href='/about'>
          <a>About</a>
        </Link>
        <Link href='/next-js'>
          <a>Next.Js</a>
        </Link>
        <Link href='/counter'>
          <a>counter</a>
        </Link>
        <Link href='/graph'>
          <a>graph</a>
        </Link>
        <Link href='/table'>
          <a>table</a>
        </Link>
        <Link href='/non-existing'>
          <a> Non Existing Page</a>
        </Link>

        <style jsx global>{`
          .page-transition-enter {
            opacity: 0;
            transform: translate3d(0, 20px, 0);
          }
          .page-transition-enter-active {
            opacity: 1;
            transform: translate3d(0, 0, 0);
            transition: opacity ${TIMEOUT}ms, transform ${TIMEOUT}ms;
          }
          .page-transition-exit {
            opacity: 1;
          }
          .page-transition-exit-active {
            opacity: 0;
            transition: opacity ${TIMEOUT}ms;
          }
          .loading-indicator-appear,
          .loading-indicator-enter {
            opacity: 0;
          }
          .loading-indicator-appear-active,
          .loading-indicator-enter-active {
            opacity: 1;
            transition: opacity ${TIMEOUT}ms;
          }
        `}</style>
      </nav>

      <Footer />
    </div>
  );
}
