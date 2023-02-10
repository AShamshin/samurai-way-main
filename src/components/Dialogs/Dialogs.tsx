import s from './Dialogs.module.css';

const Dialogs = (props: any) => {
  return (
    <div className={s.dialogs}>
      <div className={s.dialogsItem}>
        <div className={s.dialog + ' ' + s.active}>Алик</div>
        <div className={s.dialog}>Серя</div>
        <div className={s.dialog}>Дашка</div>
        <div className={s.dialog}>Кудрявый</div>
        <div className={s.dialog}>Витёк</div>
        <div className={s.dialog}>Ванёк</div>
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
