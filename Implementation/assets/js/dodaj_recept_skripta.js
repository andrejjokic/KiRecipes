$(document).ready(function(){
    
    $("#dodajReceptDugme").click(function(){
        
        let ime_recepta=document.getElementById("ime_recepta").value;
        let vrsta_jela=document.getElementById("vrsta_jela").value;
        let recept=document.getElementById("recept").value;
        let tezina=document.getElementById("tezina").value;
        let vreme=document.getElementById("vreme").value;
        let slika=document.getElementById("slika").value;
        let recepti=[];
        let mediji=[];
        mediji.push(slika);
        let korIme="nikola";
        if(localStorage.getItem("recepti")!=null){
            recepti=JSON.parse(localStorage.getItem("recepti"));
        }
        recepti.push(
            {
                ime_recepta:ime_recepta,
                vrsta_jela:vrsta_jela,
                recept:recept,
                tezina:tezina,
                vreme:vreme,
                mediji:mediji,
                korisnik:korIme
            }
        );
        localStorage.setItem("recepti",JSON.stringify(recepti));
    });
});