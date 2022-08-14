if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
    ;
} else { 
    $("head").html('<meta http-equiv="refresh" content="0; url=desktop.html">');
}
var info = () => {
    $('#info').toggleClass("show");
    $('.infoText').toggleClass("show");
    $('.infoImg').toggleClass("show");
}