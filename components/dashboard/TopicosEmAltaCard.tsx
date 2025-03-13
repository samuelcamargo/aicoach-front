"use client";

import { Box, Card, CardContent, Typography, Chip, Avatar, List, ListItem, ListItemAvatar, ListItemText, Rating } from '@mui/material';
import { AutoAwesome, TrendingUp } from '@mui/icons-material';
import { motion } from 'framer-motion';

const topicos = [
  { 
    id: 1, 
    nome: 'React Hooks Avançado', 
    popularidade: 4.9, 
    inscritos: 1245,
    categoria: 'Frontend',
    imagem: '🚀'
  },
  { 
    id: 2, 
    nome: 'APIs com Node.js', 
    popularidade: 4.7, 
    inscritos: 987,
    categoria: 'Backend', 
    imagem: '⚡'
  },
  { 
    id: 3, 
    nome: 'Design System com Figma', 
    popularidade: 4.6, 
    inscritos: 875,
    categoria: 'Design', 
    imagem: '🎨'
  }
];

export default function TopicosEmAltaCard() {
  return (
    <Card sx={{ height: '100%' }}>
      <CardContent>
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
          <TrendingUp color="primary" sx={{ mr: 1 }} />
          <Typography variant="h6">
            Tópicos em Alta
          </Typography>
        </Box>
        
        <List>
          {topicos.map((topico, index) => (
            <motion.div
              key={topico.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <ListItem 
                alignItems="flex-start"
                sx={{ 
                  mb: 1, 
                  backgroundColor: 'rgba(0,0,0,0.02)', 
                  borderRadius: 2,
                  '&:hover': {
                    backgroundColor: 'rgba(0,0,0,0.05)', 
                  }
                }}
              >
                <ListItemAvatar>
                  <Avatar sx={{ fontSize: '1.5rem', bgcolor: index === 0 ? 'primary.main' : index === 1 ? 'secondary.main' : 'warning.main' }}>
                    {topico.imagem}
                  </Avatar>
                </ListItemAvatar>
                <ListItemText
                  primary={
                    <Box sx={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap' }}>
                      <Typography variant="subtitle1" sx={{ mr: 1 }}>
                        {topico.nome}
                      </Typography>
                      {index === 0 && (
                        <Chip 
                          size="small" 
                          icon={<AutoAwesome fontSize="small" />} 
                          label="Destaque" 
                          color="primary" 
                          variant="outlined" 
                          sx={{ height: 20 }}
                        />
                      )}
                    </Box>
                  }
                  secondary={
                    <Box>
                      <Rating value={topico.popularidade} precision={0.1} size="small" readOnly />
                      <Box sx={{ display: 'flex', mt: 0.5 }}>
                        <Chip 
                          label={topico.categoria} 
                          size="small" 
                          sx={{ mr: 1, height: 20 }} 
                        />
                        <Typography variant="caption" color="text.secondary">
                          {topico.inscritos.toLocaleString()} inscritos
                        </Typography>
                      </Box>
                    </Box>
                  }
                />
              </ListItem>
            </motion.div>
          ))}
        </List>
      </CardContent>
    </Card>
  );
} 