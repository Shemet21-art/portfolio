import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';

import "./styles.scss";



const pages = ['work', 'about', 'skills','contacts'];


function Header(){
 
    
  
      const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);
     
      const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElNav(event.currentTarget);
      };
     
    
      const handleCloseNavMenu = () => {
        setAnchorElNav(null);
      };

    
      return (
        <AppBar style={{ backgroundColor:"#000C24", color:"#928A97"}} position="sticky" >
          <Container maxWidth="xl">
            <Toolbar disableGutters>
              <Box sx={{ flexGrow: 0, display: { xs: 'none', sm: 'flex' }, justifyContent: 'space-between', width:"100%" }}>
                {pages.map((page, key) => (
                  <div key={page} className='btnWrapper'>
                  <Button
                    key={page}
                    onClick={handleCloseNavMenu}
                    sx={{ my: 2, color: '#928A97',   fontWeight:'900',
                      fontSize:'12px', width:"100px", '&:hover': {
                      background: 'none',
                       boxShadow:'none',
                       fontWeight:'900',
                       fontSize:'12px',
                        color: '#F44336',
                            }, }}
                  >
                    {page}
                  </Button>
                  </div>
                ))}
              </Box>
              <Box sx={{ flexGrow: 0, display: { xs: 'flex', sm: 'none' } }}>
                <IconButton
                  size="large"
                  aria-label="account of current user"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  onClick={handleOpenNavMenu}
                  color="inherit"
                >
                  <MenuIcon />
                </IconButton>
                <Menu
                  id="menu-appbar"
                  anchorEl={anchorElNav}
                  anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                  }}
                  open={Boolean(anchorElNav)}
                  onClose={handleCloseNavMenu}
                  sx={{ display: { xs: 'block', md: 'none' } }}
                >
                  {pages.map((page) => (
                    <MenuItem key={page} onClick={handleCloseNavMenu}>
                      <Typography sx={{ textAlign: 'center' }}>{page}</Typography>
                    </MenuItem>
                  ))}
                </Menu>
              </Box>
            </Toolbar>
          </Container>
        </AppBar>
      );
    }
export default Header