import { ProfilePageType } from '../../redux/state';
import MyPosts from './MyPosts/MyPosts';
import s from './Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';
type RootStateType = {
  state: ProfilePageType;
  addPost: (postMessage: string | undefined) => void;
};

const Profile = (props: RootStateType) => {
  return (
    <div>
      <ProfileInfo />
      <MyPosts posts={props.state.posts} addPost={props.addPost} />
    </div>
  );
};

export default Profile;
