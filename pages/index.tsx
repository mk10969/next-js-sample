import ApplianceList from '../components/content';
// import GridContent from '../components/grid-layout/content';
// import { GetStaticProps } from 'next';
import { Appliance } from '../components/appliance';

interface HomeProps {
  appliances: Appliance[];
}

export default function Home(_props: HomeProps): JSX.Element {
  return (
    <>
      {/* <ApplianceList />
      <hr /> */}

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
