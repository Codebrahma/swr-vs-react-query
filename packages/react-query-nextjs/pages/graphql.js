import { QueryCache, useQuery } from "react-query";
import { dehydrate } from "react-query/hydration";
import getPosts from "../lib/get-posts-graphql";

export default function GraphQLPage() {
  // Setting the `staleTime` to `Infinity` will ensure that the `query` never goes stale.
  // 👀 https://react-query.tanstack.com/docs/api#querycache

  // Option 1: Prefetching the data ourself and pass it in as `initialData`. In this case, the prop posts should be passed from `getServerSideProps`. Our function should look like: `export default function IndexPage({ posts }) {`
  // 👀 https://react-query.tanstack.com/docs/guides/ssr#prefetch-the-data-yourself-and-pass-it-in-as-initialdata
  // const { status, data, error, isFetching } = useQuery("posts", getPosts, {
  //   initialData: posts,
  //   staleTime: Infinity,
  // });

  // Option 2: Prefetching the query via React Query and use `de/rehydration`
  // 👀 https://react-query.tanstack.com/docs/guides/ssr#prefetch-the-query-via-react-query-and-use-derehydration
  const { status, data, error, isFetching } = useQuery("posts", getPosts, {
    staleTime: Infinity,
  });

  if (status === "loading") {
    return <div>Loading...</div>;
  }

  if (status === "error") {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className="container">
      {data.map((post) => {
        return (
          <div key={post.id} className="post">
            <h2>{post.title}</h2>
            <p>{post.description}</p>
          </div>
        );
      })}
      {isFetching && <span>Updaing data...</span>}
      <style jsx>{`
        .container {
          max-width: 600px;
          margin: 50px auto;
        }

        .post:not(:last-child) {
          margin-bottom: 50px;
        }
      `}</style>
    </div>
  );
}

// Next.js pre-renders a page on each request if async `getServerSideProps` is exported from that page.
// 👀 https://nextjs.org/docs/basic-features/data-fetching#getserversideprops-server-side-rendering
export async function getServerSideProps() {
  // `QueryCache` manages the state, caching, lifecycle and everything related to fetching, revalidating of the queries.
  // 👀 https://react-query.tanstack.com/docs/api#querycache
  const queryCache = new QueryCache();

  // The next line should be uncommented if we want to use Option 1. `posts` will contain all the data that the API endpoint returns.
  // const posts = await getPosts();

  // `prefetchQuery` is an asynchronous function that can fetch and cache a query response before it is needed or rendered with `useQuery`.
  // 👀 https://react-query.tanstack.com/docs/api#querycacheprefetchquery
  await queryCache.prefetchQuery("posts", getPosts);

  return {
    props: {
      // `dehydrate` creates a frozen representation of a `queryCache` that can later be hydrated with `useHydrate`, `hydrate` or `Hydrate`.
      // 👀 https://react-query.tanstack.com/docs/api#hydrationdehydrate
      dehydratedState: dehydrate(queryCache),

      // The next line should be uncommented if we want to use Option 1.
      // posts,
    },
  };
}
