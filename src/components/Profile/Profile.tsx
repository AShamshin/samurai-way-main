import MyPosts from './MyPosts/MyPosts';
import s from './Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = () => {
  let posts = [
    { id: 1, message: 'Hi, how are you ?', likesCount: '12' },
    { id: 2, message: 'It is my first post', likesCount: '23' },
  ];

  return (
    <div>
      <ProfileInfo />
      <MyPosts posts={posts} />
    </div>
  );
};

export default Profile;
