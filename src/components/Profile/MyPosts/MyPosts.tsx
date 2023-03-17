import React from 'react';

import { PostType, ActionTypes } from '../../../redux/store';
import s from './MyPosts.module.css';
import Post from './Post/Post';

export type MyPostsType = {
  addPost: () => void;
  posts: PostType[];
  updateNewPostText: (text: string) => void;
  newPostText: string;
};

function MyPosts(props: MyPostsType) {
  let postsElement = props.posts.map((p) => (
    <Post message={p.message} likesCount={p.likesCount} />
  ));
  let newPostElement = React.createRef<HTMLTextAreaElement>();

  let onAddPost = () => {
    props.addPost();
  };

  let onPostChange = () => {
    if (newPostElement.current) {
      let text = newPostElement.current.value;
      props.updateNewPostText(text);
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
        <button onClick={onAddPost}>Add post</button>
        <button>Remove</button>
      </div>
      <div className={s.posts}>{postsElement}</div>
    </div>
  );
}

export default MyPosts;
