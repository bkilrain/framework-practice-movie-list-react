class App extends React.Component {
  constructor() {
    super();
    this.state = {
      allMovies: testData,
      visableMovies: testData
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

  render() {
    return (
      <div>
        <h1>Movie List!</h1>
        <Search movies={this.state.allMovies} searchFunc={this.search.bind(this)}/>
        <MovieList movies={this.state.visableMovies} />
      </div>
    )
  }
};

window.App = App;