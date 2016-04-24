import alt from './alt';
import CounterActions from './counter-actions';

class CounterStore {
  constructor() {
    this.bindActions(CounterActions);
    this.state = {
      count: 2,
      clicksCount: 0
    }
  }

  onCountUp() {
    this.setState({
      count: this.state.count + 1,
      clicksCount: this.state.clicksCount + 1
    });
  }

  onCountDown() {
    this.setState({
      count: this.state.count - 1,
      clicksCount: this.state.clicksCount + 1
    });
  }
}

export default alt.createStore(CounterStore, 'CounterStore');
