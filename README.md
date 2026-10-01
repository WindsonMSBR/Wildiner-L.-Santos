# Portfólio Wildiner

Portfólio pessoal de Wildiner Lucio dos Santos, desenvolvido em Angular.

**Site público:** https://windsonmsbr.github.io/Wildiner-L.-Santos/

## Desenvolvimento local

```bash
npm ci
npm start
```

## Publicação no GitHub Pages

Um push na branch `main` executa o workflow [Deploy to GitHub Pages](.github/workflows/deploy.yml). Ele instala as dependências, gera o build de produção com o caminho base `/Wildiner-L.-Santos/` e publica `dist/portfolio/browser`.

Para validar o build localmente:

```bash
npm ci
npm run build:prod -- --base-href /Wildiner-L.-Santos/
```

O endereço público do GitHub Pages pode ser acessado sem conta no Vercel.
