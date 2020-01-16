class F2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      address: '',
      city: '',
      state: '',
      zipcode: ''
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
      <div id="f2">
      <h1>Enter your shipping info</h1>
      <form >
        <label>
          Address Line 1:
          <input type='text' name="address" onChange={this.handleInputChange}/>
        </label>
        <br />
        <label>
          City:
          <input type='text' name="city" onChange={this.handleInputChange}/>
        </label>
        <br />
        <label>
          State:
          <input type='text' name="state" onChange={this.handleInputChange}/>
        </label>
        <br />
        <label>
          Zipcode:
          <input type='text' name="zipcode" onChange={this.handleInputChange}/>
        </label>
      </form>
      <br />
      <button id="checkout/home" onClick={() => {this.props.changePage('F3'); this.handleSubmit();}}>Next</button>
    </div>
    )
  }
}

export default F2;