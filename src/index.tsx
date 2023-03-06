import store from './redux/state';
import ReactDOM from 'react-dom';
import App from './App';
import { RootStateType } from './redux/state';
import { BrowserRouter } from 'react-router-dom';

let rerenderEntireTree = (state: RootStateType) => {
  ReactDOM.render(
    <BrowserRouter>
      <App state={state} dispatch={store.dispatch.bind(store)} />
    </BrowserRouter>,
    document.getElementById('root')
  );
};

rerenderEntireTree(store.getState());
store.subscribe(rerenderEntireTree);
