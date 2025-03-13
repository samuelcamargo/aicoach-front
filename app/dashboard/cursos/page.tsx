"use client";

import { useState } from "react";
import { 
  Grid, 
  Card, 
  CardContent, 
  CardMedia, 
  Typography, 
  Box, 
  Chip, 
  LinearProgress, 
  Button, 
  TextField, 
  IconButton,
  Paper,
  InputAdornment
} from "@mui/material";
import { Search, FilterList, MenuBook, VideoLibrary } from "@mui/icons-material";

export default function CursosPage() {
  const [pesquisa, setPesquisa] = useState("");
  
  const cursos = [
    {
      id: 1,
      titulo: "Fundamentos de React",
      descricao: "Aprenda React do zero ao avançado",
      imagem: "https://via.placeholder.com/300x150",
      categoria: "Desenvolvimento Frontend",
      progresso: 75,
      modulos: 12,
      duracao: "20 horas",
      instrutor: "João Silva"
    },
    {
      id: 2,
      titulo: "Machine Learning com Python",
      descricao: "Teoria e prática dos principais algoritmos de ML",
      imagem: "https://via.placeholder.com/300x150",
      categoria: "Inteligência Artificial",
      progresso: 30,
      modulos: 15,
      duracao: "25 horas",
      instrutor: "Ana Costa"
    },
    {
      id: 3,
      titulo: "Design UX/UI: Princípios e Ferramentas",
      descricao: "Criando interfaces centradas no usuário",
      imagem: "https://via.placeholder.com/300x150",
      categoria: "Design",
      progresso: 50,
      modulos: 10,
      duracao: "15 horas",
      instrutor: "Pedro Mendes"
    },
    {
      id: 4,
      titulo: "Desenvolvimento Backend com Node.js",
      descricao: "Construindo APIs e serviços robustos",
      imagem: "https://via.placeholder.com/300x150",
      categoria: "Desenvolvimento Backend",
      progresso: 10,
      modulos: 14,
      duracao: "22 horas",
      instrutor: "Carla Souza"
    }
  ];

  const cursosFiltrados = cursos.filter(curso => 
    curso.titulo.toLowerCase().includes(pesquisa.toLowerCase()) ||
    curso.categoria.toLowerCase().includes(pesquisa.toLowerCase())
  );

  return (
    <Box sx={{ width: '100%' }}>
      <Typography variant="h4" fontWeight="bold" gutterBottom sx={{ fontSize: { xs: '1.5rem', sm: '2rem' } }}>
        Meus Cursos
      </Typography>
      
      <Paper sx={{ p: 2, mb: 4, display: 'flex', alignItems: 'center' }}>
        <TextField
          fullWidth
          placeholder="Pesquisar cursos..."
          value={pesquisa}
          onChange={(e) => setPesquisa(e.target.value)}
          variant="outlined"
          size="small"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <Search />
              </InputAdornment>
            ),
          }}
        />
        <IconButton size="small" sx={{ ml: 1 }}>
          <FilterList />
        </IconButton>
      </Paper>
      
      <Grid container spacing={3}>
        {cursosFiltrados.map(curso => (
          <Grid item xs={12} sm={6} lg={4} key={curso.id}>
            <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
              <CardMedia
                component="img"
                height="140"
                image={curso.imagem}
                alt={curso.titulo}
              />
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography variant="h6" gutterBottom>
                  {curso.titulo}
                </Typography>
                
                <Chip 
                  label={curso.categoria}
                  size="small"
                  sx={{ mb: 2 }}
                  color="primary"
                  variant="outlined"
                />
                
                <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                  {curso.descricao}
                </Typography>
                
                <Box sx={{ mb: 2 }}>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 0.5 }}>
                    <Typography variant="body2">Progresso</Typography>
                    <Typography variant="body2" fontWeight="bold">{curso.progresso}%</Typography>
                  </Box>
                  <LinearProgress variant="determinate" value={curso.progresso} />
                </Box>
                
                <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 2 }}>
                  <Typography variant="body2">
                    <MenuBook fontSize="small" sx={{ verticalAlign: 'middle', mr: 0.5 }} />
                    {curso.modulos} módulos
                  </Typography>
                  <Typography variant="body2">
                    <VideoLibrary fontSize="small" sx={{ verticalAlign: 'middle', mr: 0.5 }} />
                    {curso.duracao}
                  </Typography>
                </Box>
                
                <Button 
                  variant="contained" 
                  color="primary"
                  fullWidth
                >
                  Continuar Aprendendo
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
} 