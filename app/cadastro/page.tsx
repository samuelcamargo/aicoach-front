"use client";

import { useState } from "react";
import { 
  Box, 
  Card, 
  CardContent, 
  TextField, 
  Button, 
  Typography, 
  Link, 
  InputAdornment, 
  IconButton,
  Avatar,
  Stepper,
  Step,
  StepLabel
} from "@mui/material";
import { Visibility, VisibilityOff, Email, Lock, Person } from "@mui/icons-material";
import { useRouter } from "next/navigation";
import ParticlesBackground from "../../components/ui/ParticlesBackground";
import NextLink from "next/link";

export default function CadastroPage() {
  const [activeStep, setActiveStep] = useState(0);
  const [showPassword, setShowPassword] = useState(false);
  
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    senha: "",
    confirmarSenha: ""
  });
  
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  
  const router = useRouter();
  
  const handleTogglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };
  
  const handleNext = () => {
    if (activeStep === 0) {
      if (!formData.nome || !formData.email) {
        setError("Preencha todos os campos para continuar.");
        return;
      }
    }
    
    setError("");
    setActiveStep((prevStep) => prevStep + 1);
  };
  
  const handleBack = () => {
    setActiveStep((prevStep) => prevStep - 1);
  };
  
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    if (formData.senha !== formData.confirmarSenha) {
      setError("As senhas não coincidem.");
      return;
    }
    
    setLoading(true);
    setError("");
    
    try {
      // Simulando um cadastro bem-sucedido
      await new Promise(resolve => setTimeout(resolve, 1500));
      router.push("/login?cadastro=sucesso");
    } catch (error) {
      setError("Erro ao criar conta. Tente novamente.");
    } finally {
      setLoading(false);
    }
  };
  
  const steps = ["Informações pessoais", "Segurança"];
  
  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        p: 2
      }}
    >
      {/* Fundo de partículas */}
      <ParticlesBackground />
      
      <Card 
        sx={{ 
          maxWidth: 500, 
          width: "100%", 
          boxShadow: "0 8px 24px rgba(0,0,0,0.15)",
          position: "relative",
          zIndex: 2,
          backgroundColor: "rgba(255, 255, 255, 0.9)",
          backdropFilter: "blur(10px)"
        }}
      >
        <CardContent sx={{ p: 4 }}>
          <Box 
            sx={{ 
              display: "flex", 
              flexDirection: "column", 
              alignItems: "center",
              mb: 3
            }}
          >
            <Avatar 
              sx={{ 
                bgcolor: "primary.main", 
                width: 80, 
                height: 80,
                mb: 2
              }}
            >
              AI
            </Avatar>
            <Typography variant="h4" fontWeight="bold" sx={{ mb: 1 }}>
              AICoach
            </Typography>
            <Typography variant="body1" color="text.secondary">
              Crie sua conta
            </Typography>
          </Box>
          
          <Stepper activeStep={activeStep} sx={{ mb: 4 }}>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
          
          {error && (
            <Typography 
              variant="body2" 
              color="error" 
              sx={{ 
                mb: 3, 
                textAlign: "center",
                bgcolor: "error.light",
                color: "error.dark",
                p: 1,
                borderRadius: 1
              }}
            >
              {error}
            </Typography>
          )}
          
          <form onSubmit={activeStep === steps.length - 1 ? handleSubmit : handleNext}>
            {activeStep === 0 ? (
              <>
                <TextField
                  fullWidth
                  label="Nome completo"
                  variant="outlined"
                  margin="normal"
                  required
                  name="nome"
                  value={formData.nome}
                  onChange={handleChange}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <Person color="action" />
                      </InputAdornment>
                    ),
                  }}
                />
                
                <TextField
                  fullWidth
                  label="Email"
                  variant="outlined"
                  margin="normal"
                  required
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <Email color="action" />
                      </InputAdornment>
                    ),
                  }}
                />
              </>
            ) : (
              <>
                <TextField
                  fullWidth
                  label="Senha"
                  variant="outlined"
                  margin="normal"
                  required
                  type={showPassword ? "text" : "password"}
                  name="senha"
                  value={formData.senha}
                  onChange={handleChange}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <Lock color="action" />
                      </InputAdornment>
                    ),
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton
                          onClick={handleTogglePasswordVisibility}
                          edge="end"
                        >
                          {showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                />
                
                <TextField
                  fullWidth
                  label="Confirmar senha"
                  variant="outlined"
                  margin="normal"
                  required
                  type={showPassword ? "text" : "password"}
                  name="confirmarSenha"
                  value={formData.confirmarSenha}
                  onChange={handleChange}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <Lock color="action" />
                      </InputAdornment>
                    ),
                  }}
                />
              </>
            )}
            
            <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 3 }}>
              {activeStep > 0 && (
                <Button
                  variant="outlined"
                  onClick={handleBack}
                >
                  Voltar
                </Button>
              )}
              
              <Button
                variant="contained"
                color="primary"
                type={activeStep === steps.length - 1 ? "submit" : "button"}
                onClick={activeStep === steps.length - 1 ? undefined : handleNext}
                disabled={loading}
                sx={{ ml: activeStep === 0 ? 'auto' : 0 }}
              >
                {activeStep === steps.length - 1 
                  ? (loading ? "Criando conta..." : "Criar conta") 
                  : "Próximo"}
              </Button>
            </Box>
          </form>
          
          <Box sx={{ mt: 4, textAlign: "center" }}>
            <Typography variant="body2">
              Já possui uma conta?{" "}
              <Link 
                component={NextLink} 
                href="/login"
                underline="hover"
                fontWeight="medium"
              >
                Entrar
              </Link>
            </Typography>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
} 