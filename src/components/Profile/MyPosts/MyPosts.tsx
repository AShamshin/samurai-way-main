import React from 'react';

import { PostType } from '../../../redux/state';
import s from './MyPosts.module.css';
import Post from './Post/Post';

export type ProfilePageType = {
  posts: PostType[];
  addPost: (text: string) => void;
};

function MyPosts(props: ProfilePageType) {
  let postsElement = props.posts.map((p) => (
    <Post message={p.message} likesCount={p.likesCount} />
  ));
  let newPostElement = React.createRef<HTMLTextAreaElement>();

  let addPost = () => {
    if (newPostElement.current) {
      props.addPost(newPostElement.current.value);
    }
    if (newPostElement.current) {
      newPostElement.current.value = '';
    }
  };

  return (
    <div className={s.postsBlock}>
      <h3>My posts</h3>
      <div>
        <div>
          <textarea ref={newPostElement}></textarea>
        </div>
        <button onClick={addPost}>Add post</button>
        <button>Remove</button>
      </div>
      <div className={s.posts}>{postsElement}</div>
    </div>
  );
}

export default MyPosts;
