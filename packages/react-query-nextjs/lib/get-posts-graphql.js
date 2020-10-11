import { request, gql } from "graphql-request";

export default async function getPosts() {
  const res = await request(
    "http://localhost:1337/graphql",
    gql`
      query {
        posts {
          id
          title
          description
        }
      }
    `
  );

  return res.posts;
}
