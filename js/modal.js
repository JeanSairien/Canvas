$(document).ready(function(){
    $('.apercu, .fa-plus').click(function(){
        $id = this.id;
        $('body').css({
            "overflow": "hidden"
        });
        $('.modal').fadeIn();
        if ($id === "apercu_romain" || $id == "apercu_romain_plus") {
            $('.modal-content').append("<img src='../pix/apercu_romain.jpg' alt='aperçu canvas'>");
        } else if ($id === "apercu_raph" || $id === "apercu_raph_plus") {
            $('.modal-content').append("<img src='../pix/apercu_raph.jpg' alt='aperçu canvas'>");
        } else
            console.log('erreur');
    });
    $('.btn-close').click(function(){
        $('.modal').hide();
        $('.modal-content img').remove();
        $('body').css({
            "overflow": "visible"
        });
    });
});
