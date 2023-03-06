import { ActionTypes, ProfilePageType } from '../../redux/state';
import MyPosts from './MyPosts/MyPosts';
import s from './Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';
type RootStateType = {
  profilePage: ProfilePageType;
  //addPost: () => void;
  //updateNewPostText: (newText: string) => void;
  dispatch: (action: ActionTypes) => void;
};

const Profile = (props: RootStateType) => {
  return (
    <div>
      <ProfileInfo />
      <MyPosts
        posts={props.profilePage.posts}
        newPostText={props.profilePage.newPostText}
        dispatch={props.dispatch}
      />
    </div>
  );
};

export default Profile;
