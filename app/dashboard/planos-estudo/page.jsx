"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "../../../components/ui/card";
import { Button } from "../../../components/ui/button";
import { Progress } from "../../../components/ui/progress";
import { Badge } from "../../../components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../../../components/ui/tabs";
import { PlusCircle, Clock, BookOpen, Award, Calendar } from "lucide-react";

export default function PlanosEstudoPage() {
  const [planosAtivos] = useState([
    {
      id: 1,
      titulo: "Desenvolvimento Frontend com React",
      descricao: "Domine o React e suas bibliotecas mais populares",
      progresso: 68,
      diasRestantes: 14,
      modulosCompletos: 5,
      totalModulos: 8,
      categoria: "desenvolvimento",
      ultimoAcesso: "2023-11-15"
    },
    {
      id: 2,
      titulo: "Design UX/UI: Fundamentos e Prática",
      descricao: "Aprenda a criar interfaces intuitivas e atraentes",
      progresso: 30,
      diasRestantes: 45,
      modulosCompletos: 2,
      totalModulos: 10,
      categoria: "design",
      ultimoAcesso: "2023-11-18"
    }
  ]);
  
  const [planosRecomendados] = useState([
    {
      id: 3,
      titulo: "Desenvolvimento Backend com Node.js",
      descricao: "APIs RESTful, autenticação e banco de dados",
      categoria: "desenvolvimento",
      duracao: "8 semanas",
      nivel: "Intermediário"
    },
    {
      id: 4,
      titulo: "Ciência de Dados: Introdução ao Python",
      descricao: "Fundamentos de análise de dados com Python",
      categoria: "data-science",
      duracao: "6 semanas",
      nivel: "Iniciante"
    }
  ]);

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold">Meus Planos de Estudo</h1>
        <Button>
          <PlusCircle className="mr-2 h-4 w-4" />
          Novo Plano
        </Button>
      </div>
      
      <Tabs defaultValue="ativos">
        <TabsList>
          <TabsTrigger value="ativos">Planos Ativos</TabsTrigger>
          <TabsTrigger value="concluidos">Concluídos</TabsTrigger>
          <TabsTrigger value="recomendados">Recomendados</TabsTrigger>
        </TabsList>
        
        <TabsContent value="ativos" className="space-y-4">
          {planosAtivos.map((plano) => (
            <Card key={plano.id} className="hover:shadow-md transition-shadow">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle>{plano.titulo}</CardTitle>
                    <CardDescription>{plano.descricao}</CardDescription>
                  </div>
                  <Badge variant={plano.categoria === "desenvolvimento" ? "default" : "secondary"}>
                    {plano.categoria}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between text-sm mb-1">
                      <span>Progresso</span>
                      <span>{plano.progresso}%</span>
                    </div>
                    <Progress value={plano.progresso} />
                  </div>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div className="flex items-center">
                      <Calendar className="h-5 w-5 mr-2 text-gray-500" />
                      <div>
                        <div className="text-sm text-gray-500">Dias Restantes</div>
                        <div className="font-medium">{plano.diasRestantes} dias</div>
                      </div>
                    </div>
                    
                    <div className="flex items-center">
                      <BookOpen className="h-5 w-5 mr-2 text-gray-500" />
                      <div>
                        <div className="text-sm text-gray-500">Módulos Concluídos</div>
                        <div className="font-medium">{plano.modulosCompletos}/{plano.totalModulos}</div>
                      </div>
                    </div>
                    
                    <div className="flex items-center">
                      <Clock className="h-5 w-5 mr-2 text-gray-500" />
                      <div>
                        <div className="text-sm text-gray-500">Último Acesso</div>
                        <div className="font-medium">{new Date(plano.ultimoAcesso).toLocaleDateString('pt-BR')}</div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex justify-end space-x-2">
                    <Button variant="outline">Ver Detalhes</Button>
                    <Button>Continuar Estudando</Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </TabsContent>
        
        <TabsContent value="concluidos" className="space-y-4">
          <Card>
            <CardContent className="pt-6">
              <div className="flex flex-col items-center justify-center text-center p-6">
                <Award className="h-12 w-12 text-gray-400 mb-4" />
                <h3 className="text-lg font-medium">Nenhum plano concluído ainda</h3>
                <p className="text-sm text-gray-500 mt-1">
                  Continue progredindo em seus planos ativos para vê-los aqui.
                </p>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="recomendados" className="space-y-4 grid md:grid-cols-2 gap-4">
          {planosRecomendados.map((plano) => (
            <Card key={plano.id} className="hover:shadow-md transition-shadow">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle>{plano.titulo}</CardTitle>
                    <CardDescription>{plano.descricao}</CardDescription>
                  </div>
                  <Badge variant={plano.categoria === "desenvolvimento" ? "default" : "secondary"}>
                    {plano.categoria}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="flex items-center">
                      <Clock className="h-5 w-5 mr-2 text-gray-500" />
                      <div>
                        <div className="text-sm text-gray-500">Duração</div>
                        <div className="font-medium">{plano.duracao}</div>
                      </div>
                    </div>
                    
                    <div className="flex items-center">
                      <Award className="h-5 w-5 mr-2 text-gray-500" />
                      <div>
                        <div className="text-sm text-gray-500">Nível</div>
                        <div className="font-medium">{plano.nivel}</div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex justify-end">
                    <Button>Iniciar Plano</Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </TabsContent>
      </Tabs>
    </div>
  );
} 