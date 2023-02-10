import s from './MyPosts.module.css';
import Post from './Post/Post';

function MyPosts() {
  return (
    <div className={s.postsBlock}>
      <h3>My posts</h3>
      <div>
        <div>
          <textarea></textarea>
        </div>
        <button>Add post</button>
        <button>Remove</button>
      </div>
      <div className={s.posts}>
        <Post message='Hi, how are you? ' likesCount='0' />
        <Post message='It is my first post' likesCount='23' />
      </div>
    </div>
  );
}

export default MyPosts;
