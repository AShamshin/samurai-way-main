import dialogsReducer from './dialogs-reducer';
import profileReducer from './profile-reducer';
import sidebarReducer from './sidebar-reducer';

export type StoreType = {
  _state: RootStateType;
  _callSubscriber: (_state: RootStateType) => void;
  subscribe: (observer: (state: RootStateType) => void) => void;
  getState: () => RootStateType;
  dispatch: (action: ActionTypes) => void;
};
export type ActionTypes =
  | ReturnType<typeof addPostActionCreator>
  | ReturnType<typeof updateNewPostTextActionCreator>
  | ReturnType<typeof sendMessageCreator>
  | ReturnType<typeof updateNewMessageBodyCreator>;

export type MessageType = {
  id: number;
  message: string;
};
export type DialogType = {
  id: number;
  name: string;
};
export type PostType = {
  id: number;
  message: string;
  likesCount: number;
};
export type ProfilePageType = {
  posts: PostType[];
  newPostText: string;
};
export type DialogsPageType = {
  dialogs: DialogType[];
  messages: MessageType[];
  newMessageBody: string;
};
export type SidebarType = {};
export type RootStateType = {
  profilePage: ProfilePageType;
  dialogsPage: DialogsPageType;
  sidebar: SidebarType;
};

const ADD_POST = 'ADD-POST';

const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';

const SEND_MESSAGE = 'SEND-MESSAGE';

export const addPostActionCreator = () => ({ type: ADD_POST } as const);

export const updateNewPostTextActionCreator = (text: string) =>
  ({ type: UPDATE_NEW_POST_TEXT, newText: text } as const);

export const sendMessageCreator = () => ({ type: SEND_MESSAGE } as const);

export const updateNewMessageBodyCreator = (body: string) =>
  ({ type: UPDATE_NEW_MESSAGE_BODY, body: body } as const);

let store: StoreType = {
  _state: {
    profilePage: {
      posts: [
        { id: 1, message: 'Hi, how are you ?', likesCount: 5 },
        { id: 2, message: 'It is my first post', likesCount: 12 },
      ],

      newPostText: 'it-kamasutra.com',
    },

    dialogsPage: {
      dialogs: [
        { id: 1, name: '????????' },
        { id: 2, name: '????????' },
        { id: 3, name: '??????????' },
        { id: 4, name: '????????????????' },
        { id: 5, name: '??????????' },
        { id: 6, name: '??????????' },
      ],
      messages: [
        { id: 1, message: 'Hi' },
        { id: 2, message: 'How is your it-kamasutra ?' },
        { id: 3, message: 'How are you ?' },
      ],
      newMessageBody: '',
    },
    sidebar: {},
  },
  getState() {
    return this._state;
  },

  subscribe(observer: (state: RootStateType) => void) {
    this._callSubscriber = observer;
  },

  _callSubscriber() {
    console.log('xfgh');
  },

  dispatch(action) {
    this._state.profilePage = profileReducer(this._state.profilePage, action);

    this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);

    this._state.sidebar = sidebarReducer(this._state.sidebar, action);

    this._callSubscriber(this._state);
  },
};

export default store;
