
import * as React from 'react';
import { useEffect } from 'react';
import Box from '@mui/material/Box';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import HomeIcon from '@mui/icons-material/Home';
import FavoriteIcon from '@mui/icons-material/Favorite';
import StarsIcon from '@mui/icons-material/Stars';
import MovieIcon from '@mui/icons-material/Movie';
import TvIcon from '@mui/icons-material/Tv';
import { useNavigate } from "react-router-dom";
import NewReleasesIcon from '@mui/icons-material/NewReleases';
import WhatshotIcon from '@mui/icons-material/Whatshot';

const useStyles = makeStyles({
  root: {
    width: 500,
    position: "fixed",
    bottom: 0,
    backgroundColor: "#e0afa0",
    color: "#e0afa0",
  },
});

export default function SimpleBottomNavigation() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const navigate = useNavigate();

  useEffect(()=> {
  if(value === 0)
  navigate("/")
  else if(value === 1) navigate("/movies/favorites");
  else if(value === 2) navigate("/movies/upcoming");
  else if(value === 3) navigate("/movies/nowplaying");
  else if(value === 4) navigate("/movies/toprated");
  else if(value === 5) navigate("/movies/latest");
  else if(value === 6) navigate("/movies/popular");
  else if(value === 7) navigate("/search");

  }, [value, navigate ]);
  
  

  return (
      <BottomNavigation
    
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
        showLabels
        ClassName={classes.root}
      >
        <BottomNavigationAction style={{color : "#e0afa0"}} label="Home" icon={< HomeIcon />} />
        <BottomNavigationAction style={{color : "#e0afa0"}} label="Favorites" icon={<FavoriteIcon />} />
        <BottomNavigationAction style={{color : "#e0afa0"}} label="Upcoming" icon={<MovieIcon />} />
        <BottomNavigationAction style={{color : "#e0afa0"}} label="Now Playing" icon={<TvIcon />} />
        <BottomNavigationAction style={{color : "#e0afa0"}} label="Top Rated" icon={< StarsIcon />} />
        <BottomNavigationAction style={{color : "#e0afa0"}} label="Latest" icon={< NewReleasesIcon />} />
        <BottomNavigationAction style={{color : "#e0afa0"}} label="Popular" icon={< WhatshotIcon />} />
      </BottomNavigation>
  );
}
