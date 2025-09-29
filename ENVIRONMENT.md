# Variáveis de Ambiente

## Para Desenvolvimento Local

Crie um arquivo `.env` na raiz do projeto com as seguintes variáveis:

```env
# Porta do servidor (opcional, padrão: 3000)
PORT=3000

# Configurações do banco de dados (se necessário)
# DATABASE_URL=postgresql://user:password@localhost:5432/database

# Configurações de CORS
# CORS_ORIGIN=https://shopping-list.netlify.app

# Outras configurações específicas da sua aplicação
# JWT_SECRET=your-secret-key
# API_KEY=your-api-key
```

## Para Deploy no Netlify

Configure as variáveis de ambiente no painel do Netlify:

1. Acesse o painel do seu site no Netlify
2. Vá em "Site settings" > "Environment variables"
3. Adicione as variáveis necessárias para produção

### Variáveis Recomendadas para Produção:

- `NODE_ENV=production`
- `PORT=3000` (ou deixe vazio para usar o padrão do Netlify)
- Outras variáveis específicas da sua aplicação
