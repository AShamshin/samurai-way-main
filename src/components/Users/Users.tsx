import s from './users.module.css';
import { UsersPropsType } from './UsersContainer';

let Users = (props: UsersPropsType) => {
  if (props.usersPage.users.length === 0) {
    props.setUsers([
      {
        id: 1,
        photoUrl:
          'https://cs.pikabu.ru/post_img/2014/01/15/10/1389803464_232888874.jpg',
        followed: false,
        fullName: 'Серя',
        status: 'I am a Boss',
        location: { city: 'Mich', country: 'Russia' },
      },
      {
        id: 2,
        photoUrl:
          'https://cs.pikabu.ru/post_img/2014/01/15/10/1389803464_232888874.jpg',
        followed: true,
        fullName: 'Кудрявый',
        status: 'FUTURAMMA',
        location: { city: 'Omicron Persei 8', country: 'Russia' },
      },
      {
        id: 3,
        photoUrl:
          'https://cs.pikabu.ru/post_img/2014/01/15/10/1389803464_232888874.jpg',
        followed: false,
        fullName: 'Алик',
        status: 'Hello World',
        location: { city: 'Mich', country: 'Russia' },
      },
    ]);
  }

  return (
    <div>
      {props.usersPage.users.map((u: any) => (
        <div key={u.id}>
          <span>
            <div>
              <img src={u.photoUrl} alt='' className={s.userPhoto} />
            </div>
            <div>
              {u.followed ? (
                <button
                  onClick={() => {
                    props.unfollow(u.id);
                  }}
                >
                  Unfollow
                </button>
              ) : (
                <button
                  onClick={() => {
                    props.follow(u.id);
                  }}
                >
                  Follow
                </button>
              )}
            </div>
          </span>
          <span>
            <span>
              <div>{u.fullName}</div>
              <div>{u.status}</div>
            </span>
            <span>
              <div>{u.location.country}</div>
              <div>{u.location.city}</div>
            </span>
          </span>
        </div>
      ))}
    </div>
  );
};
<div></div>;
export default Users;
