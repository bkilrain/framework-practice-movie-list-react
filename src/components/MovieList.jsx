
var MovieList = (props) => {
  if (props.movies.length === 0) {
    return (
      <h3 className="noMovies">No Movies Found!</h3>
    );
  } else {
    return (
      <div className="movie-list">
        {props.movies.map((movie, index) => {
          return <Movie movie={movie} key={index} />
        })}
      </div>
    );
  }
}

MovieList.propTypes = {
  movies: React.PropTypes.array.isRequired
};

window.MovieList = MovieList;