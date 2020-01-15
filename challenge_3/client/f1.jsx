const F1 = (props) => (
  <div id="f1">
    <h1>Create your account</h1>
    <form >
      <label>
        Name:
        <input type='text'/>
      </label>
      <br />
      <label>
        Email:
        <input type='text'/>
      </label>
      <br />
      <label>
        Password:
        <input type='text'/>
      </label>
    </form>
    <br />
    <button id="checkout/home" onClick={() => {
      props.changePage('F2');
    }}>Next</button>
  </div>

)

export default F1;