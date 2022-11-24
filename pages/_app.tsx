// Imports
import "../styles/globals.css";
import type { AppProps } from "next/app";

// Functions
function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

// Exports
export default MyApp;
