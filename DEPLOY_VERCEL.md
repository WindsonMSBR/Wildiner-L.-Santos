# Deploy do Portfolio no Vercel

Este guia explica como fazer o deploy do seu portfolio Angular no Vercel usando GitHub.

## Pré-requisitos

- Conta no GitHub
- Conta no Vercel
- Projeto Angular configurado (já está pronto!)

## Passos para Deploy

### 1. Preparar o Repositório GitHub

1. **Criar um repositório no GitHub** (se ainda não tiver):
   - Acesse [github.com](https://github.com)
   - Clique em "New repository"
   - Nome: `portfolio` (ou o nome que preferir)
   - Marque como público
   - **NÃO** inicialize com README, .gitignore ou license

2. **Conectar o projeto local ao GitHub**:
   ```bash
   git init
   git add .
   git commit -m "Initial commit: Portfolio Angular ready for Vercel"
   git branch -M main
   git remote add origin https://github.com/SEU_USUARIO/portfolio.git
   git push -u origin main
   ```

### 2. Configurar Deploy no Vercel

1. **Acesse o Vercel**:
   - Vá para [vercel.com](https://vercel.com)
   - Faça login com sua conta GitHub

2. **Importar Projeto**:
   - Clique em "New Project"
   - Selecione o repositório `portfolio`
   - Clique em "Import"

3. **Configurações do Deploy**:
   - **Framework Preset**: Angular (deve ser detectado automaticamente)
   - **Root Directory**: `.` (raiz do projeto)
   - **Build Command**: `npm run vercel-build`
   - **Output Directory**: `dist/portfolio/browser`
   - **Install Command**: `npm install`

4. **Deploy**:
   - Clique em "Deploy"
   - Aguarde o processo de build e deploy
   - O Vercel fornecerá uma URL para seu portfolio

### 3. Configurações Automáticas

O projeto já está configurado com:
- ✅ `vercel.json` - Configuração do Vercel
- ✅ Script `vercel-build` no package.json
- ✅ Build de produção otimizado
- ✅ Roteamento SPA configurado

### 4. Deploy Automático

Após a configuração inicial:
- **Push para GitHub** = **Deploy automático no Vercel**
- Cada commit na branch `main` gerará um novo deploy
- Pull requests geram preview deployments

### 5. Domínio Personalizado (Opcional)

1. No dashboard do Vercel, vá para "Settings" > "Domains"
2. Adicione seu domínio personalizado
3. Configure os registros DNS conforme instruções do Vercel

## Estrutura de Arquivos Importantes

```
portfolio/
├── vercel.json          # Configuração do Vercel
├── package.json         # Scripts de build
├── angular.json         # Configuração Angular
├── src/
│   ├── index.html       # Página principal
│   └── ...
└── dist/portfolio/browser/  # Build de produção
```

## Comandos Úteis

```bash
# Build local para testar
npm run build

# Build específico para Vercel
npm run vercel-build

# Servir build localmente
npx serve dist/portfolio/browser

# Deploy manual (se necessário)
npx vercel --prod
```

## Troubleshooting

### Problema: Build falha
- Verifique se todas as dependências estão no `package.json`
- Execute `npm install` localmente para testar
- Verifique logs no dashboard do Vercel

### Problema: Roteamento não funciona
- O `vercel.json` já está configurado para SPA
- Verifique se o `base href` está correto no `index.html`

### Problema: Assets não carregam
- Verifique se os arquivos estão na pasta `public/`
- Confirme se o `angular.json` está configurado corretamente

## Monitoramento

- **Analytics**: Disponível no dashboard do Vercel
- **Logs**: Acesse "Functions" > "View Function Logs"
- **Performance**: Use as ferramentas do Vercel para monitorar

## Próximos Passos

1. ✅ Deploy inicial no Vercel
2. 🔄 Configurar domínio personalizado (opcional)
3. 🔄 Adicionar analytics (Google Analytics, etc.)
4. 🔄 Configurar CI/CD avançado (se necessário)

---

**Suporte**: Consulte a [documentação do Vercel](https://vercel.com/docs) para mais informações.
