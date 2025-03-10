import axios from "axios";

axios.defaults.baseURL = "https://api.unsplash.com";
const ACCESS_KEY = "CsnZC6iDREDcbuTh4iQqWtSf3G17-LbcXKiKgl4pnkk";

export default async function fetchImages(query, page) {
  const response = await axios.get("/search/photos", {
    params: {
      query,
      client_id: ACCESS_KEY,
      page,
      per_page: 12,
    },
  });
  return response.data.results;
}
