class Add extends React.Component {
  constructor(props) {
    super(props);
    this.state + {
      input: ''
    }
  }

  submitHandler(event) {
    event.preventDefault();
    // console.log(document.getElementById('newMovie').value);
    this.setState({
      input: document.getElementById('newMovie').value
    }, function() {
      this.props.submit(this.state.input);
      document.getElementById('newMovie').value = '';
    });
    

  }

  render() {
    return (
      <div className="add">
        <form id="addForm" onSubmit={this.submitHandler.bind(this)}>
          <input id="newMovie" type='text' placeholder="Add a Movie"/>
          <button>Add</button>
        </form>
      </div>
    );
  }
}

window.Add = Add;