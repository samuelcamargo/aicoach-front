"use client";

import { useState } from "react";
import { 
  Box, 
  Typography, 
  Tabs, 
  Tab, 
  Paper, 
  List, 
  ListItem, 
  ListItemText, 
  ListItemIcon, 
  Chip, 
  Button, 
  Divider,
  IconButton
} from "@mui/material";
import { 
  Assignment, 
  CheckCircle, 
  MenuBook, 
  Code, 
  VideoLibrary, 
  MoreVert, 
  AccessTime,
  FilterList
} from "@mui/icons-material";
import { SyntheticEvent } from "react";

// Definindo tipos para os dados
type TipoAtividade = "projeto" | "quiz" | "leitura" | "video";
type Dificuldade = "Fácil" | "Médio" | "Difícil";

export default function AtividadesPage() {
  const [tabValue, setTabValue] = useState(0);
  
  const handleTabChange = (_event: SyntheticEvent, newValue: number) => {
    setTabValue(newValue);
  };
  
  const handleFilterClick = () => {
    // Função para uso futuro
  };
  
  const atividades = {
    pendentes: [
      {
        id: 1,
        titulo: "Projeto: API REST com Express",
        curso: "Desenvolvimento Backend com Node.js",
        tipo: "projeto",
        prazo: "26/01/2025",
        dificuldade: "Médio",
        tempo: "4 horas"
      },
      {
        id: 2,
        titulo: "Quiz: HTML Avançado",
        curso: "Desenvolvimento Frontend Completo",
        tipo: "quiz",
        prazo: "22/01/2025",
        dificuldade: "Fácil",
        tempo: "30 minutos"
      },
      {
        id: 3,
        titulo: "Leitura: Princípios SOLID",
        curso: "Arquitetura de Software",
        tipo: "leitura",
        prazo: "24/01/2025",
        dificuldade: "Médio",
        tempo: "1 hora"
      },
      {
        id: 4,
        titulo: "Assistir: Introdução ao GraphQL",
        curso: "APIs Modernas",
        tipo: "video",
        prazo: "21/01/2025",
        dificuldade: "Fácil",
        tempo: "45 minutos"
      }
    ],
    concluidas: [
      {
        id: 5,
        titulo: "Projeto: Landing Page",
        curso: "Desenvolvimento Frontend Completo",
        tipo: "projeto",
        concluido: "18/01/2025",
        dificuldade: "Médio",
        avaliacao: 9.5
      },
      {
        id: 6,
        titulo: "Quiz: Fundamentos de JavaScript",
        curso: "Desenvolvimento Frontend Completo",
        tipo: "quiz",
        concluido: "16/01/2025",
        dificuldade: "Fácil",
        avaliacao: 8.0
      }
    ]
  };
  
  const getTipoIcon = (tipo: TipoAtividade) => {
    switch (tipo) {
      case "projeto": return <Code />;
      case "quiz": return <Assignment />;
      case "leitura": return <MenuBook />;
      case "video": return <VideoLibrary />;
      default: return <Assignment />;
    }
  };
  
  const getDificuldadeColor = (dificuldade: Dificuldade) => {
    switch (dificuldade) {
      case "Fácil": return "success";
      case "Médio": return "warning";
      case "Difícil": return "error";
      default: return "default";
    }
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ 
        display: 'flex', 
        flexDirection: { xs: 'column', sm: 'row' }, 
        justifyContent: 'space-between', 
        alignItems: { xs: 'flex-start', sm: 'center' }, 
        mb: 3 
      }}>
        <Typography variant="h4" fontWeight="bold" sx={{ mb: { xs: 2, sm: 0 }, fontSize: { xs: '1.5rem', sm: '2rem' } }}>
          Minhas Atividades
        </Typography>
        <Box sx={{ display: 'flex', width: { xs: '100%', sm: 'auto' } }}>
          <Button 
            variant="contained" 
            color="primary"
            sx={{ mr: 1, flex: { xs: 1, sm: 'none' } }}
          >
            Todas
          </Button>
          <Button 
            variant="outlined" 
            onClick={handleFilterClick}
            startIcon={<FilterList />}
            sx={{ flex: { xs: 1, sm: 'none' } }}
          >
            Filtrar
          </Button>
        </Box>
      </Box>
      
      <Paper sx={{ borderRadius: 2, overflow: 'hidden' }}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <Tabs 
            value={tabValue}
            onChange={handleTabChange}
            variant="scrollable"
            scrollButtons="auto"
            sx={{ borderBottom: 1, borderColor: 'divider' }}
          >
            <Tab 
              label={
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  <Assignment sx={{ mr: 1 }} />
                  Pendentes ({atividades.pendentes.length})
                </Box>
              } 
              value="pendentes" 
            />
            <Tab 
              label={
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  <CheckCircle sx={{ mr: 1 }} />
                  Concluídas ({atividades.concluidas.length})
                </Box>
              } 
              value="concluidas" 
            />
          </Tabs>
        </Box>
        
        <List>
          {tabValue === 0 ? (
            atividades.pendentes.map((atividade) => (
              <Box key={atividade.id}>
                <ListItem sx={{ py: 2 }}>
                  <ListItemIcon>
                    {getTipoIcon(atividade.tipo as TipoAtividade)}
                  </ListItemIcon>
                  <ListItemText
                    primary={
                      <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <Typography variant="subtitle1" fontWeight="medium">
                          {atividade.titulo}
                        </Typography>
                        <Chip 
                          label={atividade.dificuldade} 
                          size="small" 
                          color={getDificuldadeColor(atividade.dificuldade as Dificuldade)} 
                          sx={{ ml: 1 }}
                        />
                      </Box>
                    }
                    secondary={
                      <>
                        <Typography variant="body2" color="text.secondary">
                          {atividade.curso}
                        </Typography>
                        <Box sx={{ display: 'flex', alignItems: 'center', mt: 1 }}>
                          <AccessTime fontSize="small" color="action" />
                          <Typography variant="body2" color="text.secondary" sx={{ ml: 0.5, mr: 2 }}>
                            {atividade.tempo}
                          </Typography>
                          <Typography variant="body2" fontWeight="medium" color="error">
                            Prazo: {atividade.prazo}
                          </Typography>
                        </Box>
                      </>
                    }
                  />
                  <Button 
                    variant="outlined" 
                    color="primary"
                    sx={{ mr: 1 }}
                  >
                    Iniciar
                  </Button>
                  <IconButton>
                    <MoreVert />
                  </IconButton>
                </ListItem>
                <Divider component="li" />
              </Box>
            ))
          ) : tabValue === 1 ? (
            atividades.concluidas.map((atividade) => (
              <Box key={atividade.id}>
                <ListItem sx={{ py: 2 }}>
                  <ListItemIcon>
                    {getTipoIcon(atividade.tipo as TipoAtividade)}
                  </ListItemIcon>
                  <ListItemText
                    primary={
                      <Box sx={{ display: 'flex', alignItems: 'center' }}>
                        <Typography variant="subtitle1" fontWeight="medium">
                          {atividade.titulo}
                        </Typography>
                        <Chip 
                          label={atividade.dificuldade} 
                          size="small" 
                          color={getDificuldadeColor(atividade.dificuldade as Dificuldade)} 
                          sx={{ ml: 1 }}
                        />
                      </Box>
                    }
                    secondary={
                      <>
                        <Typography variant="body2" color="text.secondary">
                          {atividade.curso}
                        </Typography>
                        <Box sx={{ display: 'flex', alignItems: 'center', mt: 1 }}>
                          <AccessTime fontSize="small" color="action" />
                          <Typography variant="body2" color="text.secondary" sx={{ ml: 0.5, mr: 2 }}>
                            Concluído: {atividade.concluido}
                          </Typography>
                          <Typography variant="body2" fontWeight="medium">
                            Avaliação: {atividade.avaliacao}/10
                          </Typography>
                        </Box>
                      </>
                    }
                  />
                  <Button 
                    variant="outlined" 
                    color="primary"
                    sx={{ mr: 1 }}
                  >
                    Revisar
                  </Button>
                  <IconButton>
                    <MoreVert />
                  </IconButton>
                </ListItem>
                <Divider component="li" />
              </Box>
            ))
          ) : (
            <Typography variant="body1" sx={{ p: 2 }}>
              Nenhuma atividade disponível para essa aba.
            </Typography>
          )}
        </List>
      </Paper>
    </Box>
  );
} 