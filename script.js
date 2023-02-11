// Splash text
function pickSplash(){
    var splashText = document.getElementById("splashText");
    var splashTexts = ["deez nuts","idk, seems kinda suspect","also try cuberacers","not blocked","made with unity","ha you already know","kyle is sus","9/11"];
    splashText.innerHTML = splashTexts[Math.floor(Math.random()*splashTexts.length)];
}
setTimeout(pickSplash,300);


// Tip of the day
function showToast(){
    var toastRef = document.getElementById('tipOfTheDay');
    var toast = new bootstrap.Toast(toastRef);
    toast.show();
}
//setTimeout(showToast,5000);