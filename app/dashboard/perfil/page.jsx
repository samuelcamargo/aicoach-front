"use client";

import { useState } from "react";
import { 
  Box, 
  CardContent, 
  TextField, 
  Button, 
  Avatar, 
  Typography, 
  Grid, 
  Tabs, 
  Tab, 
  Paper
} from "@mui/material";
import { LocalizationProvider, DatePicker } from '@mui/x-date-pickers';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { ptBR } from "date-fns/locale";
import { Edit, SaveAlt } from "@mui/icons-material";

export default function PerfilPage() {
  const [activeTab, setActiveTab] = useState(0);
  const [dataNascimento, setDataNascimento] = useState(new Date(1990, 0, 1));

  // Dados simulados do usuário
  const [dadosUsuario] = useState({
    nome: "Maria Silva",
    email: "maria.silva@exemplo.com",
    telefone: "(11) 98765-4321",
    dataNascimento: "01/01/1990",
    biografia: "Estudante de tecnologia apaixonada por desenvolvimento web e inteligência artificial.",
    interesses: ["Programação", "IA", "UX/UI Design", "Mobile"],
    objetivos: "Aprender React e desenvolver aplicações full-stack.",
    github: "mariasilva",
    linkedin: "mariasilva",
    website: "mariasilva.dev"
  });

  const handleTabChange = (event, newValue) => {
    setActiveTab(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Typography variant="h4" fontWeight="bold" sx={{ mb: 4 }}>
        Meu Perfil
      </Typography>

      <Paper 
        sx={{ 
          borderRadius: 2, 
          overflow: 'hidden',
          mb: 4
        }}
      >
        <Box sx={{ p: 3, bgcolor: 'primary.light', color: 'white' }}>
          <Grid container spacing={3} alignItems="center">
            <Grid item xs={12} sm={2}>
              <Avatar 
                sx={{ 
                  width: { xs: 80, sm: 100 },
                  height: { xs: 80, sm: 100 },
                  bgcolor: 'primary.main',
                  fontSize: { xs: '1.5rem', sm: '2rem' },
                  border: '3px solid white',
                  mx: { xs: 'auto', sm: 0 }
                }}
              >
                MS
              </Avatar>
            </Grid>
            <Grid item xs={12} sm={10}>
              <Typography variant="h5" fontWeight="bold" sx={{ textAlign: { xs: 'center', sm: 'left' } }}>
                {dadosUsuario.nome}
              </Typography>
              <Typography variant="body1" sx={{ textAlign: { xs: 'center', sm: 'left' } }}>
                {dadosUsuario.email}
              </Typography>
              <Typography variant="body2" sx={{ mt: 1, opacity: 0.9, textAlign: { xs: 'center', sm: 'left' } }}>
                {dadosUsuario.biografia}
              </Typography>
            </Grid>
            <Grid item>
              <Button 
                variant="outlined" 
                color="inherit" 
                startIcon={<Edit />}
                sx={{ 
                  borderColor: 'white', 
                  '&:hover': { borderColor: 'white', bgcolor: 'rgba(255,255,255,0.1)' } 
                }}
              >
                Editar Foto
              </Button>
            </Grid>
          </Grid>
        </Box>
        
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <Tabs
            value={activeTab}
            onChange={handleTabChange}
            variant="scrollable"
            scrollButtons="auto"
            sx={{ 
              borderBottom: 1, 
              borderColor: 'divider'
            }}
          >
            <Tab label="Informações Pessoais" value="pessoal" />
            <Tab label="Preferências" value="preferencias" />
            <Tab label="Social" value="social" />
          </Tabs>
        </Box>
        
        <CardContent sx={{ minHeight: '300px', alignItems: 'flex-start' }}>
          {activeTab === "pessoal" && (
            <Grid container spacing={3}>
              <Grid item xs={12} md={6}>
                <TextField
                  fullWidth
                  label="Nome Completo"
                  defaultValue={dadosUsuario.nome}
                  margin="normal"
                />
              </Grid>
              
              <Grid item xs={12} md={6}>
                <TextField
                  fullWidth
                  label="Email"
                  defaultValue={dadosUsuario.email}
                  margin="normal"
                />
              </Grid>
              
              <Grid item xs={12} md={6}>
                <TextField
                  fullWidth
                  label="Telefone"
                  defaultValue={dadosUsuario.telefone}
                  margin="normal"
                />
              </Grid>
              
              <Grid item xs={12} md={6}>
                <LocalizationProvider dateAdapter={AdapterDateFns} adapterLocale={ptBR}>
                  <DatePicker
                    label="Data de Nascimento"
                    value={dataNascimento}
                    onChange={(newDate) => setDataNascimento(newDate)}
                    slotProps={{ textField: { fullWidth: true, margin: "normal" } }}
                  />
                </LocalizationProvider>
              </Grid>
              
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Biografia"
                  defaultValue={dadosUsuario.biografia}
                  margin="normal"
                  multiline
                  rows={4}
                />
              </Grid>
              
              <Grid item xs={12} md={6}>
                <TextField
                  fullWidth
                  label="Interesses (separados por vírgula)"
                  defaultValue={dadosUsuario.interesses.join(", ")}
                  margin="normal"
                />
              </Grid>
              
              <Grid item xs={12} md={6}>
                <TextField
                  fullWidth
                  label="Objetivos de Aprendizado"
                  defaultValue={dadosUsuario.objetivos}
                  margin="normal"
                  multiline
                  rows={2}
                />
              </Grid>
              
              <Grid item xs={12}>
                <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 2 }}>
                  <Button 
                    variant="contained" 
                    color="primary"
                    startIcon={<SaveAlt />}
                  >
                    Salvar Alterações
                  </Button>
                </Box>
              </Grid>
            </Grid>
          )}
          
          {activeTab === "preferencias" && (
            <Box sx={{ pt: 2, textAlign: 'left', width: '100%' }}>
              <Typography variant="h6" gutterBottom>Preferências de Estudo</Typography>
              
              <Grid container spacing={3}>
                <Grid item xs={12} md={6}>
                  <TextField
                    select
                    fullWidth
                    label="Horário preferido para estudos"
                    defaultValue="noite"
                    margin="normal"
                    SelectProps={{
                      native: true,
                    }}
                  >
                    <option value="manha">Manhã (6h - 12h)</option>
                    <option value="tarde">Tarde (12h - 18h)</option>
                    <option value="noite">Noite (18h - 22h)</option>
                    <option value="madrugada">Madrugada (22h - 6h)</option>
                  </TextField>
                </Grid>
                
                <Grid item xs={12} md={6}>
                  <TextField
                    select
                    fullWidth
                    label="Dias preferidos para estudos"
                    defaultValue="todos"
                    margin="normal"
                    SelectProps={{
                      native: true,
                    }}
                  >
                    <option value="todos">Todos os dias</option>
                    <option value="diasUteis">Dias úteis (Segunda a Sexta)</option>
                    <option value="fimSemana">Fins de semana</option>
                    <option value="alternados">Dias alternados</option>
                  </TextField>
                </Grid>
                
                <Grid item xs={12}>
                  <Button 
                    variant="contained" 
                    color="primary"
                    startIcon={<SaveAlt />}
                  >
                    Salvar Preferências
                  </Button>
                </Grid>
              </Grid>
            </Box>
          )}
          
          {activeTab === "social" && (
            <Grid container spacing={3}>
              <Grid item xs={12} md={6}>
                <TextField
                  fullWidth
                  label="GitHub"
                  defaultValue={dadosUsuario.github}
                  margin="normal"
                  InputProps={{
                    startAdornment: <Box component="span" sx={{ mr: 1 }}>github.com/</Box>,
                  }}
                />
              </Grid>
              
              <Grid item xs={12} md={6}>
                <TextField
                  fullWidth
                  label="LinkedIn"
                  defaultValue={dadosUsuario.linkedin}
                  margin="normal"
                  InputProps={{
                    startAdornment: <Box component="span" sx={{ mr: 1 }}>linkedin.com/in/</Box>,
                  }}
                />
              </Grid>
              
              <Grid item xs={12} md={6}>
                <TextField
                  fullWidth
                  label="Website"
                  defaultValue={dadosUsuario.website}
                  margin="normal"
                />
              </Grid>
              
              <Grid item xs={12}>
                <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 2 }}>
                  <Button 
                    variant="contained" 
                    color="primary"
                    startIcon={<SaveAlt />}
                  >
                    Salvar Alterações
                  </Button>
                </Box>
              </Grid>
            </Grid>
          )}
        </CardContent>
      </Paper>
    </Box>
  );
} 