const procentt = document.querySelector('#procent');
const wynik = document.querySelector('#wynik');
const btn = document.querySelector('button');

btn.addEventListener('click', function(){
   let procent = parseInt(procentt.value);
   wynik.innerHTML = `Twoja ocena to `;
   switch(true){
       case (procent<=100 && procent>=90):
           wynik.innerHTML += `5`;
           break;
       case (procent<=89 && procent>=80):
           wynik.innerHTML += `4,5`;
           break;
       case (procent<=79 && procent>=70):
           wynik.innerHTML += `4`;
           break;
       case (procent<=69 && procent>=60):
           wynik.innerHTML += `3,5`;
           break;
       case (procent<=59 && procent>=50):
           wynik.innerHTML += `3`;
           break;
       case (procent<50 && procent>=0):
           wynik.innerHTML += `2`;
           break;
       default:
           wynik.innerHTML = `Nie ma takiego wyniku`;

   }
});