import musics from "./musics";

import images from "./images";

const {
  lonelyImage,
  memoriesImage,
  iDontWannaTalk,
  billie,
  image6,
  image1,
  image3,
  image9,
  image5,
  image4,
  image8,
  image2,
  image7,
} = images;

const {
  song1,
  song2,
  song3,
  song4,
  song5,
  song6,
  song7,
  song8,
  song9,
  song10,
  lonelySong,
  memories,
  idontWannTalk,
} = musics;

const songs = [
  {
    id: 1,
    name: "Lonely",
    cover: lonelyImage,
    singer: "Imagine Dragons",
    audio: new Audio(lonelySong),
  },
  {
    id: 2,
    name: "Memories",
    cover: memoriesImage,
    singer: "Rauf & Faik",
    audio: new Audio(memories),
  },
  {
    id: 3,
    name: "I Don't Wanna Talk",
    cover: iDontWannaTalk,
    singer: "Besomorph",
    audio: new Audio(idontWannTalk),
  },
  {
    id: 4,
    name: "Bossa Nova",
    singer: "Bilie Eilish",
    cover: billie,
    audio: new Audio(song1),
  },
  {
    id: 5,
    name: "Yanginlar",
    singer: "Canby & Wolker",
    cover: image6,
    audio: new Audio(song2),
  },
  {
    id: 6,
    name: "Therefore I Am",
    singer: "Bilie Eilish",
    cover: image1,
    audio: new Audio(song3),
  },
  {
    id: 7,
    name: "ty moy kayf",
    singer: "Detka",
    cover: image3,
    audio: new Audio(song4),
  },
  {
    id: 8,
    name: "BonBon",
    singer: "Era Istrefi",
    cover: image9,
    audio: new Audio(song5),
  },
  {
    id: 9,
    name: " Kaç İstersen",
    singer: "Narkoz & Gazapizm",
    cover: image5,
    audio: new Audio(song6),
  },
  {
    id: 10,
    name: "Love Your Vice",
    singer: "JONY",
    cover: image7,
    audio: new Audio(song7),
  },
  {
    id: 11,
    name: "Фонтанчик",
    singer: "Гио Пика",
    cover: image4,
    audio: new Audio(song9),
  },
  {
    id: 12,
    name: "Dance monkey",
    singer: "Tones and I",
    cover: image8,
    audio: new Audio(song8),
  },
  {
    id: 13,
    name: "Childhood",
    singer: "Rauf & faik",
    cover: image2,
    audio: new Audio(song10),
  },
];

export default songs;
