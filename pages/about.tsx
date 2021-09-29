import Layout from '../components/layout';
import Sidebar from '../components/sidebar';

export default function About() {
  return (
    <Layout>
      <Sidebar />
      <section>
        <h2>Layout Example (About)</h2>
        <p>
          When navigating between pages, we want to persist page state (input values, scroll
          position, etc) for a Single-Page Application (SPA) experience.
        </p>
        <p>
          This layout pattern will allow for state persistence because the React component tree is
          persisted between page transitions. To preserve state, we need to prevent the React
          component tree from being discarded between page transitions.
        </p>
      </section>
    </Layout>
  );
}
