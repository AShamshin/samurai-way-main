import s from './Post.module.css';

type PostType = {
  message: string | undefined;
  likesCount: number;
};

function Post(props: PostType) {
  return (
    <div className={s.item}>
      <img
        src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0tDgbDDHlJiBUoJutxzjKb8P7xUcQOOxOyg&usqp=CAU'
        alt=''
      />
      {props.message}
      <div>
        <span>like</span> {props.likesCount}
      </div>
    </div>
  );
}

export default Post;
