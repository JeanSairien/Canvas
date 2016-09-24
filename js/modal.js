$(document).ready(function(){
    $('.apercu, .fa-plus').click(function(){
        $id = this.id;
        $('body').css({
            "overflow": "hidden"
        });
        $('.modal').fadeIn();
        if ($id === "apercu_romain" || $id == "apercu_romain_plus") {
            $('.modal-content').append("<img class='img' src='../pix/dessin_romain.jpg' alt='aperçu canvas'><a href='../users/Romain/Ma_realisation_canvas/index.html'>Voir le canvas de Romain</a>");
        } else if ($id === "apercu_raph" || $id === "apercu_raph_plus") {
            $('.modal-content').append("<img class='img' src='../pix/dessin_raph.jpg' alt='aperçu canvas'><a id='btn-grille' style='cursor:crosshair'>Afficher la grille</a>");
            $('#btn-grille').click(function(){
                $('.modal-content img').remove();
                $('<img class="img" src="../pix/dessin_raph_g.jpg" alt="aperçu canvas">').insertBefore(this)
                $(this).text("À vous de jouer !")
            });
        } else
            console.log('erreur');
    });
    $('.btn-close, .modal-content a').click(function(){
        $('.modal').hide();
        $('.modal-content img, .modal-content a').remove();
        $('body').css({
            "overflow": "visible"
        });
    });
});
