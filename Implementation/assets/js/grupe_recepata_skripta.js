$(document).ready(function() {

    // Sluzi samo za testiranje, bice prebaceno u main skriptu
    let receptiHC = [
        {
            ime_recepta: "Biftek",
            vrsta_jela: "glavno_jelo",
            recept: "Koraci recepta",
            tezina: 5,
            vreme: "1h+",
            mediji: ["assets/images/glavna_jela/biftek1.jpg", "assets/images/glavna_jela/biftek2.jpg", "assets/images/glavna_jela/bifftek3.jpg"],
            korisnik: "andrejjokic"
        },
        {
            ime_recepta: "Sushi",
            vrsta_jela: "glavno_jelo",
            recept: "Koraci recepta",
            tezina: 5,
            vreme: "30-60min",
            mediji: ["assets/images/glavna_jela/sushi1.png", "assets/images/glavna_jela/sushi2.jpg"],
            korisnik: "andrejjokic"
        },
        {
            ime_recepta: "Burger",
            vrsta_jela: "glavno_jelo",
            recept: "Koraci recepta",
            tezina: 3,
            vreme: "15-30min",
            mediji: ["assets/images/glavna_jela/burger1.jpg", "assets/images/glavna_jela/burger2.jpg"],
            korisnik: "nikolakrstic"
        },
        {
            ime_recepta: "Batak",
            vrsta_jela: "glavno_jelo",
            recept: "Koraci recepta",
            tezina: 2,
            vreme: "15-30min",
            mediji: ["assets/images/glavna_jela/batak1.png", "assets/images/glavna_jela/batak2.jpg"],
            korisnik: "andrejjokic"
        },
        {
            ime_recepta: "Medaljoni",
            vrsta_jela: "glavno_jelo",
            recept: "Koraci recepta",
            tezina: 4,
            vreme: "30-60min",
            mediji: ["assets/images/glavna_jela/medaljoni1.jpg", "assets/images/glavna_jela/medaljoni2.jpg"],
            korisnik: "anamilicevic"
        },
        {
            ime_recepta: "Pasulj",
            vrsta_jela: "glavno_jelo",
            recept: "Koraci recepta",
            tezina: 4,
            vreme: "1h+",
            mediji: ["assets/images/glavna_jela/pasulj1.jpg", "assets/images/glavna_jela/pasulj2.jpg", "assets/images/glavna_jela/pasulj3.jpg"],
            korisnik: "petarpetrovic"
        },
        {
            ime_recepta: "Pica",
            vrsta_jela: "glavno_jelo",
            recept: "Koraci recepta",
            tezina: 2,
            vreme: "0-15min",
            mediji: ["assets/images/glavna_jela/pica1.png", "assets/images/glavna_jela/pica2.jpg", "assets/images/glavna_jela/pica3.jpg"],
            korisnik: "nikolakrstic"
        },
        {
            ime_recepta: "Supa",
            vrsta_jela: "predjelo",
            recept: "Koraci recepta",
            tezina: 1,
            vreme: "0-15min",
            mediji: ["assets/images/predjela/supa1.jpg", "assets/images/predjela/supa2.jpg"],
            korisnik: "petarpetrovic"
        },
        {
            ime_recepta: "Meze",
            vrsta_jela: "predjelo",
            recept: "Koraci recepta",
            tezina: 1,
            vreme: "0-15min",
            mediji: ["assets/images/predjela/meze1.jpg"],
            korisnik: "petarpetrovic"
        },
        {
            ime_recepta: "Gibanica",
            vrsta_jela: "predjelo",
            recept: "Koraci recepta",
            tezina: 4,
            vreme: "30-60min",
            mediji: ["assets/images/predjela/gibanica1.jpg", "assets/images/predjela/gibanica2.jpg", "assets/images/predjela/gibanica3.jpg"],
            korisnik: "petarpetrovic"
        },
        {
            ime_recepta: "Salata",
            vrsta_jela: "uzina",
            recept: "Koraci recepta",
            tezina: 1,
            vreme: "0-15min",
            mediji: ["assets/images/uzine/salata1.jpg", "assets/images/uzine/salata2.jpg"],
            korisnik: "anamilicevic"
        },
        {
            ime_recepta: "Sendvic",
            vrsta_jela: "uzina",
            recept: "Koraci recepta",
            tezina: 1,
            vreme: "0-15min",
            mediji: ["assets/images/uzine/sendvic1.jpg", "assets/images/uzine/sendvic2.jpg"],
            korisnik: "nikolakrstic"
        },
        {
            ime_recepta: "Smoothie",
            vrsta_jela: "uzina",
            recept: "Koraci recepta",
            tezina: 1,
            vreme: "0-15min",
            mediji: ["assets/images/uzine/smoothie1.jpg", "assets/images/uzine/smoothie2.jpg", "assets/images/uzine/smoothie3.jpg"],
            korisnik: "andrejjokic"
        },
        {
            ime_recepta: "Palacinke",
            vrsta_jela: "dezert",
            recept: "Koraci recepta",
            tezina: 1,
            vreme: "15-30min",
            mediji: ["assets/images/dezerti/palacinke1.jpg", "assets/images/dezerti/palacinke2.jpg", "assets/images/dezerti/palacinke3.jpg"],
            korisnik: "andrejjokic"
        },
        {
            ime_recepta: "Cheesecake",
            vrsta_jela: "dezert",
            recept: "Koraci recepta",
            tezina: 3,
            vreme: "15-30min",
            mediji: ["assets/images/dezerti/cheesecake1.jpg"],
            korisnik: "anamilicevic"
        },
        {
            ime_recepta: "Brownie",
            vrsta_jela: "dezert",
            recept: "Koraci recepta",
            tezina: 2,
            vreme: "15-30min",
            mediji: ["assets/images/dezerti/brownie1.jpg", "assets/images/dezerti/brownie2.jpg"],
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

    localStorage.setItem("recepti", JSON.stringify(receptiHC));
    // localStorage.setItem("trenutna_grupa_recepata", "glavno_jelo");
    localStorage.setItem("jezik", "srpski");
    localStorage.setItem("ocene", JSON.stringify(oceneHC));

    // Krece pravi kod
    let grupa = localStorage.getItem("trenutna_grupa_recepata");
    let imeGrupe = dohvatiImeGrupe(grupa);
    let recepti = JSON.parse(localStorage.getItem("recepti"));

    $(document).prop('title', 'Recepti / ' + imeGrupe);
    $(".naslov").html(imeGrupe);

    if (imeGrupe !== "Svi recepti") {
        recepti = recepti.filter(recept => recept.vrsta_jela == grupa);
    }

    dodajRecepte(recepti);

    $("#pretragaDugme").click(function() {
        let ime_recepta = $("#ime_recepta").val();

        if (ime_recepta == "") {
            dodajRecepte(recepti);
            return;
        }

        recept = recepti.find(recept => recept.ime_recepta == ime_recepta);
        dodajRecepte([recept]);
    });

    $("#sort_lista").change(function() {
        let val = $("#sort_lista option:selected").val();
        let rec = sortiraj(recepti, val);
        dodajRecepte(rec);
    });
});

function dohvatiImeGrupe(grupa) {
    switch (grupa) {
        case "glavno_jelo":
            return "Glavna jela";
        case "predjelo":
            return "Predjela";
        case "dezert":
            return "Dezerti";
        case "uzina":
            return "Uzine";
        case "svi":
            return "Svi recepti";
        default:
            return "Ne postoji";
    }
}

function dohvatiImeTezine() {
    if (localStorage.getItem("jezik") == "srpski") return "Tezina"
    else return "Difficulty";
}

function dohvatiImeVremena() {
    if (localStorage.getItem("jezik") == "srpski") return "Vreme"
    else return "Time";
}

function dohvatiImeKorisnika() {
    if (localStorage.getItem("jezik") == "srpski") return "Korisnik"
    else return "User";
}

function izracunajProsek(niz) {
    if (niz.length == 0) return 0;
    let suma = 0;
    for (let i = 0; i < niz.length; i++) {
        suma += niz[i].ocena;
    }
    return suma / niz.length;
}

function dodajRecept(recept, broj) {
    let ocene = JSON.parse(localStorage.getItem("ocene"));
    let prosecnaOcena = izracunajProsek(ocene.filter(ocena => ocena.recept == recept.ime_recepta));
    prosecnaOcena = prosecnaOcena > 0 ? prosecnaOcena.toFixed(1) + "/5.0" : "Unrated";

    $("#recepti").append(
        $("<div></div>").addClass("col-md-4").addClass("col-sm-6").addClass("recept-" + Math.ceil(broj / 6)).append(
            $("<div></div>").addClass("single-food").addClass("mt-5").addClass("mt-sm-0").append(
                $("<div></div>").addClass("food-img").append(
                    $("<img>").addClass("recept-slika").addClass("img-fluid").attr("src", recept.mediji[0]).attr("id", recept.ime_recepta).click(receptKliknut)
                )
            ).append(
                $("<div></div>").addClass("food-content").append(
                    $("<div></div>").addClass("d-flex").addClass("justify-content-between").append(
                        $("<h5></h5>").html(recept.ime_recepta)
                    ).append(
                        $("<span></span>").addClass("style-change").html(prosecnaOcena)
                    )
                ).append(
                    $("<p></p>").addClass("pt-3").attr("id", recept.ime_recepta).click(receptKliknut).html(dohvatiImeKorisnika() + ": " + recept.korisnik + "<br>" + dohvatiImeTezine() + ": " +
                     recept.tezina + "<br>" + dohvatiImeVremena() + " : " + recept.vreme)
                )
            )
        )
    );
}

function dodajRecepte(recepti) {
    $("#recepti").empty();
    dodajPaginaciju(recepti);

    let i = 1;
    recepti.forEach(recept => {
        dodajRecept(recept, i);
        i++;
    });

    // Prikazi samo prvih 6 recepata
    $("#recepti").children().hide();
    $(".recept-1").show();
}

function dodajPaginaciju(recepti) {
    // Uklanjanje prethodne paginacije
    $(".li_strana").remove();

    // Dodavanje paginacije
    for (let i = 1; i <= Math.ceil(recepti.length / 6); i++) {
        let tmp = $("<li></li>").addClass("page-item li_strana").append(
            $("<a></a>").addClass("page-link").addClass("konkretna_strana").prop("href", "#recepti-naslov").prop("id", "strana-" + i).html(i)
        ).insertBefore("#next");

        if (i == 1) tmp.addClass("active");
    }

    // Paginacija za klik na konkretnu stranu
    $(".konkretna_strana").click(function() {
        let prevActive = $("li.active").find("a").prop("id").split("-")[1];
        let newActive = $(this).prop("id").split("-")[1];

        $("li.active").removeClass("active");
        $(this).parent().addClass("active");

        // Promeni prikazane recepte
        $(".recept-" + prevActive).hide();
        $(".recept-" + newActive).show();
    });

    // Paginacija za klik na sledecu/prethodnu stranu
    $(".pomeraj").click(function() {
        let pomeraj = parseInt($(this).attr("id").split("=")[1]);
        let prevActive = parseInt($("li.active").find("a").prop("id").split("-")[1]);
        let newActive = prevActive + pomeraj;
        let brStrana = $("#recepti-paginacija").children().length - 2;

        if (newActive == 0) newActive = 1;
        if (newActive > brStrana) newActive = brStrana;

        $("li.active").removeClass("active");
        $("#strana-" + newActive).parent().addClass("active");

        // Promeni prikazane recepte
        $(".recept-" + prevActive).hide();
        $(".recept-" + newActive).show();
    });
}

function sortiraj(recepti, predikat) {
    let ret = recepti.slice();
    let ocene = JSON.parse(localStorage.getItem("ocene"));
    switch (predikat) {
        case "najlaksi":
            ret.sort(function(a,b) {
                return a["tezina"] - b["tezina"];
            });
            break;
        case "najtezi":
            ret.sort(function(a,b) {
                return b["tezina"] - a["tezina"];
            });
            break;
        case "najgore_ocene":
            ret.sort(function(a, b) {
                // return izracunajProsek(ocene.filter(ocena => ocena.recept == a.ime_recepta)) - izracunajProsek(ocene.filter(ocena => ocena.recept == b.ime_recepta));
                let aP = izracunajProsek(ocene.filter(ocena => ocena.recept == a.ime_recepta));
                let bP = izracunajProsek(ocene.filter(ocena => ocena.recept == b.ime_recepta));

                if (aP == 0) return 1;
                if (bP == 0) return -1;
                return aP - bP;
            });
            break;
        case "najbolje_ocene":
            ret.sort(function(a, b) {
                // return izracunajProsek(ocene.filter(ocena => ocena.recept == b.ime_recepta)) - izracunajProsek(ocene.filter(ocena => ocena.recept == a.ime_recepta));
                let aP = izracunajProsek(ocene.filter(ocena => ocena.recept == a.ime_recepta));
                let bP = izracunajProsek(ocene.filter(ocena => ocena.recept == b.ime_recepta));

                if (aP == 0) return 1;
                if (bP == 0) return -1;
                return bP - aP;
            });
            break;
    }
    return ret;
}

function receptKliknut() {
    let recepti = JSON.parse(localStorage.getItem("recepti"));
    let ime = $(this).attr("id");
    let recept = recepti.find(rec => rec.ime_recepta == ime);
    localStorage.setItem("recept", JSON.stringify(recept));

    window.location.href = "recept.html";
}