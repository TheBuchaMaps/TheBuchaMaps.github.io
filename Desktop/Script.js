if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
    $('head').prepend('<meta http-equiv="refresh" content="0; url=Mobile/index.html">')
} else {
    //pass
}
function detalOn(){
    $(".appText").addClass("none");
    $(".app1D").addClass("show");
}
function detalOff(){
    $(".appText").removeClass("none");
    $(".app1D").removeClass("show");
}