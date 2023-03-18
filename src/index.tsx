import store from './redux/redux-store';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from './StoreContext';
import { type } from '@testing-library/user-event/dist/type';

let rerenderEntireTree = (state: any) => {
  ReactDOM.render(
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>,
    document.getElementById('root')
  );
};

rerenderEntireTree(store.getState());

store.subscribe(() => {
  let state = store.getState();

  rerenderEntireTree(state);
});
