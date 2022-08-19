import { createContext, useState } from 'react';

// We name the variable with a Capital Letter because createContext() returns a full React Component
// Therefore it follows the convention of naving custom Components starting with a Capital Letter
const FavoritesContext = createContext({
    favorites: [],
    totalFavorites: 0,
    addFavorite: (favoriteMeetup) => {},
    removeFavorite: (meetupId) => {},
    itemIsFavorite: (meetupId) => {}
});

export function FavoritesContextProvider(props) {
    const [userFavorites, setUserFavorites] = useState([]);
    
    const context = {
        favorites: userFavorites,
        totalFavorites: userFavorites.length,
        addFavorite: addFavoriteHandler,
        removeFavorite: removeFavoriteHandler,
        itemIsFavorite: itemIsFavoriteHandler
    };

    function addFavoriteHandler(favoriteMeetup) {
        // The line below is NOT recommended because the STATE update depends on last state snapshot, which is timed by REACT and may not be fully up to date
        // setUserFavorites(userFavorites.concat(favoriteMeetup));
        // So instead it is recommended to use a FUNCTION to be INSTANTLY executed, including by DEFAULT the PREVIOUS state value that should be updated 
        // This guarantees always getting the LATEST STATE SNAPSHOT
        setUserFavorites((prevUserFavorites) => {
            return prevUserFavorites.concat(favoriteMeetup);
        });
    }

    function removeFavoriteHandler(meetupId) {
        setUserFavorites((prevUserFavorites) => {
            // FILTER returns a new array, where it iterates through each MEETUP ITEM and return TRUE if we want to keep or FALSE if we want to remove
            // So we only want to keep those that do NOT match the meetup ID
            return prevUserFavorites.filter(meetup => meetup.id !== meetupId);
        });
    }

    function itemIsFavoriteHandler(meetupId) {
        // SOME returns true or false if ANY of the elements it iterates through returns true.
        // Return TRUE if we have any meetup whose ID matches
        return userFavorites.some(meetup => meetup.id === meetupId);
    }

    return <FavoritesContext.Provider value={context}> 
        {props.children}
    </FavoritesContext.Provider>
}

export default FavoritesContext;