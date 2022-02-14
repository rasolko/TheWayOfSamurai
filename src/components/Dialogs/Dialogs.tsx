import s from './Dialogs.module.css';
import {DialogItem} from './DialogItem/DialogItem';
import {Message} from './Message/Message';

const Dialogs = () => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <DialogItem name='Valera' id={1} />
                <DialogItem name='Dima' id={2} />
                <DialogItem name='Igor' id={3} />
                <DialogItem name='Victor' id={4} />
                <DialogItem name='Sasha' id={5} />
            </div>
            <div className={s.messages}>
                <Message value='Hi'/>
                <Message value='How is your it-kamasutra?'/>
                <Message value='Yo'/>
            </div>
        </div>
    )
}
export default Dialogs