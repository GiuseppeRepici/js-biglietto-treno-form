const button1 = document.getElementById("bottonecarica");
let prezzominorenne
let prezzomaggiore60
let prova
let prova1
let prezzoperdistanza
const button2 = document.getElementById("bottoneannulla");
const numerocasuale = document.getElementById("numcasuale");
var z = Math.floor(Math.random() * (3));




function generateRandomString(iLen) {
    var sRnd = '';
    var sChrs = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz";
    for (var i = 0; i < iLen; i++) {
      var randomPoz = Math.floor(Math.random() * sChrs.length);
      sRnd += sChrs.substring(randomPoz, randomPoz + 1);
    }
    return sRnd;
  }

  var stringa_random = generateRandomString(4);
  





button2.addEventListener("click",
    function(){
        document.getElementById('fname').value = '';
        document.getElementById('fkm').value = '';
        document.getElementById('etarange').value = '';
        
        document.getElementById("costofinale").innerHTML = '';
        document.getElementById("tipobiglietto").innerHTML = '';
        document.getElementById("nomepasseggero").innerHTML= '';
        numerocasuale.innerHTML = '' ;
        document.getElementById("stringarndm").innerHTML = '';
    }

)

button1.addEventListener("click", 



    function(){
        const nomeCompleted = document.getElementById("fname").value;
        const distanceKm = document.getElementById("fkm").value;
        const rangeAge = document.getElementById("etarange").value;
        let y = 0.21;
        let prezzoperdistanza = distanceKm * y;
        console.log(nomeCompleted);
        console.log(distanceKm);
        console.log(rangeAge);
        numerocasuale.innerHTML = z ;
        document.getElementById("stringarndm").innerHTML = stringa_random;
        const comparinome = document.getElementById("nomepasseggero");
        comparinome.innerHTML = nomeCompleted ;

        

        if (rangeAge == 20) {
        prezzominorenne = parseFloat(prezzoperdistanza - (prezzoperdistanza * 20 / 100));
        const prova = document.getElementById("costofinale");
        prova.innerHTML = prezzominorenne.toFixed(2) ;
        
        prova1 = document.getElementById("tipobiglietto").innerHTML = "Biglietto per minorenni";
        

        } else { if (rangeAge == 40) {
                prezzomaggiore60 = parseFloat(prezzoperdistanza - (prezzoperdistanza * 40 / 100));
                
                const prova = document.getElementById("costofinale");
                
                prova.innerHTML = prezzomaggiore60.toFixed(2) ;

                prova1 = document.getElementById("tipobiglietto").innerHTML = "Biglietto per over 65";
                
        } else {
             prova = document.getElementById("costofinale").innerHTML = prezzoperdistanza.toFixed(2);
             prova1 = document.getElementById("tipobiglietto").innerHTML = "Biglietto intero";
           
        }   } 
    }

)



