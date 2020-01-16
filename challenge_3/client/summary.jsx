import SummaryItem from './summaryitem.js';

const Summary = (props) => (
  <div id="summary">
    <h1>Details of your order</h1>
    <ul>
      {Object.keys(props.orderDetails).map((identifier, i) =>
        <SummaryItem key={i} field={identifier} value={props.orderDetails[identifier]} />
      )}
    </ul>
    <br />
    <button id="checkout/home" onClick={() => {props.changePage('homePage'); props.submitOrder();}}>Confirm Order</button>
  </div>
)

export default Summary;