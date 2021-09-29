import { GetStaticProps } from 'next';
import ApplianceList from '../components/content';
import GridContent from '../components/grid-layout/content';
import WasmComponent from '../components/wasmSample';

export default function Home(): JSX.Element {
  return (
    <>
      {/* <WasmComponent /> */}
      <GridContent />
      {/* <ApplianceList /> */}
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
