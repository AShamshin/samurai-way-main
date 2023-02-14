import { PostType } from '../../../redux/state';
import s from './MyPosts.module.css';
import Post from './Post/Post';

export type ProfilePageType = {
  posts: PostType[];
};

function MyPosts(props: ProfilePageType) {
  let postsElement = props.posts.map((p) => (
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
