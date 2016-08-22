class App extends React.Component {
  constructor() {
    super();
    this.state = {
      movies: testData
    };
  }

  render() {
    return (
      <div>
        <h1>Movie List!</h1>
        <MovieList movies={this.state.movies} />
      </div>
    )
  }
};

window.App = App;