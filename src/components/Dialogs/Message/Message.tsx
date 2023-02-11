import s from './../Dialogs.module.css';

type MessagesType = {
  message: string;
};

const Message = (props: MessagesType) => {
  return <div className={s.dialog}>{props.message}</div>;
};

export default Message;
