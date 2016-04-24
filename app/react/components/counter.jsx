import React from 'react';
import CounterStore from './../flux/counter-store';
import CounterActions from './../flux/counter-actions';

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = CounterStore.getState();
    this.onChange = this.onChange.bind(this);
  }

  componentWillUnmount() {
    CounterStore.unlisten(this.onChange);
  }

  componentDidMount() {
    CounterStore.listen(this.onChange);
  }

  onChange(state) {
    this.setState(state);
  }

  render() {
    return(
      <div>
        value: {this.state.count}
        <button className="js-upvote" onClick={CounterActions.countUp}>+</button>
        <button className="js-downvote" onClick={CounterActions.countDown}>-</button>
      </div>
    );
  }
}

export default Counter;
