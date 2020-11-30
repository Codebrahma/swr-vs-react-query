import { Navbar } from "@apps/components";
import { SWRConfig } from "swr";
import rest from "../lib/rest";

import "@apps/components/dist/index.css";
import "../assets/styles.css";

export default function App({ Component, pageProps }) {
  return (
    <SWRConfig
      value={{
        fetcher: rest,
      }}
    >
      <Navbar />
      <Component {...pageProps} />
    </SWRConfig>
  );
}
