import s from './MyPosts.module.css';
import Post from './Post/Post';

function MyPosts() {
  return (
    <div>
      My posts
      <div>
        <textarea></textarea>
        <button>Add post</button>
        <button>Remove</button>
      </div>
      <div className={s.posts}>
        <Post message='Hi, how are you? ' like={15} />
        <Post message='It is my first post' like={20} />
        {/* <Post />
        <Post />
        <Post /> */}
      </div>
    </div>
  );
}

export default MyPosts;
