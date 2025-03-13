"use client";

import { useState, useEffect } from 'react';
import { 
  AppBar, 
  Toolbar, 
  Drawer, 
  IconButton, 
  Box, 
  List, 
  ListItem, 
  ListItemButton, 
  ListItemIcon, 
  ListItemText, 
  Typography, 
  Avatar, 
  InputBase,
  Menu, 
  MenuItem,
  Divider,
  Badge,
  useTheme,
  useMediaQuery
} from '@mui/material';
import { 
  Menu as MenuIcon, 
  Home, 
  Person, 
  School, 
  Assignment, 
  Analytics, 
  Help,
  ChevronLeft,
  Search as SearchIcon,
  Notifications,
  Mail
} from '@mui/icons-material';
import { styled, alpha } from '@mui/material/styles';
import { useAuth } from '../../src/contexts/AuthContext';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

/**
 * Definição do tipo User
 */
type User = {
  username: string;
  name?: string;
  email?: string;
  role?: string;
  id?: number;
};

// Estilos para a barra de pesquisa
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
      width: '30ch',
    },
  },
}));

// Configuração do menu lateral
const drawerWidth = 240;
const miniDrawerWidth = 64;

// Menu items
const menuItems = [
  { title: 'Dashboard', icon: Home, path: '/dashboard' },
  { title: 'Perfil', icon: Person, path: '/dashboard/perfil' },
  { title: 'Cursos', icon: School, path: '/dashboard/cursos' },
  { title: 'Atividades', icon: Assignment, path: '/dashboard/atividades' },
  { title: 'Análises', icon: Analytics, path: '/dashboard/analises' },
  { title: 'Ajuda', icon: Help, path: '/dashboard/ajuda' },
];

interface MainNavigationProps {
  open: boolean;
  toggleDrawer: () => void;
  closeDrawer: () => void;
  pathname: string;
  user: User;
}

export default function MainNavigation({ open, toggleDrawer, closeDrawer, pathname, user }: MainNavigationProps) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const router = useRouter();
  const { logout } = useAuth();
  
  // Estado para o menu de perfil
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
  const isMenuOpen = Boolean(anchorEl);
  
  // Fechar o drawer quando trocar de página
  useEffect(() => {
    closeDrawer();
  }, [pathname, closeDrawer]);
  
  // Handlers para o menu de perfil
  const handleProfileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  
  const handleMenuClose = () => {
    setAnchorEl(null);
  };
  
  const handleLogout = () => {
    logout();
    router.push('/login');
  };
  
  // Menu do perfil do usuário
  const profileMenu = (
    <Menu
      anchorEl={anchorEl}
      open={isMenuOpen}
      onClose={handleMenuClose}
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
    >
      <MenuItem onClick={handleMenuClose} component={Link} href="/dashboard/perfil">
        Meu Perfil
      </MenuItem>
      <MenuItem onClick={handleMenuClose} component={Link} href="/dashboard/configuracoes">
        Configurações
      </MenuItem>
      <Divider />
      <MenuItem onClick={handleLogout}>Sair</MenuItem>
    </Menu>
  );
  
  // Conteúdo do drawer
  const drawerContent = (
    <>
      <Box sx={{ 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'space-between',
        p: 1,
        ...theme.mixins.toolbar,
        backgroundColor: theme.palette.primary.main,
        color: 'white'
      }}>
        <Typography 
          variant="h6" 
          noWrap 
          component="div" 
          sx={{ 
            px: 1,
            opacity: open || isMobile ? 1 : 0,
            transition: 'opacity 0.2s',
            display: 'flex',
            alignItems: 'center'
          }}
        >
          AICoach
        </Typography>
        <IconButton 
          onClick={toggleDrawer} 
          sx={{ color: 'white' }}
        >
          <ChevronLeft />
        </IconButton>
      </Box>
      <Divider />
      <List sx={{ py: 1 }}>
        {menuItems.map((item) => (
          <ListItem key={item.path} disablePadding sx={{ display: 'block' }}>
            <ListItemButton
              component={Link}
              href={item.path}
              selected={pathname === item.path}
              sx={{
                minHeight: 48,
                px: 2.5,
                py: 1,
                justifyContent: open ? 'initial' : 'center',
                borderLeft: pathname === item.path ? `3px solid ${theme.palette.primary.main}` : 'none',
                backgroundColor: pathname === item.path ? alpha(theme.palette.primary.main, 0.1) : 'transparent',
                '&:hover': {
                  backgroundColor: alpha(theme.palette.primary.main, 0.05),
                }
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 2 : 'auto',
                  justifyContent: 'center',
                  color: pathname === item.path ? theme.palette.primary.main : 'inherit'
                }}
              >
                <item.icon />
              </ListItemIcon>
              {(open || isMobile) && (
                <ListItemText 
                  primary={item.title} 
                  primaryTypographyProps={{
                    fontWeight: pathname === item.path ? 'bold' : 'normal'
                  }}
                />
              )}
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </>
  );
  
  return (
    <>
      {/* AppBar */}
      <AppBar 
        position="fixed" 
        sx={{ 
          zIndex: (theme) => theme.zIndex.drawer + 1,
          boxShadow: 'none',
          borderBottom: `1px solid ${theme.palette.divider}`
        }}
      >
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="open drawer"
            onClick={toggleDrawer}
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ 
              display: { xs: 'block', sm: 'block' },
              mr: 2
            }}
          >
            AICoach
          </Typography>
          
          <Search sx={{ flexGrow: 1, display: { xs: 'none', md: 'block' } }}>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Pesquisar..."
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>
          
          <Box sx={{ flexGrow: 1 }} />
          
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <IconButton 
              color="inherit" 
              sx={{ display: { xs: 'none', md: 'inline-flex' } }}
            >
              <Badge badgeContent={4} color="error">
                <Mail />
              </Badge>
            </IconButton>
            <IconButton 
              color="inherit" 
              sx={{ display: { xs: 'none', md: 'inline-flex' }, mx: 1 }}
            >
              <Badge badgeContent={17} color="error">
                <Notifications />
              </Badge>
            </IconButton>
            <IconButton
              edge="end"
              aria-label="current user account"
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="inherit"
            >
              <Avatar 
                sx={{ 
                  width: 32, 
                  height: 32,
                  bgcolor: theme.palette.primary.main,
                  border: '2px solid white'
                }}
              >
                {user?.username ? user.username[0].toUpperCase() : 'U'}
              </Avatar>
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      
      {/* Menu do perfil */}
      {profileMenu}
      
      {/* Drawer/Menu lateral */}
      <Drawer
        variant={isMobile ? "temporary" : "permanent"}
        open={open}
        onClose={closeDrawer}
        sx={{
          width: open ? drawerWidth : miniDrawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: {
            width: open ? drawerWidth : miniDrawerWidth,
            boxSizing: 'border-box',
            overflowX: 'hidden',
            transition: theme.transitions.create('width', {
              easing: theme.transitions.easing.sharp,
              duration: theme.transitions.duration.enteringScreen,
            }),
            backgroundColor: '#fff',
            borderRight: `1px solid ${theme.palette.divider}`,
            mt: '64px', // Altura do AppBar
            height: 'calc(100% - 64px)'
          },
        }}
        ModalProps={{
          keepMounted: true,
        }}
      >
        {drawerContent}
      </Drawer>
    </>
  );
} 