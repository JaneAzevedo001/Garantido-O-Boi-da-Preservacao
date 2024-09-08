# Imersão Dev com Google Gemini
# Link 
https://garantido-o-boi-da-preservacao.vercel.app/

## Projeto: Garantido: O Boi da Preservação

### Descrição
O site tem o intuito de apresentar o grito de resistência que é a cultura parintinense. Na página, é possível observar e buscar por toadas do Boi Bumbá Garantido que abordam o tema da preservação ambiental e a exaltação da natureza. A temática ambiental e a cultura dos povos originários é abordada no Festival Folclórico de Parintins, patrimônio cultural do Brasil, contribuindo para a conscientização da importância da natureza.

### Propósito
Através de uma interface intuitiva, a página web busca conectar os usuários com a rica cultura do Boi Bumbá Garantido e conscientizá-los sobre a importância da preservação da Amazônia. Ao divulgar as mensagens ambientais presentes nas toadas, o site contribui para a valorização desse patrimônio cultural e natural, instigando a reflexão e a participação ativa na construção de um futuro mais sustentável.

### Tecnologias utilizadas
- **HTML5**: Estrutura o conteúdo da página web.
- **CSS**: Estiliza a página com layout e efeitos visuais modernos.
- **JavaScript**: Adiciona interatividade, como a funcionalidade de pesquisa e carregamento dinâmico de conteúdo.
- **Font Awesome**: Fornece ícones para links de mídia social.
- **Google Fonts**: Personaliza a tipografia do site.
- **API de dados do YouTube**: (Usado implicitamente) Para incorporar vídeos das toadas.

### Como funciona
- **Página inicial**: Contém imagens e mensagem ambiental.
- **Menu**: O menu contém três seções:
  - **Festival**: Onde o usuário conhecerá o que é o Festival de Parintins, do qual o boi Garantido faz parte.
  - **Sobre**: Seção que aborda uma breve história do Boi Bumbá Garantido.
  - **Toadas**: Seção dedicada às toadas, com letras, vídeos e fonte de onde foram tiradas as informações.
- **Pesquisa**: Uma barra de pesquisa permite que os usuários encontrem toadas específicas com base em palavras-chave, artistas ou nome das toadas.
- **Mídias sociais**: Links para os perfis de mídia social do Boi Bumbá Garantido incentivam ainda mais o engajamento.

### Estrutura de Dados: arquivos JavaScript

#### dados.js
Contém um array de objetos, cada um representando uma toada. Esses objetos incluem propriedades como:
- **title**: O título da toada.
- **artist**: O artista ou compositores.
- **lyrics**: Trecho da letra da toada.
- **videoId**: O ID do vídeo do YouTube para a toada correspondente.
- **lyricsUrl**: Um link para as letras em um site de letras.
- **tags**: Palavras-chave para pesquisa.

#### script.js
Contém a lógica para a busca e exibição das toadas no arquivo `index.html`.

#### toada.js
Contém a lógica para a busca no arquivo `toadas.html`.

### Principais características
- **Pesquisa dinâmica**: Os usuários podem pesquisar toadas com base em várias palavras-chave.
- **Elementos interativos**: Os vídeos são incorporados diretamente na página para uma experiência imersiva.
- **Design responsivo**: O site se adapta a diferentes tamanhos de tela para uma visualização ideal.
