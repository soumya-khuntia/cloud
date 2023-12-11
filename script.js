function randomText(){
    var text = ("abcdefghijklmnopqrstuvwxyz0123456789♡");
    letter = text[Math.floor(Math.random() * text.length)];
    return letter;
}

function rain(){
    let cloud = document.querySelector('.cloud');
    let e = document.createElement('div');
    let left = Math.floor(Math.random() * 310);
    let size = Math.random() * 1.5;
    let duration = Math.random() * 1;

    e.classList.add('text');
    cloud.appendChild(e);
    e.innerText = randomText()
    e.style.left = left + 'px';
    e.style.fontSize = 0.5+size+'em';
    e.style.animationDuration = 1+duration+'s';

    setTimeout(function(){
        cloud.removeChild(e)
    },2000)
}

setInterval(function(){
    rain()
},200);