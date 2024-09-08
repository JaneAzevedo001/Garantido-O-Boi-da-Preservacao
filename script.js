const searchInput = document.getElementById('searchInput');
const searchButton = document.getElementById('searchButton');
const searchResults = document.getElementById('searchResults');

function pesquisar() {
  const termoBusca = searchInput.value.toLowerCase();

  // Verifica se o termo de busca está vazio
  if (termoBusca === '') {
    searchResults.innerHTML = '<p>Por favor, digite um termo para pesquisar.</p>';
    return; // Interrompe a função se o termo estiver vazio
  }

  const resultados = toadas.filter(toada => {
    const tituloMinusculo = toada.title.toLowerCase();
    const artistaMinusculo = toada.artist.toLowerCase();
    const tagsMinusculas = toada.tags.map(tag => tag.toLowerCase());

    return tituloMinusculo.includes(termoBusca) || artistaMinusculo.includes(termoBusca) ||  tagsMinusculas.some(tag => tag.includes(termoBusca));
  });

  // Exibir os resultados na div #searchResults
  searchResults.innerHTML = '';
  if (resultados.length === 0) {
    searchResults.innerHTML = '<p>Nenhum resultado encontrado.</p>';
  } else {
    resultados.forEach(toada => {
      const div = document.createElement('div');
      div.innerHTML = `
        <h2>${toada.title}</h2>
        <p>Artista: ${toada.artist}</p>
        <p>Trecho: ${toada.lyrics}</p>
        <p><a href="toadas.html" target="_blank">Letra</a></p> 
        <iframe width="350" height="200" src="${toada.videoId}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> 
      `;
      searchResults.appendChild(div);
    });
  }
}

// Adicionando um event listener ao botão de pesquisa
searchButton.addEventListener('click', pesquisar);