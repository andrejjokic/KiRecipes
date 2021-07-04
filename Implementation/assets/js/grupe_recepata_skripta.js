$(document).ready(function() {

    // Sluzi samo za testiranje, bice prebaceno u main skriptu
    let receptiHC = [
        {
            ime_recepta: "Recept1",
            vrsta_jela: "glavno_jelo",
            recept: "Koraci recepta",
            tezina: 1,
            vreme: "0-15min",
            mediji: ["assets/images/deshes2.png", "assets/images/food1.jpg"],
            korisnik: "Korisnicko ime"
        },
        {
            ime_recepta: "Recept2",
            vrsta_jela: "glavno_jelo",
            recept: "Koraci recepta",
            tezina: 2,
            vreme: "0-15min",
            mediji: ["assets/images/deshes2.png", "assets/images/food1.jpg"],
            korisnik: "Korisnicko ime"
        },
        {
            ime_recepta: "Recept3",
            vrsta_jela: "glavno_jelo",
            recept: "Koraci recepta",
            tezina: 1,
            vreme: "0-15min",
            mediji: ["assets/images/deshes2.png", "assets/images/food1.jpg"],
            korisnik: "Korisnicko ime"
        },
        {
            ime_recepta: "Recept4",
            vrsta_jela: "glavno_jelo",
            recept: "Koraci recepta",
            tezina: 3,
            vreme: "0-15min",
            mediji: ["assets/images/deshes2.png", "assets/images/food1.jpg"],
            korisnik: "Korisnicko ime"
        },
        {
            ime_recepta: "Recept5",
            vrsta_jela: "glavno_jelo",
            recept: "Koraci recepta",
            tezina: 2,
            vreme: "0-15min",
            mediji: ["assets/images/deshes2.png", "assets/images/food1.jpg"],
            korisnik: "Korisnicko ime"
        },
        {
            ime_recepta: "Recept6",
            vrsta_jela: "glavno_jelo",
            recept: "Koraci recepta",
            tezina: 4,
            vreme: "0-15min",
            mediji: ["assets/images/deshes2.png", "assets/images/food1.jpg"],
            korisnik: "Korisnicko ime"
        },
        {
            ime_recepta: "Recept7",
            vrsta_jela: "glavno_jelo",
            recept: "Koraci recepta",
            tezina: 3,
            vreme: "0-15min",
            mediji: ["assets/images/deshes2.png", "assets/images/food1.jpg"],
            korisnik: "Korisnicko ime"
        },
        {
            ime_recepta: "Recept8",
            vrsta_jela: "glavno_jelo",
            recept: "Koraci recepta",
            tezina: 1,
            vreme: "0-15min",
            mediji: ["assets/images/deshes2.png", "assets/images/food1.jpg"],
            korisnik: "Korisnicko ime"
        }
    ];

    let oceneHC = [
        {
            "kor_ime": "andrej",
            "ocena": 2,
            "recept": "Recept1"
        },
        {
            "kor_ime": "petar",
            "ocena": 3,
            "recept": "Recept1"
        },
        {
            "kor_ime": "nikola",
            "ocena": 4,
            "recept": "Recept1"
        },
        {
            "kor_ime": "milos",
            "ocena": 5,
            "recept": "Recept1"
        },
        {
            "kor_ime": "ana",
            "ocena": 4,
            "recept": "Recept1"
        },
        {
            "kor_ime": "djordje",
            "ocena": 4,
            "recept": "Recept1"
        },
        {
            "kor_ime": "andrej",
            "ocena": 4,
            "recept": "Recept2"
        },
        {
            "kor_ime": "andrej",
            "ocena": 5,
            "recept": "Recept2"
        }
    ];

    localStorage.setItem("recepti", JSON.stringify(receptiHC));
    localStorage.setItem("trenutna_grupa_recepata", "glavno_jelo");
    localStorage.setItem("jezik", "srpski");
    localStorage.setItem("ocene", JSON.stringify(oceneHC));


    // Krece pravi kod
    let grupa = localStorage.getItem("trenutna_grupa_recepata");
    let imeGrupe = dohvatiImeGrupe(grupa);
    let recepti = JSON.parse(localStorage.getItem("recepti"));

    $(document).prop('title', 'Recepti / ' + imeGrupe);
    $(".naslov").html(imeGrupe);

    recepti = recepti.filter(recept => recept.vrsta_jela == grupa);

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
    let suma = 0;
    for (let i = 0; i < niz.length; i++) {
        suma += niz[i].ocena;
    }
    return suma / niz.length;
}

function dodajRecept(recept, broj) {
    let ocene = JSON.parse(localStorage.getItem("ocene"));
    let prosecnaOcena = izracunajProsek(ocene.filter(ocena => ocena.recept == recept.ime_recepta));
    prosecnaOcena = !isNaN(prosecnaOcena) ? prosecnaOcena.toFixed(1) + "/5" : "Unrated";

    $("#recepti").append(
        $("<div></div>").addClass("col-md-4").addClass("col-sm-6").addClass("recept-" + Math.ceil(broj / 6)).append(
            $("<div></div>").addClass("single-food").addClass("mt-5").addClass("mt-sm-0").append(
                $("<div></div>").addClass("food-img").append(
                    $("<img>").addClass("img-fluid").attr("src", recept.mediji[0]).attr("id", recept.ime_recepta).click(receptKliknut)
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
                return izracunajProsek(ocene.filter(ocena => ocena.recept == a.ime_recepta)) - izracunajProsek(ocene.filter(ocena => ocena.recept == b.ime_recepta));
            });
            break;
        case "najbolje_ocene":
            ret.sort(function(a, b) {
                return izracunajProsek(ocene.filter(ocena => ocena.recept == b.ime_recepta)) - izracunajProsek(ocene.filter(ocena => ocena.recept == a.ime_recepta));
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