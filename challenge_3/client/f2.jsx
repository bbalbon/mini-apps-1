const F2 = (props) => (
  <div id="f2">
    <h1>Enter your shipping info</h1>
    <form >
      <label>
        City:
        <input type='text'/>
      </label>
      <br />
      <label>
        State:
        <input type='text'/>
      </label>
      <br />
      <label>
        Zipcode:
        <input type='text'/>
      </label>
    </form>
    <br />
    <button id="checkout/home" onClick={() => props.changePage()}>Next</button>
  </div>

)

export default F2;