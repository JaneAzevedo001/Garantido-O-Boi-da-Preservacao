const toadas = [
    {
        title: 'A Grande Maloca',
        artist: 'Boi Bumbá Garantido, 2004 · Geandro Pantoja · Demétrios Haidos',
        lyrics: `A esperança rege a canção da Amazônia
                Os povos da floresta e os pássaros entoam
                Em uma sinfonia de amor
                Sublimando a vida e o Grande Criador`,
        videoId: 'https://www.youtube.com/embed/goQO0HvHKU8?si=UEAuSVi88HDMVEko',
        lyricsUrl: 'https://www.letras.mus.br/garantido/535706/',
        tags: ['demetrios haidos', 'demetrio raidos', 'Mãe Natureza', 'mae natureza']
    },
    {
        title: 'Amazônia, Santuário Esmeralda',
        artist: 'Boi Bumbá Garantido · Demétrios Haidos · Geandro Pantoja',
        lyrics: `Amazônia santuário esmeralda
                Pôr-do-sol beija tuas águas
                Pátria verde florescida
                Pelas lágrimas divinas
                A grinalda do luar vem te abençoar`, 
        videoId: 'https://www.youtube.com/embed/kJrDbsO13RE?si=ZtemxCwC9JWbkfk2',
        lyricsUrl: 'https://www.letras.mus.br/garantido/963290/',
        tags: ['amazonia', 'santuario esmeralda', 'patria verde', 'pátria verde', 'demetrio raidos']
    },
    {
        title: 'Aquarela da Amazônia',
        artist: 'Boi Bumbá Garantido, 2005 · Demétrios Haidos · Geandro Pantoja · Náferson Cruz',
        lyrics: `Abra os olhos e veja a festa da natureza
                Que os deuses pintaram pra nós
                Amazônia um legado em aquarela 
                Sublime canção exaltar
                Água terra fauna flora e cultura
                Sublime canção a exaltar
                A dança divina da vida
                Obra-prima emoldurada de flores`, 
        videoId: 'https://www.youtube.com/embed/oLPZgmK-7NI',
        lyricsUrl: 'https://www.letras.mus.br/david-assayag/990616/',
        tags: ['amazonia', 'menina dos olhos do mundo', 'demetrio', 'naferson']
    },
    {
        title: 'Fantástica Amazônia',
        artist: 'Boi Bumbá Garantido, 2015 · Ronaldo Barbosa Jr · Rafael Marupiara',
        lyrics: `Teu verde encanto, mistério milenar
                O segredo derradeiro irá revelar
                Entre as curvas de rios, vitrais do teu olhar
                Um novo universo irá se mostrar
                Muito além desse verde encontre o lugar
                Sua razão para existir, sua razão para cuidar
                Muito além desse verde a mente vai evoluir
                Descubra a amazônia que vive em ti`, 
        videoId: 'https://www.youtube.com/embed/Qmih2g7Oqas?si=vUExyrklA6z65Wty',
        lyricsUrl: 'https://www.letras.mus.br/garantido/fantastica-amazonia/',
        tags: ['fantastica amazonia', 'povo das penas', 'resistencia']
    },
    {
        title: 'Filhos do Amanhã - A Sabedoria não Envelhece',
        artist: 'Boi Bumbá Garantido, 2001 · Paulinho Dú Sagrado',
        lyrics: `Será? Como será?
                Viver neste mundo sem água
                Sem o ar sem poder respirar
                Verá que a impureza
                Lançada nos rios
                Vai regar a tristeza e a dor`, 
        videoId: 'https://www.youtube.com/embed/2Q8uYRguaMk?si=RCCGCJwNlHIJkx9o',
        lyricsUrl: 'https://www.letras.mus.br/garantido/1502972/',
        tags: ['amanha', 'sera','povo', 'mundo novo', 'amor', 'natureza']
    },
    {
        title: 'Índio Do Brasil',
        artist: 'Boi Bumbá Garantido, 2004 · Geandro Pantoja · Demétrios Haidos',
        lyrics: `Sou igara nessas águas
                Sou a seiva dessas matas
                E o ruflar das asas de um beija-flor`, 
        videoId: 'https://www.youtube.com/embed/7RbogL8HKDg?si=V8Kj8KtK_brasjS3',
        lyricsUrl: 'https://www.letras.mus.br/garantido/239987/',
        tags: ['indio do brasil', 'brazil', 'exploracao', 'exploração', 'harmonia com a natureza', 'resistencia', 'canta indio do brasil']
    },
    {
        title: 'Lamento de Raça',
        artist: 'Boi Bumbá Garantido, 1996 · Emerson Maia',
        lyrics: `O índio chorou
                O branco chorou
                Todo mundo está chorando
                A amazônia está queimando
                Ai, ai, que dor
                Ai, ai, que horror`, 
        videoId: 'https://www.youtube.com/embed/NXBaDJmSRtQ?si=9VxS93DxBfr75ZJu',
        lyricsUrl: 'https://www.letras.mus.br/garantido/669753/',
        tags: ['lamento de raca','indio', 'o indio chorou', 'amazonia' ]
    },
    {
        title: 'Nações Extintas',
        artist: 'Boi Bumbá Garantido, 2001 ·  Sidney Resende · João Melo',
        lyrics: `Sem terra, sem teto, sem grão
                Sem alma, sem rota a nação
                Nos primórdios do mundo de Deus
                Das tabas, florestas sem fim
                Destino de índio feliz
                Mas um dia chegou caos e cruz`, 
        videoId: 'https://www.youtube.com/embed/ajlqDfhBQkE?si=3ZuIouux9afDB7_D',
        lyricsUrl: 'https://www.letras.mus.br/garantido/819462/',
        tags: ['nacoes extintas', 'minha terra mae', 'minha terra mãe']
    },
    {
        title: 'Não Mate A Vida',
        artist: 'Boi Bumbá Garantido, 2001 · Tony Medeiros · Inaldo Medeiros',
        lyrics: `Um dia o índio civilizará o mundo
                E a terra no sentido mais profundo
                Terá que ser tratada como mãe`, 
        videoId: 'https://www.youtube.com/embed/CO0cGwJUicQ?si=1rQ2JOh9aq3Jzbuh',
        lyricsUrl: 'https://www.letras.mus.br/garantido/819463/',
        tags: ['nao mate a vida', 'ecologia']
    },
    {
        title: 'Orquestra Amazônica e a Ópera da Terra',
        artist: 'Boi Bumbá Garantido, 2009 · Rossy do Carmo',
        lyrics: `O albor relevante que mostra
                O enlevo da selva
                Desperta o oculto numa sinfonia 
                Que adoça as manhãs`, 
        videoId: 'https://www.youtube.com/embed/Rtbzx3yb-_4?si=8mrW97_owjINkCIm',
        lyricsUrl: 'https://www.letras.mus.br/garantido/1502977/',
        tags: ['orquestra amazonica', 'opera da terra', 'orquestra Amazonica e a opera da terra', 'sinfonia']
    },
    {
        title: 'Seiva',
        artist: 'Boi Bumbá Garantido, 2012 · Demétrios Haidos · Geandro Pantoja',
        lyrics: `Seiva que singra as veias da árvores
                É sangue verde das matas
                Tem lágrimas de tupã, tem água de rio
                É vida que pulsa no coração do Brasil
                Amazônia!
                `, 
        videoId: 'https://www.youtube.com/embed/BPIFK-I9Yew?si=vq7QXnjcSo4CK6r_',
        lyricsUrl: 'https://letras.mus.br/garantido/seiva/"',
        tags: ['tupa', 'vida', 'coracao do brasil', 'coração do brasil', 'amazonia']
    }

];
