$(document).ready(function(){

    var recept = JSON.parse(localStorage.getItem("recept"));
    var nizOcena=[],oceneRecepta=[];
    nizOcena=JSON.parse(localStorage.getItem("ocene"));
    oceneRecepta=nizOcena.find(tmpOcena => tmpOcena.recept == recept.ime_recepta);
    let sum=0,cnt=0;
    for(let i=0;i<nizOcena.length;i++){
        if(nizOcena[i].recept==recept.ime_recepta){
            cnt++;
            sum+=nizOcena[i].ocena;
        }
    }
    if(cnt==0)
    $("#ocena").text("Ne ocenjena");
    else
    $("#ocena").text((sum/cnt).toFixed(2));

    komentari=[];
    let koriscnici=[];
    if(localStorage.getItem("korisnici")!=null){
      koriscnici=JSON.parse(localStorage.getItem("korisnici"));
    }
    if(localStorage.getItem("komentari") != null){
        komentari=JSON.parse(localStorage.getItem("komentari"));
        komentari=komentari.filter(com=>com.recept==recept.ime_recepta);
        $("#brojKomentara").text(komentari.length+" komentara");
        
        for(let i=0;i<komentari.length;i++){
            let pomKor=komentari[i].kor_ime;
            var trenKorisnik=koriscnici.filter(tmp => tmp.kor_ime == pomKor)[0];
            
            //alert(trenKorisnik.slika);
            
            let komentList=$("<div class='comment-list'></div>");
            let komentar=$("<div class='user justify-content-between d-flex'></div>");
            let slikaKorisnika=$("<div class='tumb'></div>").append($("<img>").attr("src",trenKorisnik.slika));
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
    $("#vrsta_jela").text(recept.vrsta_jela);
    $("#imeRecepta").text(recept.ime_recepta);
    $("#nazivJela").text(recept.ime_recepta);
    $("#vrstaJela").text(recept.vrsta_jela);
    $("#recept").text(recept.recept);
    $("#vreme").text(recept.vreme);
    $("#tezina").text(recept.tezina);
    $("#korisnik").text(recept.korisnik);
    
    let mediji=[];
    mediji=recept.mediji;
    let video=recept.video; 
    let slide=$("#slideShow");


    if(video!=null){
      let videoDiv=$("<video width='320' height='240' controls><source src='"+recept.video+"' type='video/mp4'></video>");
      $("#videoDiv").append(videoDiv);
    }
    
    if(mediji.length==0){
      let slika=$("<div class='single-slide d-sm-flex'></div>").append($("<img>").attr("src","assets/images/no-image.png")).css({
        "width":"300px"
      });
      slide.append(slika);
    }
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

    $("#dodajSlikuDugme").click(function(){
        let slika=document.getElementById("slika").files[0].name;
        recept.mediji.push("assets/images/"+slika);
        localStorage.setItem("recept",JSON.stringify(recept));
        var recepti=[];
        recepti=JSON.parse(localStorage.getItem("recepti"));
        var i;
        for(i=0;i<recepti.length;i++){
            if(recepti[i].ime_recepta==recept.ime_recepta){
                recepti[i].mediji.push("assets/images/"+slika);
            }
        }
        
        localStorage.setItem("recepti",JSON.stringify(recepti));
        window.location.href="";
    });

     /* 1. Visualizing things on Hover - See next part for action on click */
  $('#stars li').on('mouseover', function(){
    var onStar = parseInt($(this).data('value'), 10); // The star currently mouse on
   
    // Now highlight all the stars that's not after the current hovered star
    $(this).parent().children('li.star').each(function(e){
      if (e < onStar) {
        $(this).addClass('hover');
      }
      else {
        $(this).removeClass('hover');
      }
    });
    
  }).on('mouseout', function(){
    $(this).parent().children('li.star').each(function(e){
      $(this).removeClass('hover');
    });
  });
  
  
  /* 2. Action to perform on click */
  $('#stars li').on('click', function(){
    var onStar = parseInt($(this).data('value'), 10); // The star currently selected
    var stars = $(this).parent().children('li.star');
    
    for (i = 0; i < stars.length; i++) {
      $(stars[i]).removeClass('selected');
    }
    
    for (i = 0; i < onStar; i++) {
      $(stars[i]).addClass('selected');
    }
    
    // JUST RESPONSE (Not needed)
    var ratingValue = parseInt($('#stars li.selected').last().data('value'), 10);
    var msg = "";
    if (ratingValue > 1) {
        msg = "Thanks! You rated this " + ratingValue + " stars.";
    }
    else {
        msg = "We will improve ourselves. You rated this " + ratingValue + " stars.";
    }
    responseMessage(msg);
    let ocena={
        kor_ime:korisnik.kor_ime,
        ocena:onStar,
        recept:recept.ime_recepta
    };
    let ocene=[];
    if(localStorage.getItem("ocene")!=null){
        ocene=JSON.parse(localStorage.getItem("ocene"));
    }
    ocene.push(ocena);
    localStorage.setItem("ocene",JSON.stringify(ocene));
    window.location.href="";
  });

  $("#skiniPDF").on("click",function(){
    var doc = new jsPDF();
    let recept=JSON.parse(localStorage.getItem("recept"));
    let txt=recept.ime_recepta+"\n";
    txt+="Autor recepta je: " + recept.korisnik;
    txt+="\nTezina recepta od 1-5 je: " + recept.tezina;
    txt+="\nVreme pripreme recepta je: " + recept.vreme;
    txt+="\nVrsta jela je: " + recept.vrsta_jela;
    txt+="\nDirections: \n";
    txt+=recept.recept;
    doc.text(10, 50, txt);
    doc.save(recept.ime_recepta + '.pdf');
  });

  
});
function responseMessage(msg) {
    $('.success-box').fadeIn(200);  
    $('.success-box div.text-message').html("<span>" + msg + "</span>");
  }