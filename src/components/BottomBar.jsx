import { useState } from "react"

import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import RestoreIcon from '@material-ui/icons/Restore';
import FavoriteIcon from '@material-ui/icons/Favorite';
import LocationOnIcon from '@material-ui/icons/LocationOn';

const BottomBar = () => {

    const [value, setValue] = useState(0)

    return (
        <>
            <BottomNavigation
                style={{ position: 'fixed', width: '100%', bottom: '0', left: '0' }}
                value={value}
                onChange={(event, newValue) => {
                    setValue(newValue);
                }}
                showLabels

            >
                <BottomNavigationAction label="Recents" icon={<RestoreIcon />} />
                <BottomNavigationAction label="Favorites" icon={<FavoriteIcon />} />
                <BottomNavigationAction label="Favorites" icon={<FavoriteIcon />} />
                <BottomNavigationAction label="Nearby" icon={<LocationOnIcon />} />
            </BottomNavigation>
        </>
    );
}

export default BottomBar;