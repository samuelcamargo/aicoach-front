"use client";

import { useState } from 'react';
import { 
  AppBar, 
  Box, 
  Drawer, 
  IconButton, 
  Toolbar, 
  Typography, 
  List, 
  ListItem, 
  ListItemButton, 
  ListItemIcon, 
  ListItemText, 
  Avatar,
  Menu,
  MenuItem,
  InputBase,
  useMediaQuery,
  useTheme
} from '@mui/material';
import { 
  Menu as MenuIcon, 
  Home, 
  Person, 
  School, 
  Assignment, 
  Analytics, 
  Help,
  Logout,
  Search as SearchIcon
} from '@mui/icons-material';
import { styled, alpha } from '@mui/material/styles';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useAuth } from '../../src/contexts/AuthContext';
import { useRouter } from 'next/navigation';

const drawerWidth = 240;

// Estilo para o campo de busca
const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  width: '100%',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '35ch',
    },
  },
}));

const menuItems = [
  { text: 'Dashboard', icon: <Home />, path: '/dashboard' },
  { text: 'Perfil', icon: <Person />, path: '/dashboard/perfil' },
  { text: 'Cursos', icon: <School />, path: '/dashboard/cursos' },
  { text: 'Atividades', icon: <Assignment />, path: '/dashboard/atividades' },
  { text: 'Análises', icon: <Analytics />, path: '/dashboard/analises' },
  { text: 'Ajuda', icon: <Help />, path: '/dashboard/ajuda' },
];

export default function ResponsiveNavigation({ user }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const pathname = usePathname();
  const { logout } = useAuth();
  const router = useRouter();

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleCloseDrawer = () => {
    if (isMobile) {
      setMobileOpen(false);
    }
  };

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleProfileMenuClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    logout();
    router.push('/login');
  };

  const drawer = (
    <Box>
      <Box sx={{ 
        p: 2, 
        display: 'flex', 
        alignItems: 'center', 
        backgroundColor: theme.palette.primary.main,
        color: 'white'
      }}>
        <Typography variant="h6" noWrap>
          AICoach
        </Typography>
      </Box>
      <List sx={{ 
        py: 0,
        '& .MuiListItem-root': {
          px: 0
        }
      }}>
        {menuItems.map((item) => (
          <ListItem key={item.text} disablePadding onClick={handleCloseDrawer}>
            <ListItemButton 
              component={Link} 
              href={item.path}
              selected={pathname === item.path}
              sx={{
                backgroundColor: pathname === item.path ? theme.palette.action.selected : 'transparent',
                borderLeft: pathname === item.path ? `4px solid ${theme.palette.primary.main}` : '4px solid transparent',
                '&:hover': {
                  backgroundColor: theme.palette.action.hover,
                },
              }}
            >
              <ListItemIcon sx={{ 
                color: pathname === item.path ? theme.palette.primary.main : 'inherit'
              }}>
                {item.icon}
              </ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
          boxShadow: 'none',
          borderBottom: '1px solid rgba(0, 0, 0, 0.06)'
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          
          <Search sx={{ flexGrow: 1 }}>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Pesquisar..."
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>
          
          <Box sx={{ flexGrow: 0 }} />
          
          <IconButton
            onClick={handleProfileMenuOpen}
            color="inherit"
          >
            <Avatar sx={{ width: 32, height: 32, bgcolor: theme.palette.primary.dark }}>
              {user?.username ? user.username[0].toUpperCase() : 'U'}
            </Avatar>
          </IconButton>
          
          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleProfileMenuClose}
            transformOrigin={{ horizontal: 'right', vertical: 'top' }}
            anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
          >
            <MenuItem component={Link} href="/dashboard/perfil" onClick={handleProfileMenuClose}>
              <Typography variant="inherit">Meu Perfil</Typography>
            </MenuItem>
            <MenuItem onClick={handleLogout}>
              <ListItemIcon>
                <Logout fontSize="small" />
              </ListItemIcon>
              <Typography variant="inherit">Sair</Typography>
            </MenuItem>
          </Menu>
        </Toolbar>
      </AppBar>
      
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
      >
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{ keepMounted: true }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { 
              boxSizing: 'border-box', 
              width: drawerWidth,
              border: 'none'
            },
          }}
        >
          {drawer}
        </Drawer>
        
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { 
              boxSizing: 'border-box', 
              width: drawerWidth,
              border: 'none',
              boxShadow: '0 0 10px rgba(0,0,0,0.1)'
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
    </>
  );
} 