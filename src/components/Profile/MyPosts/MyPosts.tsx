import React from 'react';
import {
  PostType,
  ActionTypes,
  addPostActionCreator,
  updateNewPostTextType,
} from '../../../redux/state';
import s from './MyPosts.module.css';
import Post from './Post/Post';

export type ProfilePageType = {
  posts: PostType[];
  newPostText: string;
  dispatch: (action: ActionTypes) => void;
};

function MyPosts(props: ProfilePageType) {
  let postsElement = props.posts.map((p) => (
    <Post message={p.message} likesCount={p.likesCount} />
  ));
  let newPostElement = React.createRef<HTMLTextAreaElement>();

  let addPost = () => {
    props.dispatch(addPostActionCreator());
  };

  let onPostChange = () => {
    if (newPostElement.current) {
      let text = newPostElement.current.value;
      let action = updateNewPostTextType(text);
      props.dispatch(action);
      //   let action = {
      //     type: 'UPDATE-NEW-POST-TEXT', newText: text, };
      //   props.dispatch(action);
    }
  };

  return (
    <div className={s.postsBlock}>
      <h3>My posts</h3>
      <div>
        <div>
          <textarea
            onChange={onPostChange}
            ref={newPostElement}
            value={props.newPostText}
          />
        </div>
        <button onClick={addPost}>Add post</button>
        <button>Remove</button>
      </div>
      <div className={s.posts}>{postsElement}</div>
    </div>
  );
}

export default MyPosts;
