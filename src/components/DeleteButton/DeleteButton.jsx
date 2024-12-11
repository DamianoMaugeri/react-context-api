import { useContext } from 'react';
import style from './DeleteButton.module.css';
import GlobalContext from '../../context/GlobalContext';




export default function DeleteButton({ post = {} }) {
    const { deletePost } = useContext(GlobalContext);
    return (
        <button className={style.delete_button} onClick={() => { deletePost(post) }}>elimina</button>
    )
}