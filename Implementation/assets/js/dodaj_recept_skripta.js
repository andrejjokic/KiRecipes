$(document).ready(function(){
    
    $("#dodajReceptDugme").click(function(){
        
        let ime_recepta=document.getElementById("ime_recepta").value;
        let vrsta_jela=document.getElementById("vrsta_jela").value;
        let recept=document.getElementById("recept").value;
        let tezina=document.getElementById("tezina").value;
        let vreme=document.getElementById("vreme").value;
        let slika=document.getElementById("slika").files[0].name;
        let video=document.getElementById("video").files[0].name;

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
    });
});