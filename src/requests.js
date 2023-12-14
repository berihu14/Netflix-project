
const API_KEY = "fbdfa00b73bff51968efcb2b37cce805";

const requests = {
  fetchTrending: `/trending/movie/day?api_key=${API_KEY}`,
  fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}`,
  fetchTopRatedMovies: `/movie/top_rated?api_key=${API_KEY}`,
  fetchActionMovies: `/discover/movie?api_key=${API_KEY}`,
  fetchComedyMovies: `/discover/movie?api_key=${API_KEY}`,
  fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}`,
  fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}`,
  fetchDocumentaries: `/discover/movie?api_key=${API_KEY}`,
};
export default requests;