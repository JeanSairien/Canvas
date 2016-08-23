var header = document.querySelector('header');
var headerContent = document.getElementById('header');
var bigLogo = document.getElementById('logo_normal');
var stretchLogo = document.getElementById('logo_stretch');
var firstArticle = document.querySelectorAll('article')[0];

var scrollY = function() {
    var supportPageOffset = window.pageXOffset !== undefined;
    var isCSS1Compat = ((document.compatMode || "") === "CSS1Compat");
    return supportPageOffset ? window.pageYOffset : isCSS1Compat ? document.documentElement.scrollTop : document.body.scrollTop;
};
var onScroll = function() {
    if (scrollY() > 70) {
        header.style.position = "fixed";
        header.style.height = "50px";
        headerContent.style.height = "50px";
        bigLogo.style.display = "none";
        stretchLogo.style.display = "block";
        firstArticle.style.marginTop = "220px";

    } else {
        header.style.position = "relative";
        header.style.height = "110px";
        headerContent.style.height = "110px";
        bigLogo.style.display = "block";
        stretchLogo.style.display = "none";
        firstArticle.style.marginTop = "0px";
    }
};
window.addEventListener('scroll', onScroll);
