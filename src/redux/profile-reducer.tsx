import { ActionTypes } from './store';

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';

let initialState = {
  posts: [
    { id: 1, message: 'Hi, how are you ?', likesCount: 5 },
    { id: 2, message: 'It is my first post', likesCount: 12 },
  ],

  newPostText: 'it-kamasutra.com',
  profile: null,
};

const profileReducer = (state = initialState, action: ActionTypes) => {
  switch (action.type) {
    case ADD_POST: {
      let newPost = {
        id: 5,
        message: state.newPostText,
        likesCount: 0,
      };

      return { ...state, posts: [...state.posts, newPost], newPostText: '' };
    }
    case UPDATE_NEW_POST_TEXT:
      return { ...state, newPostText: action.newText };

    case SET_USER_PROFILE:
      return { ...state, profile: action.profile };

    default:
      return state;
  }
};

export const addPostActionCreator = () => ({ type: ADD_POST } as const);
export const setUserProfile = (profile: any) =>
  ({ type: SET_USER_PROFILE, profile } as const);
export const updateNewPostTextActionCreator = (text: string) =>
  ({ type: UPDATE_NEW_POST_TEXT, newText: text } as const);

export default profileReducer;
