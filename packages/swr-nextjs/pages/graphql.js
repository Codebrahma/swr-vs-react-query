import useSWR from "swr";
import qraphql from "../lib/graphql";
import { gql } from "graphql-request";

export default function GraphQLPage() {
  const { data, isValidating, error } = useSWR(
    gql`
      query {
        posts {
          id
          title
          description
        }
      }
    `,
    qraphql
  );

  if (isValidating) {
    return <div>Loading...</div>;
  }

  if (!data) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className="container">
      {data.posts.map((post) => {
        return (
          <div key={post.id} className="post">
            <h2>{post.title}</h2>
            <p>{post.description}</p>
          </div>
        );
      })}
      {isValidating && <span>Updaing data...</span>}
    </div>
  );
}
