import Preloader from '../../common/Preloader/Preloader';
import s from './ProfileInfo.module.css';

const ProfileInfo = (props: any) => {
  if (!props.profile) {
    return <Preloader />;
  }

  return (
    <div>
      <div className={s.ava}>
        <img
          src='https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg'
          alt='tema'
        />
      </div>
      <div className={s.descriptionBlock}>
        <img src={props.profile.photos.large} alt='' />
        ava + description
      </div>
    </div>
  );
};

export default ProfileInfo;
