import clsx from 'clsx';
import { useDispatch } from 'react-redux';
import { toggleCardFavorite, removeCard } from '../../redux/cardsRedux';
import styles from './Card.module.scss';

const Card = props => {

    const dispatch = useDispatch();
    const handleClick = e => {
        e.preventDefault();
        dispatch(toggleCardFavorite(props.id))
    }

    const deleteClick = (e) => {
        e.preventDefault();
        dispatch(removeCard(props.id));
    }

    return (
        <li className={styles.card}>{props.title}
            <div className={styles.buttons}>
                <button onClick={handleClick} className={clsx(styles.button, props.isFavorite && styles.isActive)}><i className={'fa fa-star-o'} /></button><br></br>
                <button onClick={deleteClick} className={styles.button}><i className={'fa fa-trash'} /></button>
            </div>
        </li>
    );
};

export default Card;