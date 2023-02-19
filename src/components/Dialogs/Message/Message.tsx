import s from './../Dialogs.module.css';

type MessageType = {
  message: string | undefined;
};

const Message = (props: MessageType) => {
  return (
    <div>
      <div className={s.dialog}>{props.message}</div>
    </div>
  );
};

export default Message;
