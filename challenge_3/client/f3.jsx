const F3 = (props) => (
  <div id="f3">
    <h1>Enter your Credit Card Info</h1>
    <form >
      <label>
        Credit Card #:
        <input type='text'/>
      </label>
      <br />
      <label>
        Expiry Date:
        <input type='text'/>
      </label>
      <br />
      <label>
        CVV:
        <input type='text'/>
      </label>
      <br />
      <label>
        Billing Zip Code:
        <input type='text'/>
      </label>
    </form>
    <br />
    <button id="checkout/home" onClick={() => props.changePage('homePage')}>Confirm Order</button>
  </div>
)

export default F3;