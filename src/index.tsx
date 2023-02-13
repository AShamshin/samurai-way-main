import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

export type ArrayPostsType = {
  posts: Array<PostsType>;
};

export type PostsType = {
  id: number;
  message: string;
  likesCount: string;
};

let posts = [
  { id: 1, message: 'Hi, how are you ?', likesCount: '12' },
  { id: 2, message: 'It is my first post', likesCount: '23' },
];

ReactDOM.render(<App posts={posts} />, document.getElementById('root'));
