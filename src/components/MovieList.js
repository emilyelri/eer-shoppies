import { useState } from "react";
import { connect } from "react-redux";
import { getMovies, updateNoms } from "../actions";
import NominationsList from './NominationsList';
import Movie from './Movie';
import Done from './Done';

function MovieList(props) {
  const apiKey = '903f735a'
  const [searchQuery, setSearchQuery] = useState(``)
  const [movies, setMovies] = useState([]);
  const [response, setResponse] = useState(false);
  const api = `http://www.omdbapi.com/?apiKey=${apiKey}&s=${searchQuery}&type=movie`;

  const fetchMovies = e => {
    e.preventDefault();
    setSearchQuery(e.target.value);

    props.getMovies(api);

    if (props.data.Response == "False") {
      setResponse(false)
      setMovies([]);
    } else if (props.data.Response == "True") {
      setResponse(true)
      setMovies(props.data.Search)
    }
  };

  return (
    <>
      <div className="header">
        <h1>The Shoppies Nominations!</h1>
      </div>
      <div className="secondary">
        <input type='text' name='search_bar' className="search_bar" onChange={fetchMovies} placeholder="Search..." />
        {props.nominations.length > 4 && <Done />}
      </div>

      {props.isFetching && <p className="fetching">Fetching...</p>}

      {!response && <p>{props.data.Error}</p>}
      <div className="movie-list">
        <NominationsList />
        {movies.map(movie => (
          <Movie movie={movie} />
        ))}
      </div>
    </>
  );
}

const mapStateToProps = state => ({
  data: state.data,
  nominations: state.nominations,
  error: state.error,
  isFetching: state.isFetching
});

export default connect(
  mapStateToProps,
  { getMovies, updateNoms }
)(MovieList);