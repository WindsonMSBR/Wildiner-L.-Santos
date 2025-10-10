# Configuração Completa do GitHub Pages

## Passo 1: Criar o Repositório no GitHub

1. **Acesse o GitHub:**
   - Vá para [github.com](https://github.com) e faça login
   - Clique no botão "+" no canto superior direito
   - Selecione "New repository"

2. **Configure o repositório:**
   - **Repository name:** `WindsonMSBR.github.io` (IMPORTANTE: deve ser exatamente assim)
   - **Description:** `Portfolio pessoal - Wildiner Lucio dos Santos`
   - **Visibility:** Public
   - **NÃO marque** "Add a README file"
   - **NÃO marque** "Add .gitignore"
   - **NÃO marque** "Choose a license"
   - Clique em "Create repository"

## Passo 2: Configurar o Remote Local

Após criar o repositório, execute no terminal:

```bash
git remote add origin https://github.com/WindsonMSBR/WindsonMSBR.github.io.git
git push -u origin main
```

## Passo 3: Habilitar GitHub Pages

1. **No repositório criado:**
   - Vá para a aba "Settings"
   - Role para baixo até "Pages"
   - Em "Source", selecione "GitHub Actions"
   - Aguarde alguns minutos para o deploy automático

## Passo 4: Verificar o Deploy

- O GitHub Actions executará automaticamente após o push
- Você pode acompanhar o progresso na aba "Actions"
- O site estará disponível em: `https://windsonmsbr.github.io`

## Passo 5: Deploy Manual (Opcional)

Se precisar fazer deploy manual:

```bash
# Build de produção
npm run build:prod

# Deploy manual
npx angular-cli-ghpages --dir=dist/portfolio/browser
```

## Troubleshooting

### Erro 404
- Verifique se o repositório foi criado com o nome exato: `WindsonMSBR.github.io`
- Confirme se o GitHub Pages está habilitado
- Aguarde alguns minutos para propagação

### Deploy não funciona
- Verifique se o GitHub Actions está habilitado
- Confirme se o workflow está na pasta `.github/workflows/`
- Verifique os logs na aba "Actions"

### Assets não carregam
- Verifique se os arquivos estão na pasta `public/`
- Confirme se o build foi executado com sucesso

## Estrutura Final

Após a configuração, seu site estará em:
- **URL:** `https://windsonmsbr.github.io`
- **Deploy automático:** A cada push na branch `main`
- **Build:** Otimizado para produção
- **Assets:** Todos os arquivos estáticos incluídos

## Comandos Úteis

```bash
# Verificar status do git
git status

# Verificar remote configurado
git remote -v

# Fazer commit e push
git add .
git commit -m "Sua mensagem"
git push origin main

# Build local para teste
npm run build:prod

# Servir localmente para teste
npx http-server dist/portfolio/browser -p 8080
```
