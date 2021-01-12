import { useState } from "react";
import { connect } from "react-redux";
import { getMovies } from "../actions";
import Movie from './Movie';

function MovieList(props) {
  const apiKey = '903f735a'
  const [searchQuery, setSearchQuery] = useState(``)
  const [movies, setMovies] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');
  const [response, setResponse] = useState(false);
  const api = `http://www.omdbapi.com/?apiKey=${apiKey}&s=${searchQuery}`;

  const fetchMovies = e => {
    e.preventDefault();
    setSearchQuery(e.target.value);

    props.getMovies(api);

    if (props.data.Response == "False") {
      setResponse(false)
      setMovies([]);
      setErrorMessage(props.data.error);
    } else if (props.data.Response == "True") {
      setResponse(true)
      setMovies(props.data.Search)
      setErrorMessage(undefined);
    }
  };

  return (
    <>
      <div className="header">
        <h1>The Shoppies</h1>
      </div>
      <input type='text' name='search_bar' className="search_bar" onChange={fetchMovies} placeholder="Search..." />

      {props.isFetching && <p className="fetching">Fetching...</p>}

      {!response && <p>{props.data.Error}</p>}
      <div className="movie-list">
        {movies.map(movie => (
          <Movie movie={movie} />
        ))}
      </div>
    </>
  );
}

const mapStateToProps = state => ({
  data: state.data,
  error: state.error,
  isFetching: state.isFetching
});

export default connect(
  mapStateToProps,
  { getMovies }
)(MovieList);