# Convenções de marcação — protótipo OBSERVA-RJ

Estas convenções valem para todas as seções do `index.html`. A página [`exemplos.html`](../exemplos.html) mostra cada uma delas aplicada e serve de referência visual. **Ela deve ser removida antes de qualquer uso externo do protótipo.**

## 1. Marcador de pendência

Conteúdo ainda não definido é marcado no próprio HTML. O texto "A definir:" é escrito literalmente, não gerado por CSS, para aparecer sem estilos, sem JavaScript e na impressão.

Forma no texto:

```html
<span class="pendente" data-pendente="Contato">A definir: e-mail de contato do observatório</span>
```

Forma em bloco:

```html
<div class="pendente pendente-bloco" data-pendente="Equipe">
  <p>A definir: nomes e vínculos institucionais da equipe.</p>
</div>
```

- O atributo `data-pendente` é obrigatório: um rótulo curto (até cerca de 40 caracteres), usado no painel de pendências.
- O estilo (fundo tingido, borda tracejada, cantos arredondados) é o mesmo em tela e na impressão.
- Nunca usar texto genérico de preenchimento ("lorem ipsum", "texto aqui" e semelhantes) no lugar do marcador.

## 2. Painel de pendências

O script `js/pendencias.js`, carregado com `defer` no `<head>`, monta um painel na faixa de protótipo:

- percorre os elementos `.pendente` na ordem do documento;
- atribui `id` no formato `pendencia-1`, `pendencia-2`… aos que não têm (não altera `id` existentes);
- identifica a seção de origem: o primeiro `h2` da `section` mais próxima; "Cabeçalho" se estiver no `<header>`; "Rodapé" se estiver no `<footer>`; "Página" nos demais casos;
- insere um `<details class="painel-pendencias">` com a contagem no `<summary>` e uma lista de links no formato `rótulo — seção`.

O painel só existe com JavaScript ativo e com o modo protótipo ligado. Os marcadores não dependem dele.

## 3. Modo protótipo

O modo protótipo é ligado pela classe `modo-prototipo` no elemento `<html>`:

```html
<html lang="pt-BR" class="modo-prototipo">
```

**Para desligar**, basta retirar a classe do `<html>`. A faixa de protótipo e o painel de pendências desaparecem; os marcadores `.pendente` continuam visíveis, intencionalmente, para que nenhuma pendência passe despercebida.

## 4. Seções

Cada seção segue este formato, delimitada por comentários:

```html
  <!-- ===== SEÇÃO: Nome ===== -->
  <section id="slug" aria-labelledby="slug-titulo">
    <h2 id="slug-titulo">Nome</h2>
    ...
  </section>
  <!-- ===== FIM: Nome ===== -->
```

Os `id` das seções são fixos, nesta ordem:

1. `abertura`
2. `lacuna`
3. `funcionamento`
4. `modulos`
5. `logica-modular`
6. `entregas`
7. `quem-faz`
8. `apoio`
9. `contato`

O espaçamento vertical é uniforme: cada `section` tem padding vertical e cada filho direto recebe a mesma margem superior em relação ao anterior. Não criar margens específicas por elemento.

## 5. Módulos temáticos

```html
<article class="modulo" data-modulo="clima" aria-labelledby="modulo-clima-titulo">
  <h3 id="modulo-clima-titulo">Clima e meio ambiente</h3>
  <p class="modulo-descricao">…</p>
  <h4>Perguntas de pesquisa</h4>
  <ul class="modulo-perguntas">
    <li>…</li>
  </ul>
  <h4>Desenho metodológico</h4>
  <ul class="modulo-desenho">
    <li>…</li>
  </ul>
</article>
```

Slugs fixos:

| Slug | Tema |
| --- | --- |
| `clima` | Clima e meio ambiente |
| `seguranca` | Segurança pública |
| `diversidade` | Diversidade e direitos |
| `ruralidade` | Ruralidade, trabalho e alimentação |
| `educacao` | Educação pública |
| `mulheres` | Mulheres |
| `ciencia` | Ciência e confiança |
| `cultura` | Cultura e economia criativa |
| `juventude` | Juventude, política e futuro |

- Cada `[data-modulo="slug"]` define `--cor-modulo: var(--cor-modulo-slug)` em `css/base.css`; as cores ficam em `css/tokens.css`.
- A cor do módulo aparece apenas na barra superior do cartão e nos marcadores das listas, **nunca como cor de texto**.
- Para dispor vários cartões, usar o contêiner `<div class="grade-modulos">`: uma coluna em telas estreitas, três colunas a partir de 60rem.

## 6. Bloco ilustrativo

Todo gráfico, número ou dado de exemplo deve ficar dentro de um bloco ilustrativo, com o rótulo visível:

```html
<figure class="ilustrativo">
  <span class="rotulo-ilustrativo">Ilustrativo</span>
  …
</figure>
```

O rótulo é texto real no HTML, não gerado por CSS, e aparece também na impressão.

## Observação técnica

A largura de 60rem usada na grade de módulos está fixa na media query de `css/base.css`, porque variáveis CSS não funcionam em media queries. É uma exceção consciente à regra de que todo tamanho vem de `css/tokens.css`.
