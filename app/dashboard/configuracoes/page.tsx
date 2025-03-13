"use client";

import { useState } from "react";
import { 
  Box, 
  Typography, 
  Paper, 
  Switch, 
  List, 
  ListItem, 
  ListItemText, 
  Divider, 
  Grid, 
  FormControl, 
  FormControlLabel, 
  Radio, 
  RadioGroup, 
  Button, 
  TextField, 
  Alert
} from "@mui/material";
import { DarkMode, Notifications, Language, Lock, Save } from "@mui/icons-material";

export default function ConfiguracoesPage() {
  const [notificacoesEmail, setNotificacoesEmail] = useState(true);
  const [notificacoesPush, setNotificacoesPush] = useState(true);
  const [notificacoesAtividades, setNotificacoesAtividades] = useState(true);
  const [notificacoesMensagens, setNotificacoesMensagens] = useState(true);
  const [temaEscuro, setTemaEscuro] = useState(false);
  const [idioma, setIdioma] = useState("pt-BR");
  const [salvando, setSalvando] = useState(false);
  const [saved, setSaved] = useState(false);

  const handleSalvar = () => {
    setSalvando(true);
    // Simulando uma chamada de API
    setTimeout(() => {
      setSalvando(false);
      setSaved(true);
      setTimeout(() => setSaved(false), 3000);
    }, 1000);
  };

  return (
    <Box sx={{ py: 3 }}>
      <Typography variant="h4" fontWeight="bold" gutterBottom>
        Configurações
      </Typography>
      
      {saved && (
        <Alert severity="success" sx={{ mb: 3 }}>
          Configurações salvas com sucesso!
        </Alert>
      )}
      
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <Paper sx={{ p: 3, borderRadius: 2 }}>
            <Typography variant="h6" sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
              <Notifications sx={{ mr: 1 }} />
              Notificações
            </Typography>
            <List>
              <ListItem>
                <ListItemText 
                  primary="Notificações por Email" 
                  secondary="Receba atualizações importantes por email"
                />
                <Switch 
                  checked={notificacoesEmail} 
                  onChange={(e) => setNotificacoesEmail(e.target.checked)} 
                />
              </ListItem>
              <Divider />
              <ListItem>
                <ListItemText 
                  primary="Notificações Push" 
                  secondary="Ative notificações do navegador"
                />
                <Switch 
                  checked={notificacoesPush} 
                  onChange={(e) => setNotificacoesPush(e.target.checked)} 
                />
              </ListItem>
              <Divider />
              <ListItem>
                <ListItemText 
                  primary="Atividades e Prazos" 
                  secondary="Lembretes de prazos próximos"
                />
                <Switch 
                  checked={notificacoesAtividades} 
                  onChange={(e) => setNotificacoesAtividades(e.target.checked)} 
                />
              </ListItem>
              <Divider />
              <ListItem>
                <ListItemText 
                  primary="Mensagens" 
                  secondary="Notificações de novas mensagens"
                />
                <Switch 
                  checked={notificacoesMensagens} 
                  onChange={(e) => setNotificacoesMensagens(e.target.checked)} 
                />
              </ListItem>
            </List>
          </Paper>
        </Grid>
        
        <Grid item xs={12} md={6}>
          <Paper sx={{ p: 3, borderRadius: 2, mb: 3 }}>
            <Typography variant="h6" sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
              <DarkMode sx={{ mr: 1 }} />
              Aparência
            </Typography>
            <List>
              <ListItem>
                <ListItemText 
                  primary="Modo Escuro" 
                  secondary="Alternar entre tema claro e escuro"
                />
                <Switch 
                  checked={temaEscuro} 
                  onChange={(e) => setTemaEscuro(e.target.checked)} 
                />
              </ListItem>
            </List>
          </Paper>
          
          <Paper sx={{ p: 3, borderRadius: 2 }}>
            <Typography variant="h6" sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
              <Language sx={{ mr: 1 }} />
              Idioma e Região
            </Typography>
            <FormControl component="fieldset">
              <RadioGroup 
                value={idioma} 
                onChange={(e) => setIdioma(e.target.value)}
              >
                <FormControlLabel value="pt-BR" control={<Radio />} label="Português (Brasil)" />
                <FormControlLabel value="en-US" control={<Radio />} label="English (US)" />
                <FormControlLabel value="es-ES" control={<Radio />} label="Español" />
              </RadioGroup>
            </FormControl>
          </Paper>
        </Grid>
        
        <Grid item xs={12}>
          <Paper sx={{ p: 3, borderRadius: 2 }}>
            <Typography variant="h6" sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
              <Lock sx={{ mr: 1 }} />
              Segurança e Privacidade
            </Typography>
            <Grid container spacing={3}>
              <Grid item xs={12} md={6}>
                <TextField
                  label="Senha Atual"
                  type="password"
                  fullWidth
                  margin="normal"
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  label="Nova Senha"
                  type="password"
                  fullWidth
                  margin="normal"
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  label="Confirmar Nova Senha"
                  type="password"
                  fullWidth
                  margin="normal"
                />
              </Grid>
            </Grid>
          </Paper>
        </Grid>
      </Grid>
      
      <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 3 }}>
        <Button 
          variant="contained" 
          color="primary"
          startIcon={<Save />}
          onClick={handleSalvar}
          disabled={salvando}
        >
          {salvando ? 'Salvando...' : 'Salvar Configurações'}
        </Button>
      </Box>
    </Box>
  );
} 