# AiCoach

<div align="center">
  <img src="public/logo.png" alt="AiCoach Logo" width="200" height="auto" />
  <p><strong>Seu assistente pessoal de treinamento com Inteligência Artificial</strong></p>
</div>

## 📋 Sobre o Projeto

O AiCoach é uma aplicação web moderna que oferece planos de treinamento personalizados utilizando inteligência artificial. O projeto foi desenvolvido com Next.js e TypeScript, seguindo os princípios de Clean Architecture e SOLID para garantir qualidade, escalabilidade e manutenibilidade do código.

### 🌟 Características Principais

- Interface de usuário moderna e intuitiva
- Planos de treinamento personalizados
- Dashboard de acompanhamento de progresso
- Totalmente responsivo para dispositivos móveis e desktop
- Autenticação segura de usuários

## 🛠️ Tecnologias Utilizadas

- **Next.js 14** - Framework React para renderização do lado do servidor
- **TypeScript** - Adição de tipagem estática ao JavaScript
- **Material UI** - Biblioteca de componentes para um design moderno e responsivo
- **Styled Components** - CSS-in-JS para estilização de componentes
- **TsParticles** - Criação de animações de partículas para o background
- **ESLint** - Ferramenta de linting para manter a qualidade do código
- **Jest e React Testing Library** - Framework de testes unitários e de componentes

## 📋 Pré-requisitos

- Node.js (versão 16 ou superior)
- npm ou yarn

## 🚀 Instalação

```bash
# Clone o repositório
git clone https://github.com/samuelcamargo/aicoach-front
cd aicoach-front

# Instale as dependências
npm install
# ou
yarn
```

## 🔧 Configuração

Crie um arquivo `.env.local` baseado no `.env.example` e configure as variáveis de ambiente necessárias:

```bash
cp .env.example .env.local
```

## ▶️ Execução

```bash
# Modo de desenvolvimento
npm run dev
# ou
yarn dev

# Build para produção
npm run build
# ou
yarn build

# Iniciar versão de produção
npm start
# ou
yarn start

# Verificar código com ESLint
npm run lint
# ou
yarn lint

# Executar testes
npm test
# ou
yarn test
```

## 📂 Estrutura do Projeto

O projeto segue os princípios de Clean Architecture com a seguinte estrutura:

```
aicoach-front/
├── public/             # Arquivos estáticos
├── src/
│   ├── domain/         # Entidades e regras de negócio
│   ├── application/    # Casos de uso da aplicação
│   ├── infrastructure/ # Implementações técnicas (temas, serviços externos)
│   ├── presentation/   # Componentes de UI e páginas
│   │   ├── components/ # Componentes reutilizáveis
│   │   └── pages/      # Páginas da aplicação
│   └── styles/         # Estilos globais
├── tests/              # Testes unitários e de integração
└── ...                 # Arquivos de configuração
```

## 🌐 Variáveis de Ambiente

O projeto utiliza variáveis de ambiente para configuração:

- `NEXT_PUBLIC_API_URL`: URL da API backend
- `NEXT_PUBLIC_APP_NAME`: Nome da aplicação
- `NEXT_PUBLIC_APP_VERSION`: Versão atual
- `NEXT_PUBLIC_ENVIRONMENT`: Ambiente de execução (development, staging, production)

Consulte o arquivo `.env.example` para ver todas as variáveis necessárias.

## 📝 Convenções de Código

Este projeto segue as convenções do ESLint e TypeScript para garantir qualidade e consistência do código. 

### Padrões de Commits

Utilizamos o padrão Conventional Commits para mensagens de commit:
- `feat:` - Nova funcionalidade
- `fix:` - Correção de bug
- `docs:` - Alterações na documentação
- `style:` - Mudanças que não afetam o código (formatação, etc)
- `refactor:` - Refatoração de código
- `test:` - Adição ou correção de testes


## 📞 Suporte

Em caso de dúvidas ou problemas, entre em contato através do email: samuelcamargo1@gmail.com

## 📄 Licença

Todos os direitos reservados a Samuel Camargo.
