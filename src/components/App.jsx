class App extends React.Component {
  constructor() {
    super();
    this.state = {
      allMovies: [],
      visableMovies: [],
    };
  }

  search(query) {
    if (query === '') {
      this.setState({
        visableMovies: this.state.allMovies
      })
    }
    var pattern = new RegExp(query, 'i');
    var filtered = _.filter(this.state.allMovies ,function(data) {
      return pattern.test(data.Title);
    });
    this.setState({
      visableMovies: filtered
    });
  }

  submitMovie(movieTitle) {
    var newMovie = {
      Title: movieTitle
    };
    var newState = this.state.allMovies.concat(newMovie);
    this.setState({
      allMovies: newState,
      visableMovies: newState
    });
  }

  render() {
    return (
      <div>
        <h1>Movie List!</h1>
        <Add submit={this.submitMovie.bind(this)}/>
        <Search movies={this.state.allMovies} searchFunc={this.search.bind(this)}/>
        <MovieList movies={this.state.visableMovies} />
      </div>
    )
  }
};

window.App = App;