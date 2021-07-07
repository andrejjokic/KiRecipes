$(document).ready(function () {

    $(".link-grupe").click(function() {
        localStorage.setItem("trenutna_grupa_recepata", $(this).attr("id"));
    });
});