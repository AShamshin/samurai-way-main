import React from 'react';
import {
  addPostActionCreator,
  updateNewPostTextActionCreator,
} from '../../../redux/profile-reducer';
import { RootStateType } from '../../../redux/store';
import { connect } from 'react-redux';
import MyPosts from './MyPosts';
import { ActionTypes } from '../../../redux/store';

let mapStateToProps = (state: RootStateType) => {
  return {
    posts: state.profilePage.posts,
    newPostText: state.profilePage.newPostText,
  };
};

let mapDispatchToProps = (dispatch: (action: ActionTypes) => void) => {
  return {
    updateNewPostText: (text: string) => {
      let action = updateNewPostTextActionCreator(text);
      dispatch(action);
    },
    addPost: () => {
      dispatch(addPostActionCreator());
    },
  };
};

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;
