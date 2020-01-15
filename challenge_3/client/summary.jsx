const Summary = (props) => (
  <div id="summary">
    <h1>Summary of your order</h1>
    <ul>
      <li>Hi I'm an item you added</li>
      <li>Hi I'm an item you added</li>
      <li>Hi I'm an item you added</li>
      <li>Hi I'm an item you added</li>
    </ul>
    <br />
    <button id="checkout/home" onClick={() => props.changePage('homePage')}>Confirm Order</button>
  </div>
)

export default Summary;