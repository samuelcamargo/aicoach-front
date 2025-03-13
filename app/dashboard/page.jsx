"use client";

import { useState } from "react";
import { 
  Grid, 
  Card, 
  CardContent, 
  Typography, 
  Box, 
  Tab, 
  Tabs, 
  Paper,
  Button,
  useTheme 
} from '@mui/material';
import { motion } from 'framer-motion';
import { TrendingUp, Bolt } from '@mui/icons-material';

// Importando os componentes de gráficos criados
import EstudoDiarioChart from "../../components/dashboard/charts/EstudoDiarioChart";
import DistribuicaoChart from "../../components/dashboard/charts/DistribuicaoChart";
import MetasCompletadasChart from "../../components/dashboard/charts/MetasCompletadasChart";
import DesempenhoChart from "../../components/dashboard/charts/DesempenhoChart";
import TopicosEmAltaCard from "../../components/dashboard/TopicosEmAltaCard";
import ProximasAtividadesCard from "../../components/dashboard/ProximasAtividadesCard";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Box
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          {children}
        </Box>
      )}
    </Box>
  );
}

export default function DashboardHome() {
  const [tabValue, setTabValue] = useState(0);
  const theme = useTheme();

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };

  // Dados para a seção principal
  const resumoDados = {
    tempoEstudo: "12h 30min",
    modulosCompletos: 14,
    certificados: 3
  };

  return (
    <Box sx={{ width: '100%' }}>
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Typography variant="h4" component="h1" fontWeight="bold" gutterBottom>
          Bem-vindo ao AICoach
        </Typography>
      </motion.div>

      <Paper elevation={1} sx={{ borderRadius: 2, mb: 4, overflow: 'hidden' }}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <Tabs 
            value={tabValue} 
            onChange={handleTabChange} 
            aria-label="dashboard tabs"
            variant="fullWidth"
            sx={{ 
              '& .MuiTab-root': { 
                fontSize: '0.875rem',
                fontWeight: 500,
                color: theme.palette.text.primary,
                py: 1.5,
                minHeight: '48px',
                transition: 'all 0.2s',
                '&:hover': {
                  backgroundColor: 'rgba(0, 0, 0, 0.04)',
                }
              },
              '& .Mui-selected': { 
                color: theme.palette.primary.main,
                fontWeight: 600,
              },
              '& .MuiTabs-indicator': { 
                height: 3,
                borderTopLeftRadius: 3,
                borderTopRightRadius: 3,
                backgroundColor: theme.palette.primary.main 
              }
            }}
          >
            <Tab label="VISÃO GERAL" />
            <Tab label="PROGRESSO" />
            <Tab label="ATIVIDADES" />
          </Tabs>
        </Box>

        <TabPanel value={tabValue} index={0}>
          <Grid container spacing={3}>
            {/* Resumo Cards */}
            <Grid item xs={12} md={4}>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
              >
                <Card sx={{ height: '100%', boxShadow: 3, borderRadius: 2 }}>
                  <CardContent sx={{ p: 3 }}>
                    <Typography variant="h6" gutterBottom>
                      Tempo de Estudo
                    </Typography>
                    <Typography variant="h3" component="div" fontWeight="bold" color="primary">
                      {resumoDados.tempoEstudo}
                    </Typography>
                    <Typography variant="body2" component="div" color="text.secondary" gutterBottom>
                      esta semana
                    </Typography>
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: '70%' }}
                      transition={{ duration: 1, delay: 0.5 }}
                    >
                      <Box sx={{ 
                        height: 6, 
                        background: `linear-gradient(90deg, ${theme.palette.primary.light} 0%, ${theme.palette.primary.main} 100%)`,
                        borderRadius: 3,
                        mt: 1
                      }} />
                    </motion.div>
                    <Typography variant="body2" color="text.secondary" sx={{ mt: 1.5 }}>
                      <TrendingUp fontSize="small" sx={{ verticalAlign: 'middle', mr: 0.5 }} />
                      <span>+23% comparado à semana passada</span>
                    </Typography>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
            
            <Grid item xs={12} md={8}>
              <Card sx={{ height: '100%', boxShadow: 3, borderRadius: 2 }}>
                <CardContent>
                  <EstudoDiarioChart />
                </CardContent>
              </Card>
            </Grid>
            
            {/* Gráficos e Cards */}
            <Grid item xs={12} md={4}>
              <Card sx={{ height: '100%', boxShadow: 3, borderRadius: 2 }}>
                <CardContent>
                  <DistribuicaoChart />
                </CardContent>
              </Card>
            </Grid>
            
            <Grid item xs={12} md={4}>
              <Card sx={{ height: '100%', boxShadow: 3, borderRadius: 2 }}>
                <CardContent>
                  <MetasCompletadasChart />
                </CardContent>
              </Card>
            </Grid>
            
            <Grid item xs={12} md={4}>
              <Card sx={{ height: '100%', boxShadow: 3, borderRadius: 2 }}>
                <CardContent>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 2 }}>
                    <Box>
                      <Typography variant="h6">Conquistas</Typography>
                      <Typography variant="body2" color="textSecondary">Seu progresso recente</Typography>
                    </Box>
                    <Button 
                      variant="outlined" 
                      color="primary" 
                      startIcon={<Bolt />}
                      size="small"
                    >
                      Ver todas
                    </Button>
                  </Box>
                  
                  <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-around', my: 2, flexWrap: 'wrap' }}>
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.2 }}
                    >
                      <Box sx={{ textAlign: 'center', p: 1 }}>
                        <Box sx={{ 
                          width: 80, 
                          height: 80, 
                          borderRadius: '50%', 
                          bgcolor: 'primary.main', 
                          display: 'flex', 
                          alignItems: 'center', 
                          justifyContent: 'center',
                          boxShadow: 3,
                          mb: 1
                        }}>
                          <Typography variant="h4" color="white">{resumoDados.modulosCompletos}</Typography>
                        </Box>
                        <Typography variant="body2">Módulos</Typography>
                      </Box>
                    </motion.div>
                    
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.4 }}
                    >
                      <Box sx={{ textAlign: 'center', p: 1 }}>
                        <Box sx={{ 
                          width: 80, 
                          height: 80, 
                          borderRadius: '50%', 
                          bgcolor: 'secondary.main', 
                          display: 'flex', 
                          alignItems: 'center', 
                          justifyContent: 'center',
                          boxShadow: 3,
                          mb: 1
                        }}>
                          <Typography variant="h4" color="white">{resumoDados.certificados}</Typography>
                        </Box>
                        <Typography variant="body2">Certificados</Typography>
                      </Box>
                    </motion.div>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
            
            <Grid item xs={12} md={6}>
              <TopicosEmAltaCard />
            </Grid>
            
            <Grid item xs={12} md={6}>
              <ProximasAtividadesCard />
            </Grid>
          </Grid>
        </TabPanel>
        
        <TabPanel value={tabValue} index={1}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <Card>
                <CardContent>
                  <DesempenhoChart />
                </CardContent>
              </Card>
            </Grid>
            
            {/* Outros componentes da aba de progresso */}
          </Grid>
        </TabPanel>
        
        <TabPanel value={tabValue} index={2}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <ProximasAtividadesCard />
            </Grid>
            
            {/* Outros componentes da aba de atividades */}
          </Grid>
        </TabPanel>
      </Paper>
    </Box>
  );
} 