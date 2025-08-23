import "@/styles/globals.css";
import ErrorBoundary from '@/components/ErrorBoundary';
import type { AppProps } from "next/app";
import { ApolloProvider } from "@apollo/client";
import client from "@/graphql/apolloClient";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
  <ErrorBoundary>
    <ApolloProvider client={client}>
      <Component {...pageProps} />
    </ApolloProvider>
  </ErrorBoundary>
  )
}
