import store from './redux/redux-store';
import ReactDOM from 'react-dom';
import App from './App';
import { RootStateType } from './redux/store';
import { BrowserRouter } from 'react-router-dom';

export type IndexType = {
  state: RootStateType;
};

let rerenderEntireTree = (state: any) => {
  ReactDOM.render(
    <BrowserRouter>
      <App state={state} dispatch={store.dispatch.bind(store)} store={store} />
    </BrowserRouter>,
    document.getElementById('root')
  );
};

rerenderEntireTree(store.getState());

store.subscribe(() => {
  let state = store.getState();
  rerenderEntireTree(state);
});
