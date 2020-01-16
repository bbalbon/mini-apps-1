const SummaryItem = (props) => (
  <ul className="orderdetail">
    <span id='orderfield'>{props.field}: </span>{props.value}
  </ul>
)

export default SummaryItem;