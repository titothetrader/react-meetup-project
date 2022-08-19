import { useContext } from 'react';

import FavoritesContext from '../store/favorites-context';
import MeetupList from '../components/meetups/MeetupList';

function FavoritesPage() {
    const favesContextObj = useContext(FavoritesContext);

    let content;

    if(favesContextObj.totalFavorites === 0) {
        content = <p>You have no favorites... yet!</p>;
    } else {
        content = <MeetupList meetups={favesContextObj.favorites} />;
    }

    return (
        <section>
            <h1>My Favorites</h1>
            {content}
        </section>
    );
}

export default FavoritesPage;