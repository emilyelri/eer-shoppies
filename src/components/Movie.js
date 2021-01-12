function Movie(props) {
    const movie = props.movie;

    return (
        <div className="movie">
            {movie.Poster != "N/A" && <img className="poster" src={movie.Poster} />}
            <div className="info-card">
                <p>{movie.Title}</p>
                <p>{movie.Year}</p>
            </div>
        </div>
    );
}

export default Movie;