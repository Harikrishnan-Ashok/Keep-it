import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import SettingsSuggestIcon from '@mui/icons-material/SettingsSuggest';
import {useNavigate} from 'react-router-dom';
import {useState} from 'react';
import {Divider} from '@mui/material';

export default function Navbar({setShowDrawer}) {
  const navigate=useNavigate()

  const [showSettings,setShowSettings]=useState(false)

  const handleSettingsToggle=()=>{
    if(showSettings){
      navigate("/")
    }else{
      navigate("/settings")
    }
    setShowSettings((curr)=>!curr)   
  }

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar color='primary' position="static">
        <Toolbar>
          <IconButton
            size="normal"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={()=>setShowDrawer((curr)=>!curr)}
          >
            <MenuIcon />
          </IconButton>
          <Divider flexItem orientation='vertical' ></Divider>
          <Typography role='button' onClick={()=>navigate("/")}  variant="h6" component="div" sx={{ textAlign:"center",flexGrow: 1,cursor:"pointer" }}>
            Go-Keep
          </Typography>
          <IconButton
            color="inherit"
            onClick={handleSettingsToggle}
          >
            <SettingsSuggestIcon></SettingsSuggestIcon>
          </IconButton>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
