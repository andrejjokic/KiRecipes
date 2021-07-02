$(document).ready(function(){

    
    let recept=JSON.parse(localStorage.getItem("recept"));
    $("#nazivJela").text(recept.ime_recepta);
    $("#vrstaJela").text(recept.vrsta_jela);
    $("#recept").text(recept.recept);
    $("#vreme").text(recept.vreme);
    $("#tezina").text(recept.tezina);
    $("#korisnik").text(recept.korisnik);

    
});