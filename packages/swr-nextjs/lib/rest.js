import axios from "axios";

export default async function rest(url) {
  const res = await axios.get(`http://localhost:1337/${url}`);

  return res.data;
}
