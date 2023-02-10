import s from './Navbar.module.css';

function Navbar() {
  return (
    <nav className={s.nav}>
      <div className={s.item}>
        <a href='/profile'> Profile</a>
      </div>
      <div className={s.item}>
        <a href='dialogs'>Messages</a>
      </div>
      <div className={s.item}>
        <a href='naws'>News</a>
      </div>
      <div className={s.item}>
        <a href='music'>Music</a>
      </div>
      <div className={s.item}>
        <a href='settings'>Settings</a>
      </div>
    </nav>
  );
}

export default Navbar;
