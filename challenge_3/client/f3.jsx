class F3 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      creditcard: '',
      expiry: '',
      cvv: '',
      billingzip: ''
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
      <div id="f3">
      <h1>Enter your Credit Card Info</h1>
      <form >
        <label>
          Credit Card #:
          <input type='text' name="creditcard" onChange={this.handleInputChange}/>
        </label>
        <br />
        <label>
          Expiry Date:
          <input type='text' name="expiry" onChange={this.handleInputChange}/>
        </label>
        <br />
        <label>
          CVV:
          <input type='text' name="cvv" onChange={this.handleInputChange}/>
        </label>
        <br />
        <label>
          Billing Zip Code:
          <input type='text' name="billingzip" onChange={this.handleInputChange}/>
        </label>
      </form>
      <br />
      <button id="checkout/home" onClick={() => {this.props.changePage('summary'); this.handleSubmit();}}>Go To Summary</button>
    </div>
    )
  }
}

export default F3;