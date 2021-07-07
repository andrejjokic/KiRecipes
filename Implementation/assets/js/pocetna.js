$(document).ready(function() {
    hardcode();
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

function hardcode() {
    let receptiHC = [
        {
            ime_recepta: "Biftek",
            vrsta_jela: "glavno_jelo",
            recept: "Koraci recepta",
            tezina: 5,
            vreme: "1h+",
            mediji: ["assets/images/glavna_jela/biftek1.jpg", "assets/images/glavna_jela/biftek2.jpg", "assets/images/glavna_jela/biftek3.jpg"],
            video : "assets/images/video1.mp4",
            korisnik: "andrejjokic"
        },
        {
            ime_recepta: "Sushi",
            vrsta_jela: "glavno_jelo",
            recept: "Koraci recepta",
            tezina: 5,
            vreme: "30-60min",
            mediji: ["assets/images/glavna_jela/sushi1.png", "assets/images/glavna_jela/sushi2.jpg"],
            video : "assets/images/video1.mp4",
            korisnik: "andrejjokic"
        },
        {
            ime_recepta: "Burger",
            vrsta_jela: "glavno_jelo",
            recept: "Koraci recepta",
            tezina: 3,
            vreme: "15-30min",
            mediji: ["assets/images/glavna_jela/burger1.jpg", "assets/images/glavna_jela/burger2.jpg"],
            video : "assets/images/video1.mp4",
            korisnik: "nikolakrstic"
        },
        {
            ime_recepta: "Batak",
            vrsta_jela: "glavno_jelo",
            recept: "Koraci recepta",
            tezina: 2,
            vreme: "15-30min",
            mediji: ["assets/images/glavna_jela/batak1.png", "assets/images/glavna_jela/batak2.jpg"],
            video : "assets/images/video1.mp4",
            korisnik: "andrejjokic"
        },
        {
            ime_recepta: "Medaljoni",
            vrsta_jela: "glavno_jelo",
            recept: "Koraci recepta",
            tezina: 4,
            vreme: "30-60min",
            mediji: ["assets/images/glavna_jela/medaljoni1.jpg", "assets/images/glavna_jela/medaljoni2.jpg"],
            video : "assets/images/video1.mp4",
            korisnik: "anamilicevic"
        },
        {
            ime_recepta: "Pasulj",
            vrsta_jela: "glavno_jelo",
            recept: "Koraci recepta",
            tezina: 4,
            vreme: "1h+",
            mediji: ["assets/images/glavna_jela/pasulj1.jpg", "assets/images/glavna_jela/pasulj2.jpg", "assets/images/glavna_jela/pasulj3.jpg"],
            video : "assets/images/video1.mp4",
            korisnik: "petarpetrovic"
        },
        {
            ime_recepta: "Pica",
            vrsta_jela: "glavno_jelo",
            recept: "Koraci recepta",
            tezina: 2,
            vreme: "0-15min",
            mediji: ["assets/images/glavna_jela/pica1.png", "assets/images/glavna_jela/pica2.jpg", "assets/images/glavna_jela/pica3.jpg"],
            video : "assets/images/video1.mp4",
            korisnik: "nikolakrstic"
        },
        {
            ime_recepta: "Supa",
            vrsta_jela: "predjelo",
            recept: "Koraci recepta",
            tezina: 1,
            vreme: "0-15min",
            mediji: ["assets/images/predjela/supa1.jpg", "assets/images/predjela/supa2.jpg"],
            video : "assets/images/video1.mp4",
            korisnik: "petarpetrovic"
        },
        {
            ime_recepta: "Meze",
            vrsta_jela: "predjelo",
            recept: "Koraci recepta",
            tezina: 1,
            vreme: "0-15min",
            mediji: ["assets/images/predjela/meze1.jpg"],
            video : "assets/images/video1.mp4",
            korisnik: "petarpetrovic"
        },
        {
            ime_recepta: "Gibanica",
            vrsta_jela: "predjelo",
            recept: "Koraci recepta",
            tezina: 4,
            vreme: "30-60min",
            mediji: ["assets/images/predjela/gibanica1.jpg", "assets/images/predjela/gibanica2.jpg", "assets/images/predjela/gibanica3.jpg"],
            video : "assets/images/video1.mp4",
            korisnik: "petarpetrovic"
        },
        {
            ime_recepta: "Salata",
            vrsta_jela: "uzina",
            recept: "Koraci recepta",
            tezina: 1,
            vreme: "0-15min",
            mediji: ["assets/images/uzine/salata1.jpg", "assets/images/uzine/salata2.jpg"],
            video : "assets/images/video1.mp4",
            korisnik: "anamilicevic"
        },
        {
            ime_recepta: "Sendvic",
            vrsta_jela: "uzina",
            recept: "Koraci recepta",
            tezina: 1,
            vreme: "0-15min",
            mediji: ["assets/images/uzine/sendvic1.jpg", "assets/images/uzine/sendvic2.jpg"],
            video : "assets/images/video1.mp4",
            korisnik: "nikolakrstic"
        },
        {
            ime_recepta: "Smoothie",
            vrsta_jela: "uzina",
            recept: "Koraci recepta",
            tezina: 1,
            vreme: "0-15min",
            mediji: ["assets/images/uzine/smoothie1.jpg", "assets/images/uzine/smoothie2.jpg", "assets/images/uzine/smoothie3.jpg"],
            video : "assets/images/video1.mp4",
            korisnik: "andrejjokic"
        },
        {
            ime_recepta: "Palacinke",
            vrsta_jela: "dezert",
            recept: "Koraci recepta",
            tezina: 1,
            vreme: "15-30min",
            mediji: ["assets/images/dezerti/palacinke1.jpg", "assets/images/dezerti/palacinke2.jpg", "assets/images/dezerti/palacinke3.jpg"],
            video : "assets/images/video1.mp4",
            korisnik: "andrejjokic"
        },
        {
            ime_recepta: "Cheesecake",
            vrsta_jela: "dezert",
            recept: "Koraci recepta",
            tezina: 3,
            vreme: "15-30min",
            mediji: ["assets/images/dezerti/cheesecake1.jpg"],
            video : "assets/images/video1.mp4",
            korisnik: "anamilicevic"
        },
        {
            ime_recepta: "Brownie",
            vrsta_jela: "dezert",
            recept: "Koraci recepta",
            tezina: 2,
            vreme: "15-30min",
            mediji: ["assets/images/dezerti/brownie1.jpg", "assets/images/dezerti/brownie2.jpg"],
            video : "assets/images/video1.mp4",
            korisnik: "nikolakrstic"
        },
    ];

    let oceneHC = [
        {
            "kor_ime": "anamilicevic",
            "ocena": 3,
            "recept": "Biftek"
        },
        {
            "kor_ime": "nikolakrstic",
            "ocena": 4,
            "recept": "Biftek"
        },
        {
            "kor_ime": "petarpetrovic",
            "ocena": 4,
            "recept": "Biftek"
        },
        {
            "kor_ime": "nikolakrstic",
            "ocena": 2,
            "recept": "Sushi"
        },
        {
            "kor_ime": "anamilicevic",
            "ocena": 1,
            "recept": "Sushi"
        },
        {
            "kor_ime": "andrejjokic",
            "ocena": 4,
            "recept": "Burger"
        },
        {
            "kor_ime": "anamilicevic",
            "ocena": 2,
            "recept": "Burger"
        },
        {
            "kor_ime": "petarpetrovic",
            "ocena": 3,
            "recept": "Burger"
        },
        {
            "kor_ime": "nikolakrstic",
            "ocena": 2,
            "recept": "Batak"
        },
        {
            "kor_ime": "andrejjokic",
            "ocena": 4,
            "recept": "Pasulj"
        },
        {
            "kor_ime": "nikolakrstic",
            "ocena": 3,
            "recept": "Pasulj"
        },
        {
            "kor_ime": "andrejjokic",
            "ocena": 5,
            "recept": "Pica"
        },
        {
            "kor_ime": "anamilicevic",
            "ocena": 5,
            "recept": "Pica"
        },
        {
            "kor_ime": "petarpetrovic",
            "ocena": 5,
            "recept": "Pica"
        },
        {
            "kor_ime": "andrejjokic",
            "ocena": 4,
            "recept": "Supa"
        },
        {
            "kor_ime": "andrejjokic",
            "ocena": 4,
            "recept": "Gibanica"
        },
        {
            "kor_ime": "nikolakrstic",
            "ocena": 3,
            "recept": "Gibanica"
        },
        {
            "kor_ime": "anamilicevic",
            "ocena": 4,
            "recept": "Gibanica"
        },
        {
            "kor_ime": "andrejjokic",
            "ocena": 5,
            "recept": "Salata"
        },
        {
            "kor_ime": "nikolakrstic",
            "ocena": 5,
            "recept": "Smoothie"
        },
        {
            "kor_ime": "anamilicevic",
            "ocena": 4,
            "recept": "Smoothie"
        },
        {
            "kor_ime": "anamilicevic",
            "ocena": 5,
            "recept": "Palacinke"
        },
        {
            "kor_ime": "nikolakrstic",
            "ocena": 5,
            "recept": "Palacinke"
        },
        {
            "kor_ime": "andrejjokic",
            "ocena": 2,
            "recept": "Brownie"
        }
    ];

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

    let korisniciHC = [
        {
            kor_ime: "andrejjokic",
            slika: "assets/images/customer1.png"
        },
        {
            kor_ime: "nikolakrstic",
            slika: "assets/images/customer2.png"
        },
        {
            kor_ime: "nikolakrstic99",
            slika: "assets/images/blog-details/c2.jpg"
        },
    ];

    if (localStorage.getItem("recepti") == null) {
        localStorage.setItem("recepti", JSON.stringify(receptiHC));
    }

    if (localStorage.getItem("ocene") == null) {
        localStorage.setItem("ocene", JSON.stringify(oceneHC));
    }

    if (localStorage.getItem("komentari") == null) {
        localStorage.setItem("komentari", JSON.stringify(komentariHC));
    }

    if (localStorage.getItem("korisnici") == null) {
        localStorage.setItem("korisnici", JSON.stringify(korisniciHC));
    }

    if (localStorage.getItem("korisnik") == null) {
        localStorage.setItem("korisnik", JSON.stringify({kor_ime: "nikolakrstic99", slika: "assets/images/blog-details/c2.jpg"}));
    }

    if (localStorage.getItem("jezik") == null) {
        localStorage.setItem("jezik", "srpski");
    }
}