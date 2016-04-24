import Alt from './alt';

export default {
  mount: function initializeStore(_node, payload) {
    const store = Alt.stores[payload.storeName];
    Object.assign(store.state, payload.data);
    store.emitChange();
  },
  unmount: function recycleStore(_node, payload) {
    Alt.recycle(payload.storeName)
  },
}
