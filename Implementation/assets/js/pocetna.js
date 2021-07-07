$(document).ready(function() {

    popuniNajboljeRecepte();
    popuniKomentare();
});

function popuniNajboljeRecepte() {
    let recepti = JSON.parse(localStorage.getItem("recepti"));
    let ocene = JSON.parse(localStorage.getItem("ocene"));
    let prosecnaOcena;

    recepti.sort(function(a, b) {
        let aP = izracunajProsek(ocene.filter(ocena => ocena.recept == a.ime_recepta));
        let bP = izracunajProsek(ocene.filter(ocena => ocena.recept == b.ime_recepta));

        if (aP == 0) return 1;
        if (bP == 0) return -1;
        return aP - bP;
    });

    // Popuni prvog
    $("#najbolji-naslov-1").html(recepti[0].ime_recepta);
    $("#najbolji-tekst-1").html("Korisnik: " + recepti[0].korisnik + "<br>" + "Tezina: " + recepti[0].tezina + "<br>" + "Vreme: " + recepti[0].vreme);
    prosecnaOcena = izracunajProsek(ocene.filter(ocena => ocena.recept == recepti[0].ime_recepta));
    prosecnaOcena = prosecnaOcena > 0 ? prosecnaOcena.toFixed(1) + "/5.0" : "Unrated";
    $("#najbolji-ocena-1").html(prosecnaOcena);
    $("#najbolji-slika-1").attr("src", recepti[0].mediji[0]);

    // Popuni drugog
    $("#najbolji-naslov-2").html(recepti[1].ime_recepta);
    $("#najbolji-tekst-2").html("Korisnik: " + recepti[1].korisnik + "<br>" + "Tezina: " + recepti[1].tezina + "<br>" + "Vreme: " + recepti[1].vreme);
    prosecnaOcena = izracunajProsek(ocene.filter(ocena => ocena.recept == recepti[1].ime_recepta));
    prosecnaOcena = prosecnaOcena > 0 ? prosecnaOcena.toFixed(1) + "/5.0" : "Unrated";
    $("#najbolji-ocena-2").html(prosecnaOcena);
    $("#najbolji-slika-2").attr("src", recepti[1].mediji[0]);

    // Popuni treceg
    $("#najbolji-naslov-3").html(recepti[2].ime_recepta);
    $("#najbolji-tekst-3").html("Korisnik: " + recepti[2].korisnik + "<br>" + "Tezina: " + recepti[2].tezina + "<br>" + "Vreme: " + recepti[2].vreme);
    prosecnaOcena = izracunajProsek(ocene.filter(ocena => ocena.recept == recepti[2].ime_recepta));
    prosecnaOcena = prosecnaOcena > 0 ? prosecnaOcena.toFixed(1) + "/5.0" : "Unrated";
    $("#najbolji-ocena-3").html(prosecnaOcena);
    $("#najbolji-slika-3").attr("src", recepti[2].mediji[0]);
}

function izracunajProsek(niz) {
    if (niz.length == 0) return 0;
    let suma = 0;
    for (let i = 0; i < niz.length; i++) {
        suma += niz[i].ocena;
    }
    return suma / niz.length;
}

function popuniKomentare() {
    // Hardcode deo
    let komentariHC = [
        {
            "kor_ime": "andrejjokic",
            "komentar": "Recept je poprilicno detaljan i jednostavan. Iz prvog pokusaja sam dobio nesto nalik onom sa slike. Sve pohvale!",
            "recept": "Burger"
        },
        {
            "kor_ime": "nikolakrstic",
            "komentar": "Mozda i previse detaljan recept, ne dozvoljava 'umetnicku slobodu'. Medjutim, ako ste pocetnik na pravom ste mestu. Iskusniji izbegavajte.",
            "recept": "Burger"
        },
        {
            "kor_ime": "nikolakrstic",
            "komentar": "Najbolje palacinke koje sam ikada probao! Pravim ih svakog petka i ne mogu se zasititi!",
            "recept": "Palacinke"
        },
        {
            "kor_ime": "andrejjokic",
            "komentar": "Losa kopija americkog slatkisa. Kolac bude mekan i nikakav, nedovoljno socan, suv, nikakav!!",
            "recept": "Brownie"
        },
    ];
    
    localStorage.setItem("komentari", JSON.stringify(komentariHC));

    // Krece pravi kod
    let komentari = JSON.parse(localStorage.getItem("komentari"));
    
    // Popuni prvog
    $("#komentar-ime-1").html(komentari[0].kor_ime);
    $("#komentar-recept-1").html(komentari[0].recept);
    $("#komentar-tekst-1").html(komentari[0].komentar);

    // Popuni drugog
    $("#komentar-ime-2").html(komentari[1].kor_ime);
    $("#komentar-recept-2").html(komentari[1].recept);
    $("#komentar-tekst-2").html(komentari[1].komentar);

    // Popuni prvog
    $("#komentar-ime-3").html(komentari[2].kor_ime);
    $("#komentar-recept-3").html(komentari[2].recept);
    $("#komentar-tekst-3").html(komentari[2].komentar);

    // Popuni prvog
    $("#komentar-ime-4").html(komentari[3].kor_ime);
    $("#komentar-recept-4").html(komentari[3].recept);
    $("#komentar-tekst-4").html(komentari[3].komentar);
}