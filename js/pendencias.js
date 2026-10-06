/*
 * Painel de pendências do protótipo OBSERVA-RJ.
 * Lista os marcadores .pendente da página num <details> inserido na faixa de protótipo.
 * Só atua quando o <html> tem a classe modo-prototipo. Sem módulos ES, para funcionar via file://.
 */
(function () {
  'use strict';

  if (!document.documentElement.classList.contains('modo-prototipo')) {
    return;
  }

  var destino = document.querySelector('.faixa-prototipo .container');
  if (!destino) {
    return;
  }

  var marcadores = document.querySelectorAll('.pendente');

  var painel = document.createElement('details');
  painel.className = 'painel-pendencias';

  var resumo = document.createElement('summary');
  resumo.textContent = textoResumo(marcadores.length);
  painel.appendChild(resumo);

  if (marcadores.length > 0) {
    var lista = document.createElement('ol');
    var contador = 0;

    for (var i = 0; i < marcadores.length; i++) {
      var marcador = marcadores[i];

      if (!marcador.id) {
        do {
          contador++;
        } while (document.getElementById('pendencia-' + contador));
        marcador.id = 'pendencia-' + contador;
      }

      var rotulo = (marcador.getAttribute('data-pendente') || '').trim() || 'Pendência';

      var link = document.createElement('a');
      link.href = '#' + marcador.id;
      link.textContent = rotulo + ' — ' + secaoDe(marcador);

      var item = document.createElement('li');
      item.appendChild(link);
      lista.appendChild(item);
    }

    painel.appendChild(lista);
  }

  destino.appendChild(painel);

  function textoResumo(total) {
    if (total === 0) {
      return 'Nenhuma pendência';
    }
    if (total === 1) {
      return '1 pendência';
    }
    return total + ' pendências';
  }

  function secaoDe(elemento) {
    var secao = elemento.closest('section');
    if (secao) {
      var titulo = secao.querySelector('h2');
      if (titulo) {
        return titulo.textContent.replace(/\s+/g, ' ').trim();
      }
    }
    if (elemento.closest('header')) {
      return 'Cabeçalho';
    }
    if (elemento.closest('footer')) {
      return 'Rodapé';
    }
    return 'Página';
  }
})();
