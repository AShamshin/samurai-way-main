import store, { StoreType } from './redux/state';
import ReactDOM from 'react-dom';
import App from './App';
import { RootStateType } from './redux/state';
import { BrowserRouter } from 'react-router-dom';

export type IndexType = {
  state: RootStateType;
};

let rerenderEntireTree = (state: RootStateType) => {
  ReactDOM.render(
    <BrowserRouter>
      <App state={state} dispatch={store.dispatch.bind(store)} store={store} />
    </BrowserRouter>,
    document.getElementById('root')
  );
};

store.subscribe(rerenderEntireTree);
rerenderEntireTree(store.getState());
