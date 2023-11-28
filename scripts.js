document.body.addEventListener('keyup',(evento)=>{
    playSound(evento.code.toLowerCase());
});

document.querySelector('.composer button').addEventListener('click',()=>{
    let song=document.querySelector('#input').value;
    if(song !== ''){
        let songArray=song.split('');
        playComposition(songArray);
    }
});

function playSound(sound){
    let audioElement=document.querySelector(`#s_${sound}`);//só funciona com `` crase
    let keyElement = document.querySelector(`div[data-key="${sound}"]`);
    if(audioElement){
        audioElement.currentTime=0;
        audioElement.play();
    }

    if(keyElement){
        keyElement.classList.add('active');

        setTimeout(()=>{
            keyElement.classList.remove('active');
        },500);
    }
}




