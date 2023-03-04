export type StoreType = {
  _state: RootStateType;
  _callSubscriber: (_state: RootStateType) => void;
  addPost: () => void;
  updateNewPostText: (newText: string) => void;
  subscribe: (observer: (state: RootStateType) => void) => void;
  getState: () => RootStateType;
};

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
        { id: 1, name: 'Алик' },
        { id: 2, name: 'Серя' },
        { id: 3, name: 'Дашка' },
        { id: 4, name: 'Кудрявый' },
        { id: 5, name: 'Витёк' },
        { id: 6, name: 'Ванёк' },
      ],
      messages: [
        { id: 1, message: 'Hi' },
        { id: 2, message: 'How is your it-kamasutra ?' },
        { id: 3, message: 'How are you ?' },
      ],
    },
    sidebar: {},
  },
  getState() {
    return this._state;
  },

  _callSubscriber() {
    console.log('xfgh');
  },

  addPost() {
    let newPost = {
      id: 5,
      message: this._state.profilePage.newPostText,
      likesCount: 0,
    };
    this._state.profilePage.posts.push(newPost);
    this._state.profilePage.newPostText = '';
    this._callSubscriber(this._state);
  },

  updateNewPostText(newText: string) {
    this._state.profilePage.newPostText = newText;
    this._callSubscriber(this._state);
  },

  subscribe(observer: (state: RootStateType) => void) {
    this._callSubscriber = observer;
  },
};

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
};

export type SidebarType = {};

export type RootStateType = {
  profilePage: ProfilePageType;
  dialogsPage: DialogsPageType;
  sidebar: SidebarType;
};

export default store;
//window.store = store;
