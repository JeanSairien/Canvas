$(document).ready(function(){
    $landing = $('.landing');
    $header = $('header');
    $main = $('main');
    if (document.cookie === "") {
        document.cookie = "No need to relaunch the canvas landing page bro' :)"
        $header.hide();
        $main.hide();
        function launchWebsite(){
            $landing.fadeOut('slow');
            $header.fadeIn('slow')
            $main.fadeIn('slow')
        }
        setTimeout(launchWebsite, 8000);

    } else {
        $landing.hide();
    }



});
