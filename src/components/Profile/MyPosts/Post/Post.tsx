import s from './Post.module.css';

function Post() {
  return (
    <div className={s.item}>
      <img
        src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0tDgbDDHlJiBUoJutxzjKb8P7xUcQOOxOyg&usqp=CAU'
        alt=''
      />
      post 1
      <div>
        <span>like</span>
      </div>
    </div>
  );
}

export default Post;
