# AiCoach

Um projeto moderno de frontend para o sistema AiCoach, desenvolvido com Next.js e TypeScript, seguindo os princípios de Clean Architecture e SOLID.

## Tecnologias Utilizadas

- **Next.js** - Framework React para renderização do lado do servidor
- **TypeScript** - Adição de tipagem estática ao JavaScript
- **Material UI** - Biblioteca de componentes para um design moderno e responsivo
- **Styled Components** - CSS-in-JS para estilização de componentes
- **TsParticles** - Criação de animações de partículas para o background
- **ESLint** - Ferramenta de linting para manter a qualidade do código

## Pré-requisitos

- Node.js (versão 14 ou superior)
- npm ou yarn

## Instalação

```bash
# Clone o repositório
git clone https://github.com/samuelcamargo/aicoach-front
cd aicoach-front

# Instale as dependências
npm install
# ou
yarn
```

## Execução

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
```

## Estrutura do Projeto

O projeto segue os princípios de Clean Architecture com a seguinte estrutura:

```
src/
├── domain/           # Entidades e regras de negócio
├── application/      # Casos de uso da aplicação
├── infrastructure/   # Implementações técnicas (temas, serviços externos)
├── presentation/     # Componentes de UI e páginas
│   ├── components/   # Componentes reutilizáveis
│   └── pages/        # Páginas da aplicação
└── styles/           # Estilos globais
```


## Variáveis de Ambiente

O projeto utiliza variáveis de ambiente para configuração:

- `NEXT_PUBLIC_APP_NAME`: Nome da aplicação
- `NEXT_PUBLIC_APP_VERSION`: Versão atual
- `NEXT_PUBLIC_ENVIRONMENT`: Ambiente de execução

Consulte o arquivo `.env-example` para ver todas as variáveis necessárias.

## Convenções de Código

Este projeto segue as convenções do ESLint e TypeScript para garantir qualidade e consistência do código.

## Licença

Todos os direitos reservados a Samuel Camargo.
