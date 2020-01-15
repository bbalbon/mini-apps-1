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
        Expirt Date:
        <input type='text'/>
      </label>
      <br />
      <label>
        CVV:
        <input type='text'/>
      </label>
    </form>
    <br />
    <button id="checkout/home" onClick={() => props.goHome()}>Home</button>
  </div>

)

export default F3;