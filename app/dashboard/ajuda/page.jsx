"use client";

import { useState } from "react";
import { 
  Box, 
  Typography, 
  Paper, 
  TextField, 
  Button, 
  Accordion, 
  AccordionSummary, 
  AccordionDetails,
  Grid,
  Card,
  CardContent,
  CardActions
} from "@mui/material";
import { 
  Search, 
  ExpandMore, 
  QuestionAnswer, 
  LiveHelp, 
  ContactSupport,
  VideoLibrary
} from "@mui/icons-material";

export default function AjudaPage() {
  const [searchTerm, setSearchTerm] = useState("");
  
  const perguntas = [
    {
      pergunta: "Como faço para alterar minha senha?",
      resposta: "Para alterar sua senha, vá até a página de Perfil, clique na aba 'Segurança' e selecione a opção 'Alterar senha'. Você precisará informar sua senha atual e então definir uma nova senha."
    },
    {
      pergunta: "Como baixar certificados de conclusão?",
      resposta: "Os certificados de conclusão ficam disponíveis na página do curso após você completar todos os módulos e obter uma nota de aprovação. Vá até a página do curso concluído e clique no botão 'Baixar Certificado'."
    },
    {
      pergunta: "Quais são os requisitos técnicos para os cursos?",
      resposta: "Para a maioria dos cursos, você precisará de um computador com acesso à internet de banda larga, navegador atualizado (Chrome, Firefox, Safari ou Edge), e em alguns casos específicos, softwares relacionados ao curso. Os requisitos detalhados são listados na página de descrição de cada curso."
    },
    {
      pergunta: "Como reportar um problema técnico?",
      resposta: "Caso encontre problemas técnicos, você pode reportá-los através da seção 'Suporte' no menu principal, descrevendo detalhadamente o problema e anexando capturas de tela se necessário. Nossa equipe técnica responderá em até 24 horas úteis."
    },
    {
      pergunta: "Posso acessar os cursos pelo celular?",
      resposta: "Sim! Todos os nossos cursos são responsivos e podem ser acessados através de dispositivos móveis. Também oferecemos um aplicativo para iOS e Android que permite baixar os conteúdos para assistir offline."
    }
  ];

  const perguntasFiltradas = perguntas.filter(
    item => item.pergunta.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Box sx={{ width: '100%' }}>
      <Typography variant="h4" fontWeight="bold" gutterBottom>
        Central de Ajuda
      </Typography>
      
      <Paper sx={{ p: 3, mb: 4, borderRadius: 2 }}>
        <Typography variant="h6" gutterBottom>
          Como podemos ajudar?
        </Typography>
        <TextField
          fullWidth
          placeholder="Buscar por perguntas frequentes..."
          variant="outlined"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          InputProps={{
            startAdornment: <Search sx={{ mr: 1, color: 'text.secondary' }} />,
          }}
          sx={{ mb: 2 }}
        />
        
        {perguntasFiltradas.map((item, index) => (
          <Accordion key={index} sx={{ '&:before': { display: 'none' }, mt: 1 }}>
            <AccordionSummary
              expandIcon={<ExpandMore />}
              sx={{ 
                bgcolor: 'action.hover',
                borderRadius: '4px',
                '&.Mui-expanded': {
                  borderBottomLeftRadius: 0,
                  borderBottomRightRadius: 0,
                }
              }}
            >
              <Typography fontWeight="medium">{item.pergunta}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>{item.resposta}</Typography>
            </AccordionDetails>
          </Accordion>
        ))}
      </Paper>
      
      <Typography variant="h5" fontWeight="bold" sx={{ mb: 3 }}>
        Recursos de Ajuda
      </Typography>
      
      <Grid container spacing={3}>
        <Grid item xs={12} md={4}>
          <Card sx={{ height: '100%' }}>
            <CardContent>
              <Box display="flex" alignItems="center" mb={2}>
                <QuestionAnswer color="primary" fontSize="large" sx={{ mr: 1 }} />
                <Typography variant="h6">Chat com Suporte</Typography>
              </Box>
              <Typography variant="body2" color="text.secondary">
                Converse em tempo real com nossa equipe de suporte para obter ajuda imediata com suas dúvidas.
              </Typography>
            </CardContent>
            <CardActions sx={{ p: 2, pt: 0 }}>
              <Button variant="contained" color="primary" fullWidth>
                Iniciar Chat
              </Button>
            </CardActions>
          </Card>
        </Grid>
        
        <Grid item xs={12} md={4}>
          <Card sx={{ height: '100%' }}>
            <CardContent>
              <Box display="flex" alignItems="center" mb={2}>
                <LiveHelp color="primary" fontSize="large" sx={{ mr: 1 }} />
                <Typography variant="h6">Base de Conhecimento</Typography>
              </Box>
              <Typography variant="body2" color="text.secondary">
                Encontre artigos detalhados, tutoriais e guias para ajudar você a aproveitar ao máximo os cursos.
              </Typography>
            </CardContent>
            <CardActions sx={{ p: 2, pt: 0 }}>
              <Button variant="outlined" color="primary" fullWidth>
                Acessar Documentação
              </Button>
            </CardActions>
          </Card>
        </Grid>
        
        <Grid item xs={12} md={4}>
          <Card sx={{ height: '100%' }}>
            <CardContent>
              <Box display="flex" alignItems="center" mb={2}>
                <VideoLibrary color="primary" fontSize="large" sx={{ mr: 1 }} />
                <Typography variant="h6">Tutoriais em Vídeo</Typography>
              </Box>
              <Typography variant="body2" color="text.secondary">
                Assista vídeos explicativos sobre como utilizar todas as funcionalidades da plataforma.
              </Typography>
            </CardContent>
            <CardActions sx={{ p: 2, pt: 0 }}>
              <Button variant="outlined" color="primary" fullWidth>
                Ver Tutoriais
              </Button>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
      
      <Paper sx={{ p: 3, mt: 4, borderRadius: 2 }}>
        <Typography variant="h6" gutterBottom>
          Entre em Contato
        </Typography>
        <Typography variant="body2" paragraph>
          Não encontrou o que procurava? Entre em contato diretamente com nossa equipe de suporte.
        </Typography>
        <Box sx={{ display: 'flex', alignItems: 'center', mt: 2 }}>
          <Button 
            variant="contained" 
            color="primary" 
            startIcon={<ContactSupport />}
          >
            Enviar Email
          </Button>
          <Typography variant="body2" sx={{ ml: 2 }}>
            support@aicoach.com.br
          </Typography>
        </Box>
      </Paper>
    </Box>
  );
} 