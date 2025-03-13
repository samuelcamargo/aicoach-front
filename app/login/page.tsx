"use client";

import { useState, FormEvent, ChangeEvent } from "react";
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
  FormControlLabel,
  Checkbox,
  CircularProgress
} from "@mui/material";
import { Visibility, VisibilityOff, Email, Lock } from "@mui/icons-material";
import { useRouter } from "next/navigation";
import { useAuth } from "../../src/contexts/AuthContext";
import ParticlesBackground from "../../components/ui/ParticlesBackground";
import NextLink from "next/link";

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [rememberMe, setRememberMe] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>("");
  
  const router = useRouter();
  const { login } = useAuth();
  
  const handleTogglePasswordVisibility = (): void => {
    setShowPassword(!showPassword);
  };
  
  const handleSubmit = async (e: FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();
    setIsLoading(true);
    setErrorMessage("");
    
    try {
      // Verificar as credenciais mocadas
      if (email === "samuel" && password === "123456") {
        // Passar um objeto com a propriedade username para corresponder ao formato esperado
        await login({ username: email });
        router.push('/dashboard');
      } else {
        throw new Error("Credenciais inválidas");
      }
    } catch (error) {
      setErrorMessage("Email ou senha inválidos. Tente novamente.");
    } finally {
      setIsLoading(false);
    }
  };
  
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
          maxWidth: 400, 
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
              Acesse sua conta
            </Typography>
          </Box>
          
          {errorMessage && (
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
              {errorMessage}
            </Typography>
          )}
          
          <form onSubmit={handleSubmit}>
            <TextField
              fullWidth
              label="Usuário"
              variant="outlined"
              margin="normal"
              required
              value={email}
              onChange={(e: ChangeEvent<HTMLInputElement>) => setEmail(e.target.value)}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Email color="action" />
                  </InputAdornment>
                ),
              }}
            />
            
            <TextField
              fullWidth
              label="Senha"
              variant="outlined"
              margin="normal"
              required
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(e: ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
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
            
            <FormControlLabel
              control={
                <Checkbox
                  checked={rememberMe}
                  onChange={(e: ChangeEvent<HTMLInputElement>) => setRememberMe(e.target.checked)}
                />
              }
              label="Lembrar-me"
            />
            
            <Box sx={{ textAlign: "right", mt: 1, mb: 3 }}>
              <Link 
                component={NextLink} 
                href="/recuperar-senha"
                underline="hover"
                variant="body2"
              >
                Esqueceu sua senha?
              </Link>
            </Box>
            
            <Button
              fullWidth
              variant="contained"
              color="primary"
              size="large"
              type="submit"
              disabled={isLoading}
              sx={{ py: 1.5 }}
            >
              {isLoading ? <CircularProgress size={24} /> : "Entrar"}
            </Button>
          </form>
          
          <Box sx={{ mt: 4, textAlign: "center" }}>
            <Typography variant="body2">
              Não tem uma conta?{" "}
              <Link 
                component={NextLink} 
                href="/cadastro"
                underline="hover"
                fontWeight="medium"
              >
                Cadastre-se
              </Link>
            </Typography>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
} 