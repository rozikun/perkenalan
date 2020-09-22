function animasiKiri() {
    document.getElementById("tentang").classList.add("animate__animated");
    document.getElementById("tentang").classList.add("animate__fadeInLeft");
}

//animate scroll
$(window).scroll(function() {
    var hT = $('#atas').offset().top,
    hH = $('#atas').outerHeight(),
    wH = $(window).height(),
    wS = $(this).scrollTop();
    if (wS > (hT+hH-wH)){
        document.getElementById("tentang").classList.add("animate__animated");
        document.getElementById("tentang").classList.add("animate__fadeInLeft");
    }
});

$(window).scroll(function() {
    var hT = $('#tentang').offset().top,
    hH = $('#tentang').outerHeight(),
    wH = $(window).height(),
    wS = $(this).scrollTop();
    if (wS > (hT+hH-wH)){
        document.getElementById("pendidikan").classList.add("animate__animated");
        document.getElementById("pendidikan").classList.add("animate__fadeInRight");
    }
});