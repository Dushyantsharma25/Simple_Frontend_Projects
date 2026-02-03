const k = ['w','a','s','d','j','k','l'];

document.addEventListener("keydown", (event) => {
    if (k.includes(event.key)) {
        const sound = new Audio(`./sounds/${event.key}.mp3`);
        sound.play();
    }
});