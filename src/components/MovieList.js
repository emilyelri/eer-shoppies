import { useState } from "react";
import { connect } from "react-redux";
import { getMovies } from "../actions";
import NominationsList from './NominationsList';
import Movie from './Movie';

function MovieList(props) {
  const apiKey = '903f735a'
  const [searchQuery, setSearchQuery] = useState(``)
  const [movies, setMovies] = useState([]);
  const [noms, setNoms] = useState([])
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

  const handleNom = (title, e) => {
    e.preventDefault();
    console.log("CLICK")
    if (noms.includes(title)) {
      setNoms(...noms.filter(nom => nom != title))
    }
    else {
      setNoms(...noms, title)
    }
  }

  return (
    <>
      <div className="header">
        <h1>The Shoppies</h1>
      </div>
      <div className="secondary">
        <input type='text' name='search_bar' className="search_bar" onChange={fetchMovies} placeholder="Search..." />
        <NominationsList noms={noms} />
      </div>

      {props.isFetching && <p className="fetching">Fetching...</p>}

      {!response && <p>{props.data.Error}</p>}
      <div className="movie-list">
        {movies.map(movie => (
          <Movie movie={movie} noms={noms} setNoms={setNoms} />
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