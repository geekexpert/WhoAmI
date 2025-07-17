import { applyMiddleware, compose, createStore } from 'redux';
import { thunk } from 'redux-thunk';
import rootReducer from './reducers';

const store = createStore(
  rootReducer,
  {},
  compose(
    ...[
      applyMiddleware(thunk),
      // eslint-disable-next-line no-underscore-dangle
      window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    ].filter(i => i),
  ),
);

if (module.hot) {
  // eslint-disable-next-line global-require
  module.hot.accept('./reducers', () => store.replaceReducer(require('./reducers').default));
}

export default store;
