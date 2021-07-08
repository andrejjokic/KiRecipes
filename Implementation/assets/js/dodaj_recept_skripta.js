$(document).ready(function(){
    var ime_recepta,vrsta_jela,recept,tezina,vreme,slika,video;
    
    $("#dodajReceptDugme1").click(function(){
        
        ime_recepta=document.getElementById("ime_recepta1").value;
        vrsta_jela=document.getElementById("vrsta_jela1").value;
        recept=document.getElementById("recept1").value;
        tezina=document.getElementById("tezina1").value;
        vreme=document.getElementById("vreme1").value;
        slika=document.getElementById("slika1").files[0].name;
        video=document.getElementById("video1").files[0].name;
        popuni();        
    });

    $("#dodajReceptDugme2").click(function(){
        
        ime_recepta=document.getElementById("ime_recepta2").value;
        vrsta_jela=document.getElementById("vrsta_jela2").value;
        recept=document.getElementById("recept2").value;
        tezina=document.getElementById("tezina2").value;
        vreme=document.getElementById("vreme2").value;
        slika=document.getElementById("slika2").files[0].name;
        video=document.getElementById("video2").files[0].name;
        popuni();        
    });

    function popuni(){
        let recepti=[];
        let mediji=[];
        mediji.push("assets/images/"+slika);
        let korIme="nikola";
        if(localStorage.getItem("recepti")!=null){
            recepti=JSON.parse(localStorage.getItem("recepti"));
        }
        recepti.push(
            {
                ime_recepta:ime_recepta,
                vrsta_jela:vrsta_jela,
                recept:recept,
                tezina:parseInt(tezina),
                vreme:vreme,
                mediji:mediji,
                video:"assets/images/"+video,
                korisnik:korIme
            }
        );
        localStorage.setItem("recepti",JSON.stringify(recepti));
        window.location.href="";
    }
});