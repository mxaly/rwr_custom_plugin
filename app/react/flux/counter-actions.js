import alt from './alt';

const CounterActions = alt.generateActions('countUp', 'countDown');

export default alt.createActions(CounterActions);
