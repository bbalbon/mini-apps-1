import Main from './main.js';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      currentPage: 'homePage',
      pages: ['homePage', 'F1', 'F2', 'F3']
    }
  }

  nextPage (page) {
    this.setState({
      currentPage: page
    })
  }

  render () {
    return (
      <div id="page">
        <div id="header">
          <h1>BuyTingsMon</h1>
        </div>
        <div id="main">
          <Main page={this.state.currentPage} changePage={this.nextPage.bind(this)}/>
        </div>
        <button id="home">Home</button><button id="checkout">Checkout</button>
      </div>
    )
  }
}

export default App;

