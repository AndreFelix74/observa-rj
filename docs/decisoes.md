# Registro de decisões — protótipo OBSERVA-RJ

## 2026-10-06 — Etapa 0
- Protótipo em HTML, CSS e JavaScript puros, sem build. Migração para framework só após aprovação do grupo.
- Publicação pelo GitHub Pages, a partir da raiz da branch `main`, sem GitHub Actions.
- Repositório público. Documentos internos de origem ficam fora do repositório (pasta `fontes/`, ignorada pelo git).
- Conteúdo escrito diretamente no `index.html`, em seções delimitadas por comentários.
- JavaScript apenas para conveniências opcionais; a página funciona sem ele.
- Proteção contra indexação pela tag `meta robots`. O `robots.txt` não tem efeito em sites de projeto do Pages.
- Nome provisório: OBSERVA-RJ (alternativa em discussão: Observatório Político do Rio de Janeiro).
- Fontes do sistema até a definição da direção visual (etapa 4). Fontes definitivas serão hospedadas no repositório.
- Fluxo: trabalho em branches por etapa; merge na `main` para publicar; tag por rodada de revisão do grupo (v0.1, v0.2…).

## 2026-10-06 — Etapa 1
- Pendências marcadas no HTML com o texto literal "A definir:", visíveis sem JavaScript e na impressão.
- Painel de pendências gerado por script na faixa de protótipo, a partir dos marcadores da página.
- Modo protótipo controlado pela classe `modo-prototipo` no `<html>`; os marcadores não somem ao desligá-lo.
- Convenções de seções, módulos e blocos ilustrativos documentadas em `docs/convencoes.md`.
- Página `exemplos.html` como referência das convenções, a remover antes do uso externo.
- Cores dos módulos provisórias, usadas apenas como elemento gráfico, nunca como cor de texto.

## 2026-10-06 — Etapa 2
- Ordem das seções: abertura, lacuna, funcionamento, módulos, lógica modular, entregas, quem faz, apoio, contato.
- Índice de links âncora no cabeçalho, não fixo, sem JavaScript; a seção de abertura fica fora do índice.
- Esqueleto montado apenas com títulos e pendências; a redação dos textos é a etapa 3.
- Pendência de contato transferida do rodapé para a seção de contato.
- Primeira circulação ao grupo prevista após a etapa 3.
