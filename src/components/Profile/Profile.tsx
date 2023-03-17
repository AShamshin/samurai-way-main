import { StoreType } from '../../redux/store';
import MyPostsContainer from './MyPosts/MyPostsContainer';
import s from './Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';
type ProfilePropsType = {
  store: StoreType;
};

const Profile = (props: ProfilePropsType) => {
  return (
    <div>
      <ProfileInfo />
      <MyPostsContainer store={props.store} />
    </div>
  );
};

export default Profile;
