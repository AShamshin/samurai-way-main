import ReactDOM from 'react-dom';
import App from './App';
import { RootStateType } from './redux/state';
import { addPost } from './redux/state';

export let rerenderEntireTree = (state: RootStateType) => {
  ReactDOM.render(
    <App state={state} addPost={addPost} />,
    document.getElementById('root')
  );
};
