import axios from "axios";

export default async function getPosts() {
  const res = await axios.get("http://localhost:1337/posts");

  return res.data;
}
