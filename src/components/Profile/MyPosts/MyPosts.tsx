import s from './MyPosts.module.css';
import Post from './Post/Post';

function MyPosts() {
  let posts = [
    { id: 1, message: 'Hi, how are you ?', likesCount: '12' },
    { id: 2, message: 'It is my first post', likesCount: '23' },
  ];

  let postsElement = posts.map((p) => (
    <Post message={p.message} likesCount={p.likesCount} />
  ));

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
      <div className={s.posts}>{postsElement}</div>
    </div>
  );
}

export default MyPosts;
