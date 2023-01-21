const  songs = [
    { 
        name: "Lonely", 
        cover:"./images/lonely.jpg", 
        singer:'Imagine Dragons',
        audio: new Audio("./music/Lonely.mp3")   
    },
    { 
        name: "Memories", 
        cover:"./images/Memories.jpg",
        singer:'Rauf & Faik', 
        audio: new Audio("./music/Memories.mp3")   
    },
    { 
        name: "I Don't Wanna Talk", 
        cover:"./images/image-1.jpg", 
        singer:'Besomorph',
        audio: new Audio("./music/I-Dont-Wanna-Talk.mp3")   
    },
    {
        name: "Bossa Nova",
        singer: "Bilie Eilish",
        cover: "images/billi.jpg",
        audio: new Audio('./music/song1.mp3'),
      },
      {
        name: "Yanginlar",
        singer: "Canby & Wolker",
        cover: "images/image6.jpg",
        audio: new Audio('./music/song2.mp3'),
      },
      {
        name: "Therefore I Am",
        singer: "Bilie Eilish",
        cover: "images/image1.jpg",
        audio: new Audio('./music/song3.mp3'),
      },
      {
        name: "ty moy kayf",
        singer: "Detka",
        cover: "images/image3.jpg",
        audio: new Audio('./music/song4.mp3'),
      },
      {
        name: "BonBon",
        singer: "Era Istrefi",
        cover: "images/image9.jpg",
        audio: new Audio('./music/song5.mp3'),
      },
      {
        name: " Kaç İstersen",
        singer: "Narkoz & Gazapizm",
        cover: "images/image5.jpg",
        audio: new Audio('./music/song6.mp3'),
      },
      {
        name: "Love Your Vice",
        singer: "JONY",
        cover: "images/image7.jpg",
        audio: new Audio('./music/song7.mp3'),
      },
      {
        name: "Фонтанчик с Дельфином",
        singer: "Гио Пика",
        cover: "images/image4.jpg",
        audio: new Audio('./music/song8.mp3'),
      },
      {
        name: "Dance monkey",
        singer: "Tones and I",
        cover: "images/image8.jpg",
        audio: new Audio('./music/song9.mp3'),
      },
      {
        name: "Childhood",
        singer: "Rauf & faik",
        cover: "images/image2.jpg",
        audio: new Audio('./music/song10.mp3'),
      },
]

const range = document.querySelector('.music-time');
const playBtn = document.querySelector('#play-btn');
const nextBtn = document.querySelector('#next-btn');
const perBtn = document.querySelector('#per-btn');
const musicCover = document.querySelector('#music-cover');
const musicName = document.querySelector('#title');
const coverWrapper = document.querySelector('#image-wrapper')
const rangeValue = document.querySelector('.range-time-value')
const durationTime = document.querySelector('.duration-time')
const currentMusicTime = document.querySelector('.current-music-time')
const singerName = document.querySelector('.title-wrapper h3')

let setBoxShadowInterval;
let setCoverAnimationInterval;
let rotate = 1;
let currentMusic = 0;

let audio = songs[currentMusic].audio;

musicCover.src = songs[currentMusic].cover;

musicName.innerText = songs[currentMusic].name;

singerName.innerText = songs[currentMusic].singer;

audio.addEventListener('canplay', ()=> {
    range.max = audio.duration;
    updateDurationTime()
    
})

audio.addEventListener("timeupdate", (e)=> { 
    updateLineTime(e) 
    updateCurrentTime(e)
})



range.addEventListener('click', (e)=> {
    updatePlayingSongCurrentTime(e)
})

playBtn.addEventListener('click', ()=> {
    if(audio.paused) {
        playBtn.innerHTML = `<i class="fa-solid fa-pause"></i>`
        audio.play()

        if(setBoxShadowInterval ||setCoverAnimationInterval ) {
            clearInterval(setBoxShadowInterval)
            clearInterval(setCoverAnimationInterval)
        }

        setBoxShadowInterval =
             setInterval(setBoxShadow, 1000);

        setCoverAnimationInterval = 
            setInterval(setCoverAnimation, 80);


    }else{

        if(setBoxShadowInterval || setCoverAnimationInterval) {
            clearInterval(setBoxShadowInterval)
            clearInterval(setCoverAnimationInterval)
        }

        playBtn.innerHTML = `<i class="fa-solid fa-play"></i>`;

        audio.pause()
    }
    
})


perBtn.addEventListener('click', ()=> { changeMusic('per') })

nextBtn.addEventListener('click', ()=> { changeMusic('next') })



function changeMusic(state) {

    audio.pause();
    range.value = 0;
    playBtn.innerHTML = `<i class="fa-solid fa-pause"></i>`

    clearInterval(setBoxShadowInterval)
    clearInterval(setCoverAnimationInterval)

    audio.currentTime = 0;

    if( state == 'next' ) {

        if( currentMusic  == songs.length -1 ) {

            currentMusic = 0;

        }else currentMusic +=1;

    }else {

        if( currentMusic == 0 ) {
            currentMusic = songs.length -1;
        } else currentMusic -= 1;

    }

    audio = songs[currentMusic].audio;
    
    musicCover.src = songs[currentMusic].cover;
    
    musicName.innerText = songs[currentMusic].name;

    singerName.innerText = songs[currentMusic].singer;

    setBoxShadowInterval =
        setInterval(setBoxShadow, 1000);

    setCoverAnimationInterval = 
        setInterval(setCoverAnimation, 80);


    audio.addEventListener("timeupdate", (e)=> {
        updateLineTime(e)
        updateCurrentTime(e)
    })

    updateDurationTime()

    audio.play()


}


function updateLineTime(e) {
    const currentTime = e.target.currentTime;

    const duration = e.target.duration;

    let progress = ( currentTime / duration ) * 100;
    
    range.value = progress;

    rangeValue.style.width = `${progress}%`;

}


function updateDurationTime() {
    //update total duration
    let audioDuration = audio.duration;

    let totalMin = Math.floor(audioDuration / 60);

    let totalSec = Math.floor(audioDuration % 60);

    if (totalSec < 10) {
      totalSec = `0${totalSec}`;
    }

    durationTime.innerHTML = `${totalMin} : ${totalSec}`;
}


function updateCurrentTime(e) {
    console.log(e)
    //update playing song current time
    let currentTime = e.target.currentTime;

    let currentMin = Math.floor(currentTime / 60);

    let currentSec = Math.floor(currentTime % 60);

    if (currentSec < 10) {
      currentSec = `0${currentSec}`;
    }

    currentMusicTime.innerHTML = `${currentMin} : ${currentSec}`;
  }

function updatePlayingSongCurrentTime(e) {

    console.log(e);

    let progressWidth = range.clientWidth;

    let clickedOffsetX = e.offsetX;

    let songDuration = audio.duration;

    audio.currentTime = (clickedOffsetX / progressWidth) * songDuration;
}


function setBoxShadow () {

    const color = updateColor() ;
    coverWrapper.style.boxShadow = `0 0 80px  ${ convertHexToRGBA( color, .4 )}`
    coverWrapper.style.border = `6px double ${color}`

}

function setCoverAnimation () {
    coverWrapper.style.transform = ` rotate(${rotate+=1}deg) `
}


function convertHexToRGBA(hexCode, opacity = 1){  
    let hex = hexCode.replace('#', '');
    
    if (hex.length === 3) {
        hex = `${hex[0]}${hex[0]}${hex[1]}${hex[1]}${hex[2]}${hex[2]}`;
    }    
    
    const r = parseInt(hex.substring(0, 2), 16);
    const g = parseInt(hex.substring(2, 4), 16);
    const b = parseInt(hex.substring(4, 6), 16);
    
    if (opacity > 1 && opacity <= 100) {
        opacity = opacity / 100;   
    }

    return `rgba(${r},${g},${b},${opacity})`;
};


function updateColor(){
    let letters = '0123456789ABCDEF';
    let color = '#';

    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }


    return color;
};

  
