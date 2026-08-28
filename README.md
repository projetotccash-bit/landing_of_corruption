# Lands of Corruption

Landing page oficial do jogo **Lands of Corruption**, desenvolvido como Trabalho de Conclusão de Curso.

Construída com React + TypeScript + Vite.

## Requisitos

- Node.js 18 ou superior
- npm (ou yarn / pnpm)

## Instalação

```bash
npm install
```

## Desenvolvimento

Rodar localmente em modo de desenvolvimento:

```bash
npm run dev
```

A página ficará disponível em `http://localhost:5173`.

## Build de produção

Gerar a versão otimizada na pasta `dist/`:

```bash
npm run build
```

Pré-visualizar o build localmente:

```bash
npm run preview
```

## Publicação

A pasta `dist/` contém arquivos 100% estáticos e pode ser publicada em qualquer serviço de hospedagem.

### Vercel

1. Importe o repositório.
2. Build command: `npm run build`
3. Output directory: `dist`

O arquivo `vercel.json` incluso já configura o roteamento SPA.

### Netlify

1. Importe o repositório.
2. Build command: `npm run build`
3. Publish directory: `dist`

O arquivo `netlify.toml` incluso já configura o roteamento SPA.

### Hospedagem comum (FTP / cPanel / etc.)

Faça `npm run build` localmente e envie o conteúdo da pasta `dist/` para a raiz pública do servidor.

## Estrutura

```
.
├── public/             # Arquivos estáticos servidos como estão
├── src/
│   ├── assets/         # Imagens e mídias
│   ├── App.tsx         # Componente principal
│   ├── main.tsx        # Entrada da aplicação
│   └── styles.css      # Estilos globais
├── index.html
├── package.json
├── tsconfig.json
└── vite.config.ts
```

## Licença

Projeto acadêmico — todos os direitos reservados aos autores.
