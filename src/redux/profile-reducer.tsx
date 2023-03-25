import { ActionTypes } from './store';

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState = {
  posts: [
    { id: 1, message: 'Hi, how are you ?', likesCount: 5 },
    { id: 2, message: 'It is my first post', likesCount: 12 },
  ],

  newPostText: 'it-kamasutra.com',
};

const profileReducer = (state = initialState, action: ActionTypes) => {
  switch (action.type) {
    case ADD_POST: {
      let newPost = {
        id: 5,
        message: state.newPostText,
        likesCount: 0,
      };
      // let stateCopy = { ...state };
      // stateCopy.posts = [...state.posts];
      // stateCopy.posts.push(newPost);
      // stateCopy.newPostText = '';
      return { ...state, posts: [...state.posts, newPost], newPostText: '' };
    }
    case UPDATE_NEW_POST_TEXT:
      let stateCopy = { ...state, newPostText: action.newText };
      // stateCopy.newPostText = action.newText;
      return stateCopy;

    default:
      return state;
  }
};

export const addPostActionCreator = () => ({ type: ADD_POST } as const);

export const updateNewPostTextActionCreator = (text: string) =>
  ({ type: UPDATE_NEW_POST_TEXT, newText: text } as const);

export default profileReducer;
