
var MovieList = (props) => (
  <div className="movie-list">
    {props.movies.map((movie, index) => {
      return <Movie movie={movie} key={index} />
    })}
  </div>
);

MovieList.propTypes = {
  movies: React.PropTypes.array.isRequired
};

window.MovieList = MovieList;