import { ProfilePageType } from '../../redux/state';
import MyPosts from './MyPosts/MyPosts';
import s from './Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';
type RootStateType = {
  state: ProfilePageType;
};

const Profile = (props: RootStateType) => {
  return (
    <div>
      <ProfileInfo />
      <MyPosts posts={props.state.posts} />
    </div>
  );
};

export default Profile;
