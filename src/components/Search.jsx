class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchBox: ''
    }
  }

  getQuery(event) {
    this.setState({
      searchBox: event.target.value
    }, function() {
      this.props.searchFunc(this.state.searchBox);
    });
  }

  noSubmit(event) {
    event.preventDefault();
  }

  render() {
    return (
      <div className="search">
        <form id="searchForm" onSubmit={this.noSubmit}>
          <input className="searchBox" type="text" placeholder="Search for a movie" onChange={this.getQuery.bind(this)} />
        </form>
      </div>
    );
  }
};

Search.propTypes = {
  movies: React.PropTypes.array.isRequired
};

window.Search = Search;
