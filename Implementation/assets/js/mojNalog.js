$(document).ready(function(){

    let korisnik = JSON.parse(localStorage.getItem("korisnik"));
    $("#imeKorisnika").text(korisnik.kor_ime);
    $("#slika").attr("src",korisnik.slika);

    let komentari=[];
    if(localStorage.getItem("komentari")!=null){
        komentari=JSON.parse(localStorage.getItem("komentari"));
        komentari=komentari.filter(com=>com.kor_ime==korisnik.kor_ime);
        $("#brojKomentara").text(komentari.length+" komentara");
        for(let i=0;i<komentari.length;i++){
            let komentList=$("<div class='comment-list'></div>");
            let komentar=$("<div class='user justify-content-between d-flex'></div>");
            let slikaKorisnika=$("<div class='tumb'></div>").append($("<img>").attr("src",korisnik.slika));
            let tekst=$("<div class='desc'><br></div>");
            let ime=$("<h5></h5>").text(komentari[i].kor_ime);
            let recept=$("<i></i>").text("Komentar na recept: " + komentari[i].recept);
            let kom=$("<p class='comment'></p>").text(komentari[i].komentar);
            slikaKorisnika.append(ime).append(recept).append(kom);
            komentar.append(slikaKorisnika);
            komentList.append(komentar);
            $("#komentari").append(komentList);
        }
    }else{
        $("#brojKomentara").text("Nema komentara");
    }

    let ocene=[];
    if(localStorage.getItem("ocene")!=null){
        ocene=JSON.parse(localStorage.getItem("ocene"));
        ocene=ocene.filter(tmp=>tmp.kor_ime==korisnik.kor_ime);
        $("#brojOcena").text(ocene.length+" ocene");
        
        for(let i=0;i<ocene.length;i++){
            let ocena=$("<div class='col-sm-3 comments-area'>"+ocene[i].recept+"</div>");
            let broj=ocene[i].ocena;
            let zvezde=$("<div class='rating-start text-center'></div>");
            let lista=$("<ul></ul>");
            let zvezda=$("<li class='star'>"+broj+"<i class='fa fa-star fa-fw'></i></li>");
            lista.append(zvezda);
            zvezde.append(lista);
            ocena.append(zvezde);
            $("#ocene").append(ocena);
        }
    }else{
        $("#brojOcena").text("Nema ocena");
    }
});