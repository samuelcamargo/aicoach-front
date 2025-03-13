"use client";

import { Box, Card, CardContent, Typography, Chip, Button, List, ListItem, ListItemText, ListItemSecondaryAction, Divider } from '@mui/material';
import { AccessTime, Assignment, CalendarMonth, Timer } from '@mui/icons-material';
import { motion } from 'framer-motion';

const atividades = [
  { 
    id: 1, 
    titulo: 'Projeto Final React', 
    tipo: 'Entrega',
    curso: 'React Avançado',
    prazo: '12 Nov, 23:59',
    estimativa: '4 horas',
    urgente: true
  },
  { 
    id: 2, 
    titulo: 'Quiz de JavaScript', 
    tipo: 'Teste',
    curso: 'JavaScript ES6+',
    prazo: '15 Nov, 14:00',
    estimativa: '30 min'
  },
  { 
    id: 3, 
    titulo: 'Feedback de Projeto', 
    tipo: 'Avaliação',
    curso: 'UX/UI Design',
    prazo: '18 Nov, 18:00',
    estimativa: '1 hora'
  }
];

export default function ProximasAtividadesCard() {
  return (
    <Card sx={{ height: '100%' }}>
      <CardContent>
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
          <CalendarMonth color="primary" sx={{ mr: 1 }} />
          <Typography variant="h6">
            Próximas Atividades
          </Typography>
        </Box>
        
        <List>
          {atividades.map((atividade, index) => (
            <motion.div
              key={atividade.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: index * 0.15 }}
            >
              <>
                <ListItem 
                  alignItems="flex-start"
                  sx={{ 
                    py: 1.5,
                    borderLeft: atividade.urgente ? '4px solid' : 'none',
                    borderColor: 'error.main',
                    pl: atividade.urgente ? 1.5 : 0
                  }}
                >
                  <ListItemText
                    primary={
                      <Box sx={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap' }}>
                        <Typography variant="subtitle1" sx={{ mr: 1 }}>
                          {atividade.titulo}
                        </Typography>
                        <Chip 
                          size="small" 
                          label={atividade.tipo} 
                          color={
                            atividade.tipo === 'Entrega' ? 'primary' : 
                            atividade.tipo === 'Teste' ? 'secondary' : 
                            'info'
                          }
                          sx={{ height: 20 }}
                        />
                      </Box>
                    }
                    secondary={
                      <Box sx={{ mt: 0.5 }}>
                        <Typography variant="body2" color="text.secondary">
                          {atividade.curso}
                        </Typography>
                        <Box sx={{ display: 'flex', alignItems: 'center', mt: 0.5 }}>
                          <AccessTime fontSize="small" sx={{ mr: 0.5, fontSize: 16, color: 'text.disabled' }} />
                          <Typography variant="caption" color="text.secondary" sx={{ mr: 2 }}>
                            {atividade.prazo}
                          </Typography>
                          
                          <Timer fontSize="small" sx={{ mr: 0.5, fontSize: 16, color: 'text.disabled' }} />
                          <Typography variant="caption" color="text.secondary">
                            {atividade.estimativa}
                          </Typography>
                        </Box>
                      </Box>
                    }
                  />
                  <ListItemSecondaryAction>
                    <Button 
                      variant="outlined" 
                      size="small"
                      startIcon={<Assignment />}
                    >
                      Iniciar
                    </Button>
                  </ListItemSecondaryAction>
                </ListItem>
                {index < atividades.length - 1 && <Divider component="li" />}
              </>
            </motion.div>
          ))}
        </List>
      </CardContent>
    </Card>
  );
} 