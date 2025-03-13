"use client";

import { createContext, useContext, useState, useEffect } from 'react';

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  // Verificar se o usuário está logado ao carregar a página
  useEffect(() => {
    // Verificar se existe um usuário no localStorage
    const savedUser = localStorage.getItem('user');
    if (savedUser) {
      try {
        setUser(JSON.parse(savedUser));
      } catch (error) {
        // eslint-disable-next-line no-console
        console.error('Erro ao carregar usuário:', error);
        localStorage.removeItem('user');
      }
    }
    setIsLoading(false);
  }, []);

  // Função de login
  const login = async (userData) => {
    // eslint-disable-next-line no-console
    console.log('Tentando fazer login com:', userData);
    
    // Simula uma chamada de API
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
    
    // eslint-disable-next-line no-console
    console.log('Login bem-sucedido!', mockApiResponse);
    return mockApiResponse;
  };

  // Função de logout
  const logout = () => {
    setUser(null);
    localStorage.removeItem('user');
    // eslint-disable-next-line no-console
    console.log('Logout realizado!');
  };

  const value = {
    user,
    isLoading,
    login,
    logout,
    isAuthenticated: !!user
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
} 