if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
    //pass
} else {
    $('head').prepend('<meta http-equiv="refresh" content="0; url=https://libertyteam.github.io/Desktop/index.html">')
}
function menu(){
    $(".menuText").toggleClass("show");
    $(".menuT").toggleClass("show");
    $(".menuD").toggleClass("show");
}
function detalOn(){
    $(".app1D").addClass("show");
    $(".appText").addClass("none");
}
function detalOff(){
    $(".app1D").removeClass("show");
    $(".appText").removeClass("none");
}
