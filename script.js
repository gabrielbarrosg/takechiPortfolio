function toggleMute1() {
    var video=document.getElementById("video1")
    if(video.muted){
        video.muted = false;
    } else {
        video.muted = true;
    }
}
function toggleMute2() {
    var video=document.getElementById("video2")
    if(video.muted){
        video.muted = false;
    } else {
        video.muted = true;
    }
}
function toggleMute3() {
    var video=document.getElementById("video3")
    if(video.muted){
        video.muted = false;
    } else {
        video.muted = true;
    }
}
function toggleMute4() {
    var video=document.getElementById("video4")
    if(video.muted){
        video.muted = false;
    } else {
        video.muted = true;
    }
}
function toggleMute5() {
    var video=document.getElementById("video5")
    if(video.muted){
        video.muted = false;
    } else {
        video.muted = true;
    }
}
function toggleMute6() {
    var video=document.getElementById("video6")
    if(video.muted){
        video.muted = false;
    } else {
        video.muted = true;
    }
}

window.addEventListener('scroll', reveal);
function reveal(){
    var reveals = document.querySelectorAll('.reveal');
    for(var i = 0; i < reveals.length; i++){
        var windowheight = window.innerHeight;
        var revealtop = reveals[i].getBoundingClientRect().top;
        var revealpoint = 150;

        if(revealtop < windowheight - revealpoint){
            reveals[i].classList.add('active');
        }
        else {
            reveals[i].classList.remove('active');
        }
    }
}


