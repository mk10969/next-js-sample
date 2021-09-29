import Layout from '../components/layout';
import Sidebar from '../components/sidebar';
import UiComponents from '../components/uiComponents';

export default function Graph() {
  const add = (count: number) => {};

  return (
    <Layout>
      <Sidebar />
      <UiComponents label='a' onUpdated={add} />
    </Layout>
  );
}
