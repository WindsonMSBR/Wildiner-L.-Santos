# Deploy no GitHub Pages

Este projeto está configurado para fazer deploy automático no GitHub Pages.

## Configuração Automática (Recomendado)

O projeto já está configurado com GitHub Actions para deploy automático. Toda vez que você fizer push para a branch `main`, o deploy será executado automaticamente.

### Passos para ativar:

1. **Configure o GitHub Pages no repositório:**
   - Vá para Settings > Pages
   - Em "Source", selecione "GitHub Actions"

2. **Faça o push das alterações:**
   ```bash
   git add .
   git commit -m "Configure GitHub Pages deployment"
   git push origin main
   ```

3. **Aguarde o deploy:** O GitHub Actions executará automaticamente e fará o deploy.

## Deploy Manual

Se preferir fazer deploy manual:

```bash
npm run deploy
```

## URLs de Acesso

Após o deploy, seu site estará disponível em:
- `https://windsonmsbr.github.io/`

## Configurações Importantes

- **baseHref**: Removido para domínio personalizado (WindsonMSBR.github.io)
- **Build**: Otimizado para produção com minificação e tree-shaking
- **Assets**: Todos os arquivos estáticos são copiados corretamente

## Troubleshooting

### Problema: Site não carrega
- Verifique se o `baseHref` está correto no `angular.json`
- Confirme se o repositório está público
- Verifique se o GitHub Pages está habilitado

### Problema: Assets não carregam
- Verifique se os arquivos estão na pasta `public/`
- Confirme se o build foi executado com sucesso

### Problema: Deploy falha
- Verifique os logs do GitHub Actions
- Confirme se todas as dependências estão instaladas
- Verifique se não há erros de build
