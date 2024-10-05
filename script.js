let now_playing = document.querySelector('.now-playing');
let track_art = document.querySelector('.track-art');
let track_name = document.querySelector('.track-name');
let track_artist = document.querySelector('.track-artist');

let playpause_btn = document.querySelector('.playpause-track');
let next_btn = document.querySelector('.next-track');
let prev_btn = document.querySelector('.prev-track');

let seek_slider = document.querySelector('.seek_slider');
let volume_slider = document.querySelector('.volume_slider');
let curr_time = document.querySelector('.current-time');
let total_duration = document.querySelector('.total-duration');
let wave = document.getElementById('wave');
let randomIcon = document.querySelector('.fa-random');
let curr_track = document.createElement('audio');

let track_index = 0;
let isPlaying = false;
let isRandom = false;
let updateTimer;

const music_list = [
    {
        img : 'images/c.png',
        name : 'track1',
        artist : 'Dar Alsalam',
        music : 'music/track1.mp3'
    },
    {
        img : 'images/c.png',
        name : 'track2',
        artist : 'Dar Alsalam',
        music : 'music/track2.mp3'
    },
    {
        img : 'images/c.png',
        name : 'track3',
        artist : 'Dar Alsalam',
        music : 'music/track3.mp3'
    },
    {
        img : 'images/c.png',
        name : 'track4',
        artist : 'Dar Alsalam',
        music : 'music/track4.mp3'
    },
    {
        img : 'images/c.png',
        name : 'track5',
        artist : 'Dar Alsalam',
        music : 'music/track5.mp3'
    },
    {
        img : 'images/c.png',
        name : 'track6',
        artist : 'Dar Alsalam',
        music : 'music/track6.mp3'
    },
    {
        img : 'images/c.png',
        name : 'track7',
        artist : 'Dar Alsalam',
        music : 'music/track7.mp3'
    },
    {
        img : 'images/c.png',
        name : 'track8',
        artist : 'Dar Alsalam',
        music : 'music/track8.mp3'
    },
    {
        img : 'images/c.png',
        name : 'track9',
        artist : 'Dar Alsalam',
        music : 'music/track9.mp3'
    },
    {
        img : 'images/c.png',
        name : 'track10',
        artist : 'Dar Alsalam',
        music : 'music/track10.mp3'
    },
    {
        img : 'images/c.png',
        name : 'track11',
        artist : 'Dar Alsalam',
        music : 'music/track11.mp3'
    },
    {
        img : 'images/c.png',
        name : 'track12',
        artist : 'Dar Alsalam',
        music : 'music/track12.mp3'
    },
    {
        img : 'images/c.png',
        name : 'track13',
        artist : 'Dar Alsalam',
        music : 'music/track13.mp3'
    },
    {
        img : 'images/c.png',
        name : 'track14',
        artist : 'Dar Alsalam',
        music : 'music/track14.mp3'
    },
    {
        img : 'images/c.png',
        name : 'track15',
        artist : 'Dar Alsalam',
        music : 'music/track15.mp3'
    },
    {
        img : 'images/c.png',
        name : 'track16',
        artist : 'Dar Alsalam',
        music : 'music/track16.mp3'
    },
    {
        img : 'images/c.png',
        name : 'track17',
        artist : 'Dar Alsalam',
        music : 'music/track17.mp3'
    },{
        img : 'images/c.png',
        name : 'track18',
        artist : 'Dar Alsalam',
        music : 'music/track18.mp3'
    },{
        img : 'images/c.png',
        name : 'track19',
        artist : 'Dar Alsalam',
        music : 'music/track19.mp3'
    },{
        img : 'images/c.png',
        name : 'track20',
        artist : 'Dar Alsalam',
        music : 'music/track20.mp3'
    },{
        img : 'images/c.png',
        name : 'track21',
        artist : 'Dar Alsalam',
        music : 'music/track21.mp3'
    },{
        img : 'images/c.png',
        name : 'track22',
        artist : 'Dar Alsalam',
        music : 'music/track22.mp3'
    },{
        img : 'images/c.png',
        name : 'track23',
        artist : 'Dar Alsalam',
        music : 'music/track23.mp3'
    },{
        img : 'images/c.png',
        name : 'track24',
        artist : 'Dar Alsalam',
        music : 'music/track24.mp3'
    },{
        img : 'images/c.png',
        name : 'track25',
        artist : 'Dar Alsalam',
        music : 'music/track25.mp3'
    },{
        img : 'images/c.png',
        name : 'track26',
        artist : 'Dar Alsalam',
        music : 'music/track26.mp3'
    },{
        img : 'images/c.png',
        name : 'track27',
        artist : 'Dar Alsalam',
        music : 'music/track27.mp3'
    },{
        img : 'images/c.png',
        name : 'track28',
        artist : 'Dar Alsalam',
        music : 'music/track28.mp3'
    },{
        img : 'images/c.png',
        name : 'track29',
        artist : 'Dar Alsalam',
        music : 'music/track29.mp3'
    },{
        img : 'images/c.png',
        name : 'track30',
        artist : 'Dar Alsalam',
        music : 'music/track30.mp3'
    },{
        img : 'images/c.png',
        name : 'track31',
        artist : 'Dar Alsalam',
        music : 'music/track31.mp3'
    },{
        img : 'images/c.png',
        name : 'track32',
        artist : 'Dar Alsalam',
        music : 'music/track32.mp3'
    },{
        img : 'images/c.png',
        name : 'track33',
        artist : 'Dar Alsalam',
        music : 'music/track33.mp3'
    },{
        img : 'images/c.png',
        name : 'track34',
        artist : 'Dar Alsalam',
        music : 'music/track34.mp3'
    },{
        img : 'images/c.png',
        name : 'track35',
        artist : 'Dar Alsalam',
        music : 'music/track35.mp3'
    },{
        img : 'images/c.png',
        name : 'track36',
        artist : 'Dar Alsalam',
        music : 'music/track36.mp3'
    },{
        img : 'images/c.png',
        name : 'track37',
        artist : 'Dar Alsalam',
        music : 'music/track37.mp3'
    },{
        img : 'images/c.png',
        name : 'track38',
        artist : 'Dar Alsalam',
        music : 'music/track38.mp3'
    },{
        img : 'images/c.png',
        name : 'track39',
        artist : 'Dar Alsalam',
        music : 'music/track39.mp3'
    },{
        img : 'images/6.png',
        name : 'track40',
        artist : 'Dar Alsalam',
        music : 'music/track40.mp3'
    },{
        img : 'images/6.png',
        name : 'track41',
        artist : 'Dar Alsalam',
        music : 'music/track41.mp3'
    },{
        img : 'images/6.png',
        name : 'track42',
        artist : 'Dar Alsalam',
        music : 'music/track42.mp3'
    },{
        img : 'images/6.png',
        name : 'track43',
        artist : 'Dar Alsalam',
        music : 'music/track43.mp3'
    },{
        img : 'images/6.png',
        name : 'track44',
        artist : 'Dar Alsalam',
        music : 'music/track44.mp3'
    },{
        img : 'images/6.png',
        name : 'track45',
        artist : 'Dar Alsalam',
        music : 'music/track45.mp3'
    },{
        img : 'images/6.png',
        name : 'track46',
        artist : 'Dar Alsalam',
        music : 'music/track46.mp3'
    },{
        img : 'images/6.png',
        name : 'track47',
        artist : 'Dar Alsalam',
        music : 'music/track47.mp3'
    },{
        img : 'images/6.png',
        name : 'track48',
        artist : 'Dar Alsalam',
        music : 'music/track48.mp3'
    },{
        img : 'images/6.png',
        name : 'track49',
        artist : 'Dar Alsalam',
        music : 'music/track49.mp3'
    },{
        img : 'images/6.png',
        name : 'track50',
        artist : 'Dar Alsalam',
        music : 'music/track50.mp3'
    },
         
];
     



loadTrack(track_index);

function loadTrack(track_index){
    clearInterval(updateTimer);
    reset();

    curr_track.src = music_list[track_index].music;
    curr_track.load();

    track_art.style.backgroundImage = "url(" + music_list[track_index].img + ")";
    track_name.textContent = music_list[track_index].name;
    track_artist.textContent = music_list[track_index].artist;
    now_playing.textContent = "Playing music " + (track_index + 1) + " of " + music_list.length;

    updateTimer = setInterval(setUpdate, 1000);

    curr_track.addEventListener('ended', nextTrack);
    random_bg_color();
}

function random_bg_color(){
    let hex = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e'];
    let a;

    function populate(a){
        for(let i=0; i<6; i++){
            let x = Math.round(Math.random() * 14);
            let y = hex[x];
            a += y;
        }
        return a;
    }
    let Color1 = populate('#');
    let Color2 = populate('#');
    var angle = 'to right';

    let gradient = 'linear-gradient(' + angle + ',' + Color1 + ', ' + Color2 + ")";
    document.body.style.background = gradient;
}
function reset(){
    curr_time.textContent = "00:00";
    total_duration.textContent = "00:00";
    seek_slider.value = 0;
}
function randomTrack(){
    isRandom ? pauseRandom() : playRandom();
}
function playRandom(){
    isRandom = true;
    randomIcon.classList.add('randomActive');
}
function pauseRandom(){
    isRandom = false;
    randomIcon.classList.remove('randomActive');
}
function repeatTrack(){
    let current_index = track_index;
    loadTrack(current_index);
    playTrack();
}
function playpauseTrack(){
    isPlaying ? pauseTrack() : playTrack();
}
function playTrack(){
    curr_track.play();
    isPlaying = true;
    track_art.classList.add('rotate');
    wave.classList.add('loader');
    playpause_btn.innerHTML = '<i class="fa fa-pause-circle fa-5x"></i>';
}
function pauseTrack(){
    curr_track.pause();
    isPlaying = false;
    track_art.classList.remove('rotate');
    wave.classList.remove('loader');
    playpause_btn.innerHTML = '<i class="fa fa-play-circle fa-5x"></i>';
}
function nextTrack(){
    if(track_index < music_list.length - 1 && isRandom === false){
        track_index += 1;
    }else if(track_index < music_list.length - 1 && isRandom === true){
        let random_index = Number.parseInt(Math.random() * music_list.length);
        track_index = random_index;
    }else{
        track_index = 0;
    }
    loadTrack(track_index);
    playTrack();
}
function prevTrack(){
    if(track_index > 0){
        track_index -= 1;
    }else{
        track_index = music_list.length -1;
    }
    loadTrack(track_index);
    playTrack();
}
function seekTo(){
    let seekto = curr_track.duration * (seek_slider.value / 100);
    curr_track.currentTime = seekto;
}
function setVolume(){
    curr_track.volume = volume_slider.value / 100;
}
function setUpdate(){
    let seekPosition = 0;
    if(!isNaN(curr_track.duration)){
        seekPosition = curr_track.currentTime * (100 / curr_track.duration);
        seek_slider.value = seekPosition;

        let currentMinutes = Math.floor(curr_track.currentTime / 60);
        let currentSeconds = Math.floor(curr_track.currentTime - currentMinutes * 60);
        let durationMinutes = Math.floor(curr_track.duration / 60);
        let durationSeconds = Math.floor(curr_track.duration - durationMinutes * 60);

        if(currentSeconds < 10) {currentSeconds = "0" + currentSeconds; }
        if(durationSeconds < 10) { durationSeconds = "0" + durationSeconds; }
        if(currentMinutes < 10) {currentMinutes = "0" + currentMinutes; }
        if(durationMinutes < 10) { durationMinutes = "0" + durationMinutes; }

        curr_time.textContent = currentMinutes + ":" + currentSeconds;
        total_duration.textContent = durationMinutes + ":" + durationSeconds;
    }
}
