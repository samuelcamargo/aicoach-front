"use client";

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../../../components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "../../../components/ui/avatar";
import { Badge } from "../../../components/ui/badge";
import { Button } from "../../../components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../../../components/ui/tabs";
import { BookOpen, Users, TrendingUp, MessageSquare } from "lucide-react";

export default function NovidadesPage() {
  const tendencias = [
    {
      id: 1,
      titulo: "Inteligência Artificial e Machine Learning",
      descricao: "As tecnologias de IA estão revolucionando todas as indústrias. Aprenda os fundamentos e aplicações práticas.",
      imagem: "/images/ai-ml.jpg",
      autor: {
        nome: "Dr. Carlos Mendes",
        avatar: "https://randomuser.me/api/portraits/men/32.jpg",
        cargo: "Professor de Ciência da Computação"
      },
      categoria: "tecnologia",
      estudantes: 1240,
      comentarios: 85,
      data: "10 de novembro de 2023"
    },
    {
      id: 2,
      titulo: "Desenvolvimento Web com Next.js 14",
      descricao: "Descubra as novidades do Next.js 14 e como criar aplicações web modernas e performáticas.",
      imagem: "/images/nextjs.jpg",
      autor: {
        nome: "Ana Oliveira",
        avatar: "https://randomuser.me/api/portraits/women/68.jpg",
        cargo: "Desenvolvedora Frontend Sênior"
      },
      categoria: "desenvolvimento",
      estudantes: 948,
      comentarios: 63,
      data: "15 de novembro de 2023"
    },
    {
      id: 3,
      titulo: "UX/UI Design: Tendências para 2024",
      descricao: "As principais tendências em design de interfaces e experiência do usuário que dominarão o próximo ano.",
      imagem: "/images/uxui.jpg",
      autor: {
        nome: "Marcelo Santos",
        avatar: "https://randomuser.me/api/portraits/men/76.jpg",
        cargo: "Designer UX/UI Lead"
      },
      categoria: "design",
      estudantes: 712,
      comentarios: 42,
      data: "18 de novembro de 2023"
    }
  ];

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Novidades e Tendências</h1>
      
      <Tabs defaultValue="tendencias">
        <TabsList>
          <TabsTrigger value="tendencias">Tendências</TabsTrigger>
          <TabsTrigger value="eventos">Eventos</TabsTrigger>
          <TabsTrigger value="comunidade">Comunidade</TabsTrigger>
        </TabsList>
        
        <TabsContent value="tendencias" className="space-y-6">
          <p className="text-gray-500">
            Descubra os temas mais populares entre os estudantes do AiCoach e acompanhe as tendências do mercado.
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {tendencias.map((item) => (
              <Card key={item.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="w-full h-48 bg-gray-200">
                  {/* Placeholder para imagem - em produção usaria next/image */}
                  <div className="w-full h-full flex items-center justify-center bg-gradient-to-r from-blue-100 to-indigo-100">
                    <span className="text-gray-400">Imagem: {item.titulo}</span>
                  </div>
                </div>
                
                <CardHeader className="pb-2">
                  <div className="flex justify-between items-start">
                    <Badge variant={
                      item.categoria === "tecnologia" ? "default" : 
                      item.categoria === "desenvolvimento" ? "secondary" :
                      "outline"
                    }>
                      {item.categoria}
                    </Badge>
                    <span className="text-xs text-gray-500">{item.data}</span>
                  </div>
                  <CardTitle className="mt-2 line-clamp-2">{item.titulo}</CardTitle>
                  <CardDescription className="line-clamp-3">{item.descricao}</CardDescription>
                </CardHeader>
                
                <CardContent className="pb-2">
                  <div className="flex items-center space-x-3">
                    <Avatar className="h-8 w-8">
                      <AvatarImage src={item.autor.avatar} />
                      <AvatarFallback>{item.autor.nome.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="text-sm font-medium">{item.autor.nome}</p>
                      <p className="text-xs text-gray-500">{item.autor.cargo}</p>
                    </div>
                  </div>
                </CardContent>
                
                <CardFooter className="flex justify-between pt-2">
                  <div className="flex items-center space-x-4 text-sm text-gray-500">
                    <div className="flex items-center">
                      <Users className="h-4 w-4 mr-1" />
                      <span>{item.estudantes}</span>
                    </div>
                    <div className="flex items-center">
                      <MessageSquare className="h-4 w-4 mr-1" />
                      <span>{item.comentarios}</span>
                    </div>
                  </div>
                  <Button variant="ghost" size="sm">Saiba mais</Button>
                </CardFooter>
              </Card>
            ))}
          </div>
          
          <div className="flex justify-center">
            <Button variant="outline">
              <TrendingUp className="mr-2 h-4 w-4" />
              Ver mais tendências
            </Button>
          </div>
        </TabsContent>
        
        <TabsContent value="eventos">
          <div className="p-8 text-center">
            <BookOpen className="mx-auto h-12 w-12 text-gray-400 mb-4" />
            <h3 className="text-lg font-medium">Em breve</h3>
            <p className="text-sm text-gray-500 mt-1">
              Estamos preparando eventos incríveis. Fique ligado!
            </p>
          </div>
        </TabsContent>
        
        <TabsContent value="comunidade">
          <div className="p-8 text-center">
            <Users className="mx-auto h-12 w-12 text-gray-400 mb-4" />
            <h3 className="text-lg font-medium">Em desenvolvimento</h3>
            <p className="text-sm text-gray-500 mt-1">
              Nossa seção de comunidade está sendo desenvolvida para proporcionar a melhor experiência.
            </p>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
} 