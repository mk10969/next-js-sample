import ApplianceList from '../components/content';
import Sum from '../components/wasmSample';

// import GridContent from '../components/grid-layout/content';
// import { GetStaticProps } from 'next';

export default function Home(): JSX.Element {
  return (
    <>
      {/* <ApplianceList />
      <hr /> */}

      <Sum />
      <ApplianceList />
    </>
  );
}

// export const getStaticProps: GetStaticProps = async () => {
//   return {
//     props: {
//       appliances,
//     },
//   };
// };
