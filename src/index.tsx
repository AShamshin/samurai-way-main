import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

// let state = {
//   profilePage: {
//     posts: [
//       { id: 1, message: 'Hi, how are you ?', likesCount: '12' },
//       { id: 2, message: 'It is my first post', likesCount: '23' },
//     ],
//   },

//   dialogsPage: {
//     dialogs: [
//       { id: 1, name: 'Алик' },
//       { id: 2, name: 'Серя' },
//       { id: 3, name: 'Дашка' },
//       { id: 4, name: 'Кудрявый' },
//       { id: 5, name: 'Витёк' },
//       { id: 6, name: 'Ванёк' },
//     ],
//     messages: [
//       { id: 1, message: 'Hi' },
//       { id: 2, message: 'How is your it-kamasutra ?' },
//       { id: 3, message: 'How are you ?' },
//     ],
//   },
//   sidebar: {},
// };

let posts = [
  { id: 1, message: 'Hi, how are you ?', likesCount: '12' },
  { id: 2, message: 'It is my first post', likesCount: '23' },
];

let messages = [
  { id: 1, message: 'Hi' },
  { id: 2, message: 'How is your it-kamasutra ?' },
  { id: 3, message: 'How are you ?' },
];

let dialogs = [
  { id: 1, name: 'Алик' },
  { id: 2, name: 'Серя' },
  { id: 3, name: 'Дашка' },
  { id: 4, name: 'Кудрявый' },
  { id: 5, name: 'Витёк' },
  { id: 6, name: 'Ванёк' },
];

ReactDOM.render(
  <App posts={posts} dialogs={dialogs} messages={messages} />,
  document.getElementById('root')
);
