const sub = document.getElementById("submit");
const nomeCognome = document.getElementById("nomeCognome");
const km = document.getElementById("km");
const eta = document.getElementById("età");
sub.addEventListener('click', 
    function(){
        var prezzo_non_scontato = km.value * 0.21;
        var prezzo_scontato = 0;
        if(eta.value == "minorenne"){
            prezzo_scontato = (prezzo_non_scontato/100) * 80;
            console.log("Il prezzo scontato è " + prezzo_scontato.toFixed(2) + " euro");
        }else if(eta.value == "over65"){
            prezzo_scontato = (prezzo_non_scontato/100) * 60;
            console.log("Il prezzo scontato è " + prezzo_scontato.toFixed(2) + " euro");
        }else if(eta.value == "maggiorenne"){
            console.log(prezzo_non_scontato + " euro");
        }
        console.log("ciao");
        console.log(nomeCognome.value);
        console.log(km.value);
        console.log(eta.value);
        }
    )


/*if(età < 18){
    prezzo_scontato = (prezzo_non_scontato/100) * 80;
    console.log("Il prezzo scontato è " + prezzo_scontato.toFixed(2));
}else if(età >= 65){
    prezzo_scontato = (prezzo_non_scontato/100) * 60;
    console.log("Il prezzo scontato è " + prezzo_scontato.toFixed(2));
}else{
    console.log(prezzo_non_scontato);
}*/