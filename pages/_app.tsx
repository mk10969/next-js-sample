import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import { AppProps } from 'next/dist/shared/lib/router/router';
// using grid layout
import 'react-grid-layout/css/styles.css';
import 'react-resizable/css/styles.css';
import '../styles/global_styles.scss';

// client instance
const client = new ApolloClient({
  uri: `${process.env.NEXT_PUBLIC_BACKEND_URL}/graphgl`,
  cache: new InMemoryCache(),
});

export default function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <ApolloProvider client={client}>
      <Component {...pageProps} />
    </ApolloProvider>
  );
}
