// 👀 https://react-query.tanstack.com/docs/api#reactquerycacheprovider
import { ReactQueryCacheProvider, QueryCache } from "react-query";
// 👀 https://react-query.tanstack.com/docs/api#hydrationhydrate-1
import { Hydrate } from "react-query/hydration";
import { Navbar } from "@apps/components";

import "../assets/styles.css";
import "@apps/components/dist/index.css";

// 👀 https://react-query.tanstack.com/docs/api#querycache
const queryCache = new QueryCache();

export default function App({ Component, pageProps }) {
  return (
    <ReactQueryCacheProvider queryCache={queryCache}>
      <Hydrate state={pageProps.dehydratedState}>
        <Navbar />
        <Component {...pageProps} />
      </Hydrate>
    </ReactQueryCacheProvider>
  );
}
