import styles from './Favorite.module.scss';
import PageTitle from "../PageTitle/PageTitle";
import Card from '../Card/Card';
import { useSelector } from 'react-redux';
import { getFavoriteCard } from '../../redux/store';

const Favorite = () => {
    const favoriteCards = useSelector(getFavoriteCard);
    if (favoriteCards.length === 0) {
        return(
            <div className={styles.favorite}>
              <PageTitle>No favorive cards</PageTitle>
            </div>
        );
    }

    return (
        <div>
            <PageTitle>Favorite</PageTitle>
            <div className={styles.column}>
                <ul className={styles.favoriteCards}>
                    {favoriteCards.map(card => <Card key={card.id} title={card.title} isFavorite={card.isFavorite} />)}
                </ul>
            </div>
        </div>
    )
}

export default Favorite;