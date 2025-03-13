"use client";

import { useEffect } from 'react';
import { Box, Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Typography, Divider, IconButton, useTheme, useMediaQuery } from '@mui/material';
import { Home, Person, School, Assignment, Analytics, Help, MenuOpen } from '@mui/icons-material';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const drawerWidth = 240;
const miniDrawerWidth = 64;

interface SidebarProps {
  open: boolean;
  toggleDrawer: () => void;
  closeDrawer: () => void;
}

export default function Sidebar({ open, toggleDrawer, closeDrawer }: SidebarProps) {
  const pathname = usePathname();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
  
  // Fechar o drawer quando mudar de página (em todos os dispositivos)
  useEffect(() => {
    closeDrawer();
  }, [pathname, closeDrawer]);
  
  const drawer = (
    <>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: theme.spacing(0, 1),
          ...theme.mixins.toolbar,
          bgcolor: 'primary.main',
          color: 'white'
        }}
      >
        <Typography variant="h6" noWrap component="div" sx={{ pl: open ? 2 : 0, opacity: open ? 1 : 0, transition: 'opacity 0.2s' }}>
          AICoach
        </Typography>
        <IconButton onClick={toggleDrawer} sx={{ color: 'white' }}>
          <MenuOpen />
        </IconButton>
      </Box>
      <Divider />
      <List>
        <ListItem disablePadding sx={{ display: 'block' }}>
          <ListItemButton
            component={Link}
            href="/dashboard"
            selected={pathname === '/dashboard'}
            sx={{
              minHeight: 48,
              px: 2.5,
              justifyContent: open ? 'initial' : 'center',
              borderLeft: pathname === '/dashboard' ? `3px solid ${theme.palette.primary.main}` : 'none',
              bgcolor: pathname === '/dashboard' ? 'rgba(0, 0, 0, 0.04)' : 'transparent'
            }}
          >
            <ListItemIcon
              sx={{
                minWidth: 0,
                mr: open ? 3 : 'auto',
                justifyContent: 'center',
                color: pathname === '/dashboard' ? 'primary.main' : 'inherit'
              }}
            >
              <Home />
            </ListItemIcon>
            {open && <ListItemText primary="Dashboard" />}
          </ListItemButton>
        </ListItem>
        
        <ListItem disablePadding sx={{ display: 'block' }}>
          <ListItemButton
            component={Link}
            href="/dashboard/perfil"
            selected={pathname === '/dashboard/perfil'}
            sx={{
              minHeight: 48,
              px: 2.5,
              justifyContent: open ? 'initial' : 'center',
              borderLeft: pathname === '/dashboard/perfil' ? `3px solid ${theme.palette.primary.main}` : 'none',
              bgcolor: pathname === '/dashboard/perfil' ? 'rgba(0, 0, 0, 0.04)' : 'transparent'
            }}
          >
            <ListItemIcon
              sx={{
                minWidth: 0,
                mr: open ? 3 : 'auto',
                justifyContent: 'center',
                color: pathname === '/dashboard/perfil' ? 'primary.main' : 'inherit'
              }}
            >
              <Person />
            </ListItemIcon>
            {open && <ListItemText primary="Perfil" />}
          </ListItemButton>
        </ListItem>
        
        <ListItem disablePadding sx={{ display: 'block' }}>
          <ListItemButton
            component={Link}
            href="/dashboard/cursos"
            selected={pathname === '/dashboard/cursos'}
            sx={{
              minHeight: 48,
              px: 2.5,
              justifyContent: open ? 'initial' : 'center',
              borderLeft: pathname === '/dashboard/cursos' ? `3px solid ${theme.palette.primary.main}` : 'none',
              bgcolor: pathname === '/dashboard/cursos' ? 'rgba(0, 0, 0, 0.04)' : 'transparent'
            }}
          >
            <ListItemIcon
              sx={{
                minWidth: 0,
                mr: open ? 3 : 'auto',
                justifyContent: 'center',
                color: pathname === '/dashboard/cursos' ? 'primary.main' : 'inherit'
              }}
            >
              <School />
            </ListItemIcon>
            {open && <ListItemText primary="Cursos" />}
          </ListItemButton>
        </ListItem>
        
        <ListItem disablePadding sx={{ display: 'block' }}>
          <ListItemButton
            component={Link}
            href="/dashboard/atividades"
            selected={pathname === '/dashboard/atividades'}
            sx={{
              minHeight: 48,
              px: 2.5,
              justifyContent: open ? 'initial' : 'center',
              borderLeft: pathname === '/dashboard/atividades' ? `3px solid ${theme.palette.primary.main}` : 'none',
              bgcolor: pathname === '/dashboard/atividades' ? 'rgba(0, 0, 0, 0.04)' : 'transparent'
            }}
          >
            <ListItemIcon
              sx={{
                minWidth: 0,
                mr: open ? 3 : 'auto',
                justifyContent: 'center',
                color: pathname === '/dashboard/atividades' ? 'primary.main' : 'inherit'
              }}
            >
              <Assignment />
            </ListItemIcon>
            {open && <ListItemText primary="Atividades" />}
          </ListItemButton>
        </ListItem>
        
        <ListItem disablePadding sx={{ display: 'block' }}>
          <ListItemButton
            component={Link}
            href="/dashboard/analises"
            selected={pathname === '/dashboard/analises'}
            sx={{
              minHeight: 48,
              px: 2.5,
              justifyContent: open ? 'initial' : 'center',
              borderLeft: pathname === '/dashboard/analises' ? `3px solid ${theme.palette.primary.main}` : 'none',
              bgcolor: pathname === '/dashboard/analises' ? 'rgba(0, 0, 0, 0.04)' : 'transparent'
            }}
          >
            <ListItemIcon
              sx={{
                minWidth: 0,
                mr: open ? 3 : 'auto',
                justifyContent: 'center',
                color: pathname === '/dashboard/analises' ? 'primary.main' : 'inherit'
              }}
            >
              <Analytics />
            </ListItemIcon>
            {open && <ListItemText primary="Análises" />}
          </ListItemButton>
        </ListItem>
        
        <ListItem disablePadding sx={{ display: 'block' }}>
          <ListItemButton
            component={Link}
            href="/dashboard/ajuda"
            selected={pathname === '/dashboard/ajuda'}
            sx={{
              minHeight: 48,
              px: 2.5,
              justifyContent: open ? 'initial' : 'center',
              borderLeft: pathname === '/dashboard/ajuda' ? `3px solid ${theme.palette.primary.main}` : 'none',
              bgcolor: pathname === '/dashboard/ajuda' ? 'rgba(0, 0, 0, 0.04)' : 'transparent'
            }}
          >
            <ListItemIcon
              sx={{
                minWidth: 0,
                mr: open ? 3 : 'auto',
                justifyContent: 'center',
                color: pathname === '/dashboard/ajuda' ? 'primary.main' : 'inherit'
              }}
            >
              <Help />
            </ListItemIcon>
            {open && <ListItemText primary="Ajuda" />}
          </ListItemButton>
        </ListItem>
      </List>
    </>
  );

  return (
    <>
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
            borderRight: isMobile ? 'none' : `1px solid ${theme.palette.divider}`
          },
        }}
        ModalProps={{
          keepMounted: true,
        }}
      >
        {drawer}
      </Drawer>
    </>
  );
} 