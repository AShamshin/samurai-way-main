import { NavLink } from 'react-router-dom';
import s from './Dialogs.module.css';

const Dialogs = (props: any) => {
  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItem}>
        <div className={s.dialog + ' ' + s.active}>
          <NavLink to='/dialogs/1'>Алик</NavLink>
        </div>
        <div className={s.dialog}>
          <NavLink to='/dialogs/2'>Серя</NavLink>
        </div>
        <div className={s.dialog}>
          <NavLink to='/dialogs/3'>Дашка</NavLink>
        </div>
        <div className={s.dialog}>
          <NavLink to='/dialogs/4'>Кудрявый</NavLink>
        </div>
        <div className={s.dialog}>
          <NavLink to='/dialogs/5'>Витёк</NavLink>
        </div>
        <div className={s.dialog}>
          <NavLink to='/dialogs/6'>Ванёк</NavLink>
        </div>
      </div>
      <div className={s.messages}>
        <div className={s.message}>Hi</div>
        <div className={s.message}>How is your it-kamasutra ?</div>
        <div className={s.message}>How are you ?</div>
      </div>
    </div>
  );
};
export default Dialogs;
