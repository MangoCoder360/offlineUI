function pickSplash(){
    var splashText = document.getElementById("splashText");
    var splashTexts = ["deez nuts","idk, seems kinda suspect","also try cuberacers","not blocked","made with unity","ha you already know"];
    splashText.innerHTML = splashTexts[Math.floor(Math.random()*splashTexts.length)];
}
setTimeout(pickSplash,200);