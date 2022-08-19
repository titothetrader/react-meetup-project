import { useContext } from 'react';


import css from './MeetupItem.module.css';
import Card from '../ui/Card';
import FavoritesContext from '../../store/favorites-context';

function MeetupItem(props) {
    const favesContextObj = useContext(FavoritesContext);

    const itemIsFavorite = favesContextObj.itemIsFavorite(props.id);

    function toggleFavoriteStatusHandler() {
        if (itemIsFavorite) {
            favesContextObj.removeFavorite(props.id);
        } else {
            favesContextObj.addFavorite({
                id: props.id,
                title: props.title,
                image: props.image,
                address: props.address,
                description: props.description
            });
        }
    }

    return (
        <li className={css.item}>
            <Card>
                <div className={css.image}>
                    <img src={props.image} alt={props.title} />
                </div>
                <div className={css.content}>
                    <h3>{props.title}</h3>
                    <address>{props.address}</address>
                    <p>{props.description}</p>
                </div>
                <div className={css.actions}>
                    <button onClick={toggleFavoriteStatusHandler}>{itemIsFavorite ? '- From Favorites' : '+ To Favorites'}</button>
                </div>
            </Card>
        </li>
    );
}

export default MeetupItem;