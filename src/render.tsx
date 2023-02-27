import ReactDOM from 'react-dom';
import App from './App';
import { RootStateType, updateNewPostText } from './redux/state';
import { addPost } from './redux/state';

export let rerenderEntireTree = (state: RootStateType) => {
  ReactDOM.render(
    <App
      state={state}
      addPost={addPost}
      updateNewPostText={updateNewPostText}
    />,
    document.getElementById('root')
  );
};
