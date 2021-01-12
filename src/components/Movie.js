import { useState } from 'react';

function Movie(props) {
    const movie = props.movie;
    const setNoms = props.setNoms;
    const noms = props.noms;
    const [nominated, setNominated] = useState(false)

    const handleNom = e => {
        nominated ? setNominated(false) : setNominated(true)
        nominated ? setNoms(noms.filter(nom => nom != movie.Title)) : setNoms(...noms, movie.Title)
    }

    return (
        <div className={nominated ? "nominated movie" : "movie"}>
            {movie.Poster != "N/A" && <img className="poster" src={movie.Poster} />}
            <div className="info-card">
                <p>{movie.Title}</p>
                <p>{movie.Year}</p>
                <button onClick={handleNom}>Nominate</button>
            </div>
        </div>
    );
}

export default Movie;