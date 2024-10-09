function converterParaLeituraPreditiva(texto) {
  const mapaConversao = {
    'a': '4', 'e': '3', 'i': '1', 'o': '0', 's': '5', 't': '7'
  };
  return texto.split('').map(letra => {
    const letraMinuscula = letra.toLowerCase();
    return mapaConversao[letraMinuscula] || letra;
  }).join('');
}

function converterTexto() {
  const textoOriginal = document.getElementById("textoOriginal").value;
  const textoConvertido = converterParaLeituraPreditiva(textoOriginal);
  document.getElementById("textoConvertido").value = textoConvertido;
}
