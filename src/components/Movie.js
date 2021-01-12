import { useState } from 'react';
import { connect } from "react-redux";
import { updateNoms } from "../actions";

function Movie(props) {
    const movie = props.movie;
    const [nominated, setNominated] = useState(false)

    const handleNominate = e => {
        e.preventDefault();
        setNominated(!nominated);
        props.updateNoms(movie.Title, props.nominations)
    }

    return (
        <div className={nominated ? "nominated movie" : "movie"}>
            {movie.Poster != "N/A" && <img className="poster" src={movie.Poster} />}
            <div className="info-card">
                <p>{movie.Title}</p>
                <p>{movie.Year}</p>
                <button onClick={handleNominate} disabled={props.nominations.length > 4 && !nominated}>{nominated ? "Remove" : "Nominate"}</button>
            </div>
        </div>
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
    { updateNoms }
  )(Movie);