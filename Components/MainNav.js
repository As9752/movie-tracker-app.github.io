import  React from 'react';
import Box from '@mui/material/Box';
import { useEffect } from 'react';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import RestoreIcon from '@mui/icons-material/Restore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import TvIcon from '@mui/icons-material/Tv';
import { useHistory } from 'react-router';
import { makeStyles } from '@material-ui/core/styles';


const useStyle=makeStyles({
root: {
  width:"100%",
  position:"fixed",
  bottom:0,
  backgroundColor:"#2d313a",
  zIndex:100, 
}
});
export default function SimpleBottomNavigation() {
  const classes=useStyle();
  const [value, setValue] = React.useState(0);
  const history=useHistory();
  useEffect(() => {
    if(value===0)
    history.push("/Trending");
    else if(value===1)
    history.push("/Movies");
    else if(value===2)
    history.push("/Series");
    else if(value===3)
    history.push("Search");
  },[value,history]);
  return (
    // <Box sx={{ width: 500 }}>
    //   <BottomNavigation
    //     showLabels
    //     value={value}
    //     onChange={(event, newValue) => {
    //       setValue(newValue);
    //     }}
      //>
      <BottomNavigation
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      showLabels
      className={classes.root}
    >
        <BottomNavigationAction label="Recents" icon={<RestoreIcon />} />

        <BottomNavigationAction label="Movies" icon={<FavoriteIcon />} />
        <BottomNavigationAction label="TV" icon={<TvIcon />} />
        <BottomNavigationAction label="Search" icon={<LocationOnIcon />} />
      //</BottomNavigation>
    //</Box>
  );
    }