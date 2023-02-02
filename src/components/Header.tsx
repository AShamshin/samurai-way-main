import s from './Header.module.css';

function Header() {
  return (
    <header className={s.header}>
      <img
        src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuqSUWGefeLef35q2txrO4W5gaQgjIrJoVvw&usqp=CAU'
        alt=''
      />
    </header>
  );
}

export default Header;
