import { request } from "graphql-request";

export default async function getPosts(query) {
  const res = await request("http://localhost:1337/graphql", query);

  return res;
}
