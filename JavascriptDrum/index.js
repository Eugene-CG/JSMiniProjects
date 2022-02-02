function remove(e) 
{
    e.target.classList.remove("playing");
}

function playSound(e)
{
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);

    if(!audio) return;

    key.classList.add("playing");
    audio.currentTime = 0;
    audio.volume = 0.2;
    audio.play();
    key.addEventListener("transitionend", remove);
}


window.addEventListener('keydown', playSound);