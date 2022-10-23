var kilometri = prompt("Inserisci i kilometri che vuoi percorrere");
var età = prompt("Inserisci la tua età");
var prezzo_non_scontato = kilometri * 0.21;
var prezzo_scontato = 0;
if(età < 18){
    prezzo_scontato = (prezzo_non_scontato/100) * 80;
    console.log("Il prezzo scontato è " + prezzo_scontato.toFixed(2));
}else if(età >= 65){
    prezzo_scontato = (prezzo_non_scontato/100) * 60;
    console.log("Il prezzo scontato è " + prezzo_scontato.toFixed(2));
}else{
    console.log(prezzo_non_scontato);
}