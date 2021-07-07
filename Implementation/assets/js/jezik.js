$(document).ready(function(){
    if(localStorage.getItem("jezik")==null){
        localStorage.setItem("jezik","srpski");
    }

    let jezik=localStorage.getItem("jezik");
    if(jezik=="srpski"){
        $(".srpski").show();
        $(".engleski").hide();
    }else{
        $(".engleski").show();
        $(".srpski").hide();
    }

    $(".srp").click(function(){
        $(".srpski").show();
        $(".engleski").hide();
        localStorage.setItem("jezik","srpski");
    });
    
    $(".eng").click(function(){
        $(".engleski").show();
        $(".srpski").hide();
        localStorage.setItem("jezik","engleski");
    });
});