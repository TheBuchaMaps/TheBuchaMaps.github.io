if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
    $("head").html('<meta http-equiv="refresh" content="0; url=mobile.html">');
} else { 
    ;
}