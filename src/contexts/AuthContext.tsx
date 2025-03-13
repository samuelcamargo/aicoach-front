"use client";

import React, { createContext, useContext, useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

// Definindo o tipo User
type User = {
  username: string;
  name?: string;
  email?: string;
  role?: string;
  id?: number;
};

type LoginData = {
  username: string;
};

type AuthContextType = {
  user: User | null;
  login: (userData: LoginData) => Promise<boolean>;
  logout: () => void;
  isLoading: boolean;
};

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    // Verificar se o usuário está no armazenamento local
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
    setIsLoading(false);
  }, []);

  // Função de login atualizada para aceitar userData e processar credenciais mocadas
  const login = async (userData: LoginData) => {
    console.log('Tentando fazer login com:', userData);
    
    // Simula uma chamada de API com dados mocados
    const mockApiResponse = {
      id: 1,
      username: userData.username,
      name: 'Samuel Camargo',
      email: 'samuel@exemplo.com',
      role: 'admin'
    };
    
    // Salva o usuário no state e no localStorage
    setUser(mockApiResponse);
    localStorage.setItem('user', JSON.stringify(mockApiResponse));
    
    console.log('Login bem-sucedido!', mockApiResponse);
    return true;
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('user');
    router.push('/login');
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, isLoading }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth deve ser usado dentro de um AuthProvider');
  }
  return context;
} 