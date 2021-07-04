$(document).ready(function(){
    
    recept={
            ime_recepta:"Burger",
            vrsta_jela:"Dezert",
            recept:"Moje omiljeno jelo",
            tezina:1,
            vreme:"0-15min",
            mediji:["assets/images/food1.jpg","assets/images/food2.jpg","assets/images/food3.jpg"],
            korisnik:"nikolakrstic99"
    };
    localStorage.setItem("recept",JSON.stringify(recept));
    
    localStorage.setItem("recept",JSON.stringify(recept));
    let korisnik={
        kor_ime:"nikolakrstic99",
        slika:"assets/images/blog-details/c2.jpg"
    };
    localStorage.setItem("korisnik",JSON.stringify(korisnik));
    
    komentari=[];
    if(localStorage.getItem("komentari")!=null){
        komentari=JSON.parse(localStorage.getItem("komentari"));
        komentari=komentari.filter(com=>com.recept==recept.ime_recepta);
        $("#brojKomentara").text(komentari.length+" komentara");
        for(let i=0;i<komentari.length;i++){
            let komentList=$("<div class='comment-list'></div>");
            let komentar=$("<div class='user justify-content-between d-flex'></div>");
            let slikaKorisnika=$("<div class='tumb'></div>").append($("<img>").attr("src",korisnik.slika));
            let tekst=$("<div class='desc'><br></div>");
            let ime=$("<h5></h5>").text(komentari[i].kor_ime);
            let kom=$("<p class='comment'></p>").text(komentari[i].komentar);
            slikaKorisnika.append(ime).append(kom);
            komentar.append(slikaKorisnika);
            komentList.append(komentar);
            $("#komentari").append(komentList);
        }
    }else{
        $("#brojKomentara").text("Nema komentara");
    }
    var recept=JSON.parse(localStorage.getItem("recept"));
    $("#nazivJela").text(recept.ime_recepta);
    $("#vrstaJela").text(recept.vrsta_jela);
    $("#recept").text(recept.recept);
    $("#vreme").text(recept.vreme);
    $("#tezina").text(recept.tezina);
    $("#korisnik").text(recept.korisnik);
    
    let mediji=[];
    mediji=recept.mediji;
     
    let slide=$("#slideShow");
    
    
    for(let i=0;i<mediji.length;i++){
        let slika=$("<div class='single-slide d-sm-flex'></div>").append($("<img>").attr("src",mediji[i])).css({
            "width":"300px"
        });
        slide.append(slika);
    }

    $("#dugmeKomentar").click(function(){
        let text_komentara=document.formaKomentar.komentar.value;
        let korisnik=JSON.parse(localStorage.getItem("korisnik"));
        let komentar={
            kor_ime:korisnik.kor_ime,
            komentar:text_komentara,
            recept:recept.ime_recepta
        };
        komentari=[];
        if(localStorage.getItem("komentari")==null){
            komentari.push(komentar);
            localStorage.setItem("komentari",JSON.stringify(komentari));
        }else{
            komentari=JSON.parse(localStorage.getItem("komentari"));
            komentari.push(komentar);
            localStorage.setItem("komentari",JSON.stringify(komentari));
        }
        window.location.href="";
    });
    
});