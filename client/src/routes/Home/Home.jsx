import { useState } from "react";
// TODO: uppdate to work with my project

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [filteredMovies, setFilteredMovies] = useState([]);

  useState(() => {
    fetch("/api/movies")
      .then((resp) => resp.json())
      .then((data) => {
        setMovies(data);
        setFilteredMovies(data);
    });
  });

  const handleGenreChange = (event) => {

    const value = event.target.value;

    if (value == "All") {
        setFilteredMovies(movies);
    } else {
        const newFilteredMovies = movies.filter(x => x.genre == value);
        setFilteredMovies(newFilteredMovies);
    }
  }

  return (
    <>
      <div>
        <select onChange={handleGenreChange}>
          <option value="All">Alla genres</option>
          <option value="Drama">Drama</option>
          <option value="Action">Action</option>
          <option value="Comedy">Komedi</option>
          <option value="Crime">Deckare</option>
          <option value="Sci-Fi">Sci-fi</option>
          <option value="Romance">Romans</option>
        </select>
      </div>
      <MovieGrid movies={filteredMovies} />
    </>
  );
};

export default Home;
