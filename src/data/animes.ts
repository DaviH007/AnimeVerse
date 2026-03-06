export interface Anime {
  id: string;
  name: string;
  description: string;
  year: number;
  genre: string[];
  studio: string;
  coverImage: string;
  bannerImage: string;
  rating: number;
  episodes: number;
  status: string;
  synopsis: string;
  quotes: string[];
  iconicMoments: string[];
}

export interface Video {
  id: string;
  title: string;
  animeId: string;
  thumbnail: string;
  duration: string;
  views: number;
  uploadDate: string;
  description: string;
  videoUrl: string;
}

export interface GalleryImage {
  id: string;
  animeId: string;
  imageUrl: string;
  description: string;
  category: 'screenshot' | 'fanart' | 'official';
  likes: number;
}

export const animes: Anime[] = [
  {
    id: "demon-slayer",
    name: "Demon Slayer",
    description: "Um jovem se torna caçador de demônios para vingar sua família e curar sua irmã.",
    year: 2019,
    genre: ["Ação", "Fantasia", "Sobrenatural"],
    studio: "ufotable",
    coverImage: "/images/demon-slayer-cover.jpg",
    bannerImage: "/images/demon-slayer-banner.jpg",
    rating: 9.2,
    episodes: 55,
    status: "Em andamento",
    synopsis: "Tanjiro Kamado é um jovem bondoso que vive com sua família na montanha. Após retornar de uma venda na vila, ele descobre que sua família foi massacrada por demônios, e sua irmã Nezuko foi transformada em um demônio. Determinado a vingar sua família e curar Nezuko, Tanjiro embarca em uma jornada perigosa como Caçador de Demônios.",
    quotes: [
      "Respire... é a única maneira de sobreviver.",
      "Se você não conseguir fazer algo, tente até conseguir.",
      "A vida é preciosa, mesmo para um demônio.",
      "Eu vou te salvar, Nezuko, não importa o custo!"
    ],
    iconicMoments: [
      "Tanjiro vs Rui - A Dança do Deus do Fogo",
      "Zenitsu vs Kaigaku - Trovão Puro",
      "Inosuke vs Doma - A fúria do Rei da Montanha",
      "Rengoku vs Akaza - Chamas da Alma"
    ]
  },
  {
    id: "solo-leveling",
    name: "Solo Leveling",
    description: "O caçador mais fraco do mundo desperta um poder misterioso que o faz evoluir infinitamente.",
    year: 2024,
    genre: ["Ação", "Fantasia", "Isekai"],
    studio: "A-1 Pictures",
    coverImage: "/images/solo-leveling-cover.jpg",
    bannerImage: "/images/solo-leveling-banner.jpg",
    rating: 9.0,
    episodes: 24,
    status: "Em andamento",
    synopsis: "Em um mundo onde portais misteriosos conectam a dimensão humana a masmorras cheias de monstros, caçadores surgem com habilidades sobrenaturais. Sung Jin-Woo é o caçador de rank E mais fraco, conhecido como 'O Caçador Mais Fraco de Todos'. Após uma missão quase fatal em uma masmorra dupla, ele desperta um sistema misterioso que lhe permite level up e evoluir infinitamente.",
    quotes: [
      "Eu sou o que sobrou da humanidade.",
      "Levante-se. O Rei das Sombras ordena.",
      "Você não pode me parar. Eu sou eterno.",
      "Aqueles que me subestimaram... já não estão mais entre nós."
    ],
    iconicMoments: [
      "Jin-Woo desperta o Sistema",
      "Arise - O Exército das Sombras",
      "Jin-Woo vs Baran",
      "A Ascensão do Monarca das Sombras"
    ]
  },
  {
    id: "lord-of-the-mysteries",
    name: "Lord of the Mysteries",
    description: "Um homem transmigra para um mundo de mistérios sobrenaturais e segredos antigos.",
    year: 2025,
    genre: ["Fantasia", "Mistério", "Sobrenatural"],
    studio: "B.CMAY PICTURES",
    coverImage: "/images/lord-mysteries-cover.jpg",
    bannerImage: "/images/lord-mysteries-banner.jpg",
    rating: 8.8,
    episodes: 12,
    status: "Em andamento",
    synopsis: "Zhou Mingrui acorda em um mundo estranho, no corpo de Klein Moretti, um historiador que cometeu suicídio. Este é um mundo de mistérios onde deuses antigos existem, e segredos sobrenaturais estão escondidos nas sombras da sociedade. Klein descobre que pode viajar entre o mundo real e um mundo misterioso, e embarca em uma jornada para se tornar um Beyonder - alguém que transcende a humanidade comum.",
    quotes: [
      "Na escuridão, todo conhecimento tem um preço.",
      "A única coisa que conheço é que nada sei.",
      "Que os deuses me protejam... de mim mesmo.",
      "Todo mistério tem uma resposta, e toda resposta tem um custo."
    ],
    iconicMoments: [
      "Klein desperta como Beyonder",
      "A Primeira Missão do Nighthawks",
      "O Ritual do Fools",
      "Klein vs Ince Zangwill"
    ]
  },
  {
    id: "a-silent-voice",
    name: "A Silent Voice",
    description: "Um ex-valentão busca redenção ao se reconectar com uma garota surda que bullyingou no passado.",
    year: 2016,
    genre: ["Drama", "Romance", "Slice of Life"],
    studio: "Kyoto Animation",
    coverImage: "/images/silent-voice-cover.jpg",
    bannerImage: "/images/silent-voice-banner.jpg",
    rating: 9.3,
    episodes: 1,
    status: "Completo",
    synopsis: "Shoya Ishida é um estudante do ensino médio atormentado por sua culpa do passado. Anos atrás, ele liderou o bullying contra Shoko Nishimiya, uma nova aluna surda. Agora, consumido pelo remorso e isolado por seus próprios demônios internos, Shoya decide encontrar Shoko para se redimir. Juntos, eles embarcam em uma jornada emocional de perdão, aceitação e cura.",
    quotes: [
      "Eu queria te matar... mas agora eu só quero que você viva.",
      "A solidão é a pior dor de todas.",
      "Todo mundo tem algo que se arrepende.",
      "Vamos viver juntos, mesmo que seja difícil."
    ],
    iconicMoments: [
      "O reencontro de Shoya e Shoko",
      "A ponte - O momento de redenção",
      "O festival de verão",
      "A luta final contra os demônios internos"
    ]
  }
];

export const videos: Video[] = [
  {
    id: "ds-video-1",
    title: "Tanjiro vs Rui - Dança do Deus do Fogo",
    animeId: "demon-slayer",
    thumbnail: "/images/ds-thumb-1.jpg",
    duration: "3:45",
    views: 1250000,
    uploadDate: "2024-12-15",
    description: "A batalha épica entre Tanjiro e o Demônio da Aranha Rui, culminando na técnica secreta Hinokami Kagura.",
    videoUrl: "/videos/ds-clip-1.mp4"
  },
  {
    id: "ds-video-2",
    title: "Zenitsu - Trovão Puro vs Kaigaku",
    animeId: "demon-slayer",
    thumbnail: "/images/ds-thumb-2.jpg",
    duration: "2:30",
    views: 980000,
    uploadDate: "2024-11-20",
    description: "Zenitsu desperta sua verdadeira força enfrentando seu antigo colega de treinamento.",
    videoUrl: "/videos/ds-clip-2.mp4"
  },
  {
    id: "sl-video-1",
    title: "Sung Jin-Woo Desperta o Sistema",
    animeId: "solo-leveling",
    thumbnail: "/images/sl-thumb-1.jpg",
    duration: "4:12",
    views: 2100000,
    uploadDate: "2024-12-01",
    description: "O momento em que o caçador mais fraco desperta seu poder infinito.",
    videoUrl: "/videos/sl-clip-1.mp4"
  },
  {
    id: "sl-video-2",
    title: "Arise - O Exército das Sombras",
    animeId: "solo-leveling",
    thumbnail: "/images/sl-thumb-2.jpg",
    duration: "3:20",
    views: 1850000,
    uploadDate: "2024-11-15",
    description: "Jin-Woo invoca seu exército de sombras pela primeira vez.",
    videoUrl: "/videos/sl-clip-2.mp4"
  },
  {
    id: "lm-video-1",
    title: "Klein Desperta como Beyonder",
    animeId: "lord-of-the-mysteries",
    thumbnail: "/images/lm-thumb-1.jpg",
    duration: "5:00",
    views: 650000,
    uploadDate: "2025-01-10",
    description: "A transição de Klein Moretti de mortal para alguém que transcende.",
    videoUrl: "/videos/lm-clip-1.mp4"
  },
  {
    id: "sv-video-1",
    title: "O Reencontro - Shoya e Shoko",
    animeId: "a-silent-voice",
    thumbnail: "/images/sv-thumb-1.jpg",
    duration: "4:30",
    views: 890000,
    uploadDate: "2024-10-05",
    description: "O momento emocional em que Shoya finalmente encontra Shoko após anos.",
    videoUrl: "/videos/sv-clip-1.mp4"
  }
];

export const galleryImages: GalleryImage[] = [
  {
    id: "ds-img-1",
    animeId: "demon-slayer",
    imageUrl: "/images/ds-gallery-1.jpg",
    description: "Tanjiro e Nezuko ao pôr do sol",
    category: "official",
    likes: 45000
  },
  {
    id: "ds-img-2",
    animeId: "demon-slayer",
    imageUrl: "/images/ds-gallery-2.jpg",
    description: "Rengoku - Chamas da Alma",
    category: "fanart",
    likes: 67000
  },
  {
    id: "sl-img-1",
    animeId: "solo-leveling",
    imageUrl: "/images/sl-gallery-1.jpg",
    description: "Sung Jin-Woo - O Monarca das Sombras",
    category: "official",
    likes: 82000
  },
  {
    id: "sl-img-2",
    animeId: "solo-leveling",
    imageUrl: "/images/sl-gallery-2.jpg",
    description: "Igris, o General das Sombras",
    category: "fanart",
    likes: 54000
  },
  {
    id: "lm-img-1",
    animeId: "lord-of-the-mysteries",
    imageUrl: "/images/lm-gallery-1.jpg",
    description: "Klein Moretti - O Misterioso",
    category: "official",
    likes: 32000
  },
  {
    id: "sv-img-1",
    animeId: "a-silent-voice",
    imageUrl: "/images/sv-gallery-1.jpg",
    description: "Shoko e Shoya - Momentos de Paz",
    category: "screenshot",
    likes: 78000
  }
];

export const getAnimeById = (id: string): Anime | undefined => {
  return animes.find(anime => anime.id === id);
};

export const getVideosByAnimeId = (animeId: string): Video[] => {
  return videos.filter(video => video.animeId === animeId);
};

export const getImagesByAnimeId = (animeId: string): GalleryImage[] => {
  return galleryImages.filter(image => image.animeId === animeId);
};

export const getTrendingVideos = (): Video[] => {
  return [...videos].sort((a, b) => b.views - a.views).slice(0, 6);
};

export const getPopularImages = (): GalleryImage[] => {
  return [...galleryImages].sort((a, b) => b.likes - a.likes).slice(0, 8);
};
