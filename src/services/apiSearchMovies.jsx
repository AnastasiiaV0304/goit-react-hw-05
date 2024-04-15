import axios from "axios";

export const fetchSearchMovies = async (query) => {
  const options = {
    url: "https://api.themoviedb.org/3/search/movie",
    params: { query },
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkNDg2YzRhMTMyMGJkOTUwNjJiZDJmNmNiYzI1M2RhZCIsInN1YiI6IjY2MWI5ZDEwZGJhZDUwMDE3YjQzNTY0NCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.-QcA2HvKLFna17cj9qhuy3fQC3xZHC-_Z2sCro0Rrns",
    },
  };

  const { data } = await axios.get(
    "https://api.themoviedb.org/3/search/movie",
    options
  );
  return data;
};
