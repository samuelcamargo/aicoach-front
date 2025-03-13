"use client";

import { useState, MouseEvent } from 'react';
import { 
  AppBar, 
  Toolbar, 
  IconButton, 
  Typography, 
  Badge, 
  Avatar, 
  Box, 
  Menu, 
  MenuItem, 
  InputBase,
  useTheme,
  useMediaQuery
} from '@mui/material';
import { 
  Search as SearchIcon, 
  Notifications, 
  Mail, 
  Menu as MenuIcon,
  Person,
  Settings,
  Logout
} from '@mui/icons-material';
import { styled, alpha } from '@mui/material/styles';
import { useAuth } from '../../src/contexts/AuthContext';
import { useRouter } from 'next/navigation';

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
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));

interface HeaderProps {
  toggleDrawer: () => void;
}

export default function Header({ toggleDrawer }: HeaderProps) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  const { user, logout } = useAuth();
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
  const router = useRouter();

  const isMenuOpen = Boolean(anchorEl);
  const menuId = 'primary-account-menu';

  const handleProfileMenuOpen = (event: MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    logout();
    router.push('/login');
  };

  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      id={menuId}
      keepMounted
      open={isMenuOpen}
      onClose={handleMenuClose}
      PaperProps={{
        sx: { minWidth: 180 }
      }}
    >
      <MenuItem onClick={() => {
        handleMenuClose();
        router.push('/dashboard/perfil');
      }}>
        <Person fontSize="small" sx={{ mr: 1 }} />
        Meu Perfil
      </MenuItem>
      <MenuItem onClick={() => {
        handleMenuClose();
        router.push('/dashboard/configuracoes');
      }}>
        <Settings fontSize="small" sx={{ mr: 1 }} />
        Configurações
      </MenuItem>
      <MenuItem onClick={handleLogout}>
        <Logout fontSize="small" sx={{ mr: 1 }} />
        Sair
      </MenuItem>
    </Menu>
  );

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" elevation={0}>
        <Toolbar>
          {/* Botão de menu (visível apenas em dispositivos móveis) */}
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            onClick={toggleDrawer}
            sx={{ mr: 1 }}
          >
            <MenuIcon />
          </IconButton>
          
          {/* Logo centralizado em dispositivos móveis */}
          <Box sx={{ 
            flexGrow: isMobile ? 1 : 0, 
            display: 'flex', 
            justifyContent: isMobile ? 'center' : 'flex-start',
            alignItems: 'center'
          }}>
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ display: { xs: 'block', sm: 'block' } }}
            >
              AICoach
            </Typography>
          </Box>
          
          {/* Campo de busca (ocultado em dispositivos móveis) */}
          {!isMobile && (
            <Search sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Pesquisar..."
                inputProps={{ 'aria-label': 'search' }}
              />
            </Search>
          )}
          
          <Box sx={{ flexGrow: isMobile ? 0 : 1 }} />
          
          {/* Ícones à direita (versão desktop) */}
          <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
            <IconButton size="large" aria-label="show 4 new mails" color="inherit">
              <Badge badgeContent={4} color="error">
                <Mail />
              </Badge>
            </IconButton>
            <IconButton
              size="large"
              aria-label="show 17 new notifications"
              color="inherit"
            >
              <Badge badgeContent={17} color="error">
                <Notifications />
              </Badge>
            </IconButton>
            <IconButton
              size="large"
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="inherit"
            >
              <Avatar sx={{ width: 32, height: 32, bgcolor: theme.palette.primary.main }}>
                {user?.username ? user.username[0].toUpperCase() : 'U'}
              </Avatar>
            </IconButton>
          </Box>
          
          {/* Botão de perfil (visível apenas em mobile) */}
          {isMobile && (
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="inherit"
            >
              <Avatar sx={{ width: 32, height: 32, bgcolor: theme.palette.primary.main }}>
                {user?.username ? user.username[0].toUpperCase() : 'U'}
              </Avatar>
            </IconButton>
          )}
        </Toolbar>
      </AppBar>
      {renderMenu}
    </Box>
  );
} 