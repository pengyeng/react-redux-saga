import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import {
    Route,
    NavLink,
    HashRouter,
  } from "react-router-dom";
  import Home from "./Home";
  import {NewsMenuItem, NewsLink} from './menulink-APP_MODE';
  const Weather = React.lazy(() => import('./Weather'));
  const Data = React.lazy(() => import('./Data'));
  const DataTable = React.lazy(() => import('./DataTable'));

function HomeLink(){
    return <Route path="/home" component={Home}/>;
  }
  function WeatherLink(){
    return <Route path="/weather" component={Weather}/>;
  }
  function DataLink(){
    return <Route path="/datagrid" component={Data}/>;
  }
  function DataTableLink(){
    return <Route path="/datatable" component={DataTable}/>;
  }

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function ButtonAppBar() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  
  const handleClose = () => {
    setAnchorEl(null);
  };
  
  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu" onClick={handleClick}>
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            Simple SPA
          </Typography>
          <Button color="inherit"></Button>
        </Toolbar>
      </AppBar>
      <HashRouter> 
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem component={NavLink} to="/home" >Home</MenuItem>
        <MenuItem component={NavLink} to="/weather" >Weather</MenuItem>
        <MenuItem component={NavLink} to="/datagrid" >Data Grid</MenuItem>
        <MenuItem component={NavLink} to="/datatable">Data Table</MenuItem>
      </Menu>
      <React.Suspense fallback={<div>loading...</div>}> 
      <HomeLink/>
      <WeatherLink/>
      <DataLink/>
      <DataTableLink/>
      <NewsLink/>
      </React.Suspense>  
      </HashRouter> 
    </div>
  );
}