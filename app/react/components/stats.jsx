import React from 'react';
import CounterStore from './../flux/counter-store';
import CounterActions from './../flux/counter-actions';

class Stats extends React.Component {
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
        clicks: {this.state.clicksCount} / 
        count: {this.state.count}
      </div>
    );
  }
}

export default Stats;
