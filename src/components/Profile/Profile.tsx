import { profile } from 'console';
import { StoreType } from '../../redux/store';
import MyPostsContainer from './MyPosts/MyPostsContainer';
import s from './Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';
type ProfilePropsType = {
  store: StoreType;
};

const Profile = (props: any) => {
  return (
    <div>
      <ProfileInfo profile={props.profile} />
      <MyPostsContainer />
    </div>
  );
};

export default Profile;
