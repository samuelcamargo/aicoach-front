"use client";

import { useState } from "react";
import { Box, Typography, Grid, Paper, Tabs, Tab, Button } from "@mui/material";
import { BarChart, Timeline, PieChart } from "@mui/icons-material";

export default function AnalisesPage() {
  const [tabValue, setTabValue] = useState(0);

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Typography variant="h4" fontWeight="bold" gutterBottom>
        Análises de Desempenho
      </Typography>
      
      <Paper sx={{ mb: 4, borderRadius: 2, overflow: 'hidden' }}>
        <Tabs
          value={tabValue}
          onChange={handleTabChange}
          variant="fullWidth"
          sx={{ borderBottom: 1, borderColor: 'divider' }}
        >
          <Tab 
            icon={<BarChart />} 
            label="Desempenho por Curso" 
            iconPosition="start"
          />
          <Tab 
            icon={<Timeline />} 
            label="Progresso ao Longo do Tempo" 
            iconPosition="start"
          />
          <Tab 
            icon={<PieChart />} 
            label="Distribuição de Tempo" 
            iconPosition="start"
          />
        </Tabs>
        
        <Box sx={{ p: 3 }}>
          {tabValue === 0 && (
            <Box>
              <Typography variant="h6" gutterBottom>
                Desempenho por Curso
              </Typography>
              <Typography variant="body1" color="text.secondary">
                Esta visualização mostra seu desempenho em cada curso que você está inscrito.
                Dados de exemplo são mostrados. Em uma implementação real, você veria seus 
                próprios dados de desempenho.
              </Typography>
              
              <Box sx={{ 
                height: 300, 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center',
                mt: 4,
                bgcolor: 'action.hover',
                borderRadius: 1
              }}>
                <Typography variant="h6" color="text.secondary">
                  Gráfico de Desempenho por Curso
                </Typography>
              </Box>
            </Box>
          )}
          
          {tabValue === 1 && (
            <Box>
              <Typography variant="h6" gutterBottom>
                Progresso ao Longo do Tempo
              </Typography>
              <Typography variant="body1" color="text.secondary">
                Esta visualização mostra seu progresso em todos os cursos ao longo do tempo.
                Dados de exemplo são mostrados. Em uma implementação real, você veria seu 
                próprio progresso ao longo do tempo.
              </Typography>
              
              <Box sx={{ 
                height: 300, 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center',
                mt: 4,
                bgcolor: 'action.hover',
                borderRadius: 1
              }}>
                <Typography variant="h6" color="text.secondary">
                  Gráfico de Progresso ao Longo do Tempo
                </Typography>
              </Box>
            </Box>
          )}
          
          {tabValue === 2 && (
            <Box>
              <Typography variant="h6" gutterBottom>
                Distribuição de Tempo
              </Typography>
              <Typography variant="body1" color="text.secondary">
                Esta visualização mostra como você distribuiu seu tempo de estudo entre os 
                diferentes cursos e tópicos. Dados de exemplo são mostrados. Em uma implementação
                real, você veria sua própria distribuição de tempo.
              </Typography>
              
              <Box sx={{ 
                height: 300, 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center',
                mt: 4,
                bgcolor: 'action.hover',
                borderRadius: 1
              }}>
                <Typography variant="h6" color="text.secondary">
                  Gráfico de Distribuição de Tempo
                </Typography>
              </Box>
            </Box>
          )}
        </Box>
      </Paper>
      
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <Paper sx={{ p: 3, borderRadius: 2 }}>
            <Typography variant="h6" gutterBottom>
              Resumo de Desempenho
            </Typography>
            <Typography variant="body2" paragraph>
              Média geral: <strong>8.7</strong>
            </Typography>
            <Typography variant="body2" paragraph>
              Cursos completados: <strong>4</strong>
            </Typography>
            <Typography variant="body2" paragraph>
              Atividades entregues no prazo: <strong>92%</strong>
            </Typography>
            <Typography variant="body2">
              Total de horas de estudo: <strong>128h</strong>
            </Typography>
          </Paper>
        </Grid>
        
        <Grid item xs={12} md={6}>
          <Paper sx={{ p: 3, borderRadius: 2 }}>
            <Typography variant="h6" gutterBottom>
              Recomendações
            </Typography>
            <Typography variant="body2" paragraph>
              Com base no seu desempenho, recomendamos:
            </Typography>
            <Typography variant="body2" component="ul">
              <li>Aumente o tempo de estudo em JavaScript</li>
              <li>Revise os conceitos de banco de dados</li>
              <li>Continue com o bom desempenho em UX/UI Design</li>
            </Typography>
            <Button variant="contained" color="primary" sx={{ mt: 2 }}>
              Ver Recomendações Detalhadas
            </Button>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
} 