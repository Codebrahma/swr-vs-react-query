import useSWR from "swr";
import rest from "../lib/rest";

export default function RestPage(props) {
  const { data } = useSWR("posts", { initialData: props.posts });

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
    </div>
  );
}

// Next.js pre-renders a page on each request if async `getServerSideProps` is exported from that page.
// 👀 https://nextjs.org/docs/basic-features/data-fetching#getserversideprops-server-side-rendering
export async function getServerSideProps() {
  const posts = await rest("posts");

  return { props: { posts } };
}
