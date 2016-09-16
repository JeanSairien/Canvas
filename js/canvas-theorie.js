// Je stocke mon élément canvas dans une variable
var canvas = document.getElementById('canvas-theorie');
var h = canvas.height;
var w = canvas.width;
// Je récupère son contexte qui peut être un dessin en 2D ou en 3D (webGL)
var ctx = canvas.getContext('2d');

function showMyDraw() {



}

function autoGrid(ctx, h, w){
    var xWidth = w,
        yHeight = h,
        i = 0,
        j = 0,
        k = 0,
        l = 0;

    // Je génère les "petits" quadrillages en premier
    ctx.beginPath();
    ctx.lineWidth = 1;
    while (i < yHeight) {i = i + 25; ctx.moveTo(0, i); ctx.lineTo(xWidth, i);}
    while (j < xWidth) {j = j + 25; ctx.moveTo(j, 0); ctx.lineTo(j, yHeight);}
    ctx.strokeStyle = "#ccc";
    ctx.stroke();

    // Je génère ensuite les "gros" quadrillages
    ctx.beginPath();
    ctx.lineWidth = 1;
    while (k < xWidth) {k = k + 100; ctx.moveTo(k, 0); ctx.lineTo(k, yHeight);}
    while (l < yHeight) {l = l + 100; ctx.moveTo(0, l); ctx.lineTo(xWidth, l);}
    ctx.strokeStyle = "#999"
    ctx.stroke();
}

window.addEventListener('load', function() {
    showMyDraw();
    autoGrid(ctx, h, w);
});
