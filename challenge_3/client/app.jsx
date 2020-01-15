import HomePage from './homepage.js';
import F1 from './f1.js';
import F2 from './f2.js';
import F3 from './f3.js';
import Summary from './summary.js';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      currentPage: 'homePage',
      summary: {}
    }
  }

  nextPage (page) {
    this.setState({
      currentPage: page
    })
  }

  updateFormProps (object) {
    const newValue = Object.assign(this.state.summary, object);
    this.setState({
      summary : newValue
    })
    console.log(this.state.summary);
  }

  render () {
    const state = this.state.currentPage;
    return (
      <div id="page">
        <div id="header">
          <h1>BuyTingsMon</h1>
        </div>
        <div id="main">
          { state === 'homePage' ? (<HomePage page={this.state.currentPage} changePage={this.nextPage.bind(this)}/>) : state === 'F1' ? (<F1 page={this.state.currentPage} changePage={this.nextPage.bind(this)} updateSum={this.updateFormProps.bind(this)}/>) : state === 'F2' ? (<F2 page={this.state.currentPage} changePage={this.nextPage.bind(this)}/>) : state === 'F3' ? (<F3 page={this.state.currentPage} changePage={this.nextPage.bind(this)}/>) : (<Summary page={this.state.currentPage} changePage={this.nextPage.bind(this)}/>)}
        </div>
      </div>
    )
  }
}

export default App;

