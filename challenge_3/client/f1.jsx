class F1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      password: ''
    }
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(event) {
    const value = event.target.value;
    const name = event.target.name;

    this.setState({
      [name]: value
    })
  }

  handleSubmit(event) {
    this.props.updateSum(this.state);
  }

  render () {
    return (
      <div id="f1">
      <h1>Create your account</h1>
      <form>
        <label>
          Name:
          <input type='text' name="name" onChange={this.handleInputChange}/>
        </label>
        <br />
        <label>
          Email:
          <input type='text' name="email" onChange={this.handleInputChange}/>
        </label>
        <br />
        <label>
          Password:
          <input type='text' name="password" onChange={this.handleInputChange}/>
        </label>
      </form>
      <br />
      <button id="checkout/home" onClick={() => {this.props.changePage('F2'); this.handleSubmit();}}>Next</button>
    </div>
    )
  }
}

export default F1;