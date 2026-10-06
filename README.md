# OBSERVA-RJ — protótipo

## O que é

Página de apresentação do OBSERVA-RJ (Observatório de Opinião Pública, Mídia e Democracia do Estado do Rio de Janeiro), iniciativa do LEMEP/IESP-UERJ e do INCT ID-ICED.

**Atenção:** este é um protótipo para discussão interna. Conteúdo e identidade visual são provisórios.

## Como abrir localmente

Abra o arquivo `index.html` no navegador (duplo clique basta). Não há instalação, dependências nem etapa de build.

## Publicação

O site é publicado pelo GitHub Pages a partir da raiz da branch `main`, sem GitHub Actions. Para ativar:

1. No repositório, abra **Settings → Pages**.
2. Em **Build and deployment**, escolha **Source: "Deploy from a branch"**.
3. Em **Branch**, selecione `main` e a pasta `/ (root)`. Clique em **Save**.
4. Aguarde alguns minutos. O site ficará disponível em:

   `https://<usuario>.github.io/observa-rj/`

O arquivo `.nojekyll` faz o Pages servir os arquivos como estão, sem processá-los com Jekyll. A página não é indexada por buscadores graças à tag `<meta name="robots" content="noindex, nofollow">`.

## Fluxo de trabalho

- Cada etapa é desenvolvida em uma branch própria (por exemplo, `etapa-0`, `etapa-1`).
- O merge na `main` publica a nova versão no Pages.
- A cada rodada de revisão do grupo, cria-se uma tag (`v0.1`, `v0.2`…).

## Regras do projeto

As regras permanentes estão em [`.cursor/rules/observa.mdc`](.cursor/rules/observa.mdc), e as decisões tomadas ao longo do projeto, em [`docs/decisoes.md`](docs/decisoes.md).

**Importante:** este repositório é público. Nenhum parlamentar, partido, mandato ou gabinete específico deve ser mencionado em nenhum arquivo, comentário ou mensagem de commit. Documentos internos de origem ficam na pasta `fontes/`, que é ignorada pelo git.
