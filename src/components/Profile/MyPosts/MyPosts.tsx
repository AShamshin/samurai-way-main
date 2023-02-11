import s from './MyPosts.module.css';
import Post from './Post/Post';

function MyPosts() {
  let postsData = [
    { id: 1, message: 'Hi, how are you ?', likesCount: '12' },
    { id: 2, message: 'It is my first post', likesCount: '23' },
  ];

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
        {postsData.map((p) => {
          return <Post message={p.message} likesCount={p.likesCount} />;
        })}
      </div>
    </div>
  );
}

export default MyPosts;
