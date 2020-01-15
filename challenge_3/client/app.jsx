import HomePage from './homepage.js';
import F1 from './f1.js';
import F2 from './f2.js';
import F3 from './f3.js';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      currentPage: 'homePage'
    }
  }

  nextPage (page) {
    this.setState({
      currentPage: page
    })
  }

  render () {
    const state = this.state.currentPage;
    return (
      <div id="page">
        <div id="header">
          <h1>BuyTingsMon</h1>
        </div>
        <div id="main">
          { state === 'homePage' ? (<HomePage page={this.state.currentPage} changePage={this.nextPage.bind(this)}/>) : state === 'F1' ? (<F1 page={this.state.currentPage} changePage={this.nextPage.bind(this)}/>) : state === 'F2' ? (<F2 page={this.state.currentPage} changePage={this.nextPage.bind(this)}/>) : (<F3 page={this.state.currentPage} changePage={this.nextPage.bind(this)}/>)}
        </div>
      </div>
    )
  }
}

export default App;

