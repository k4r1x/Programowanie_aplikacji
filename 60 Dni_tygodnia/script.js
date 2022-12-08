const dzienTygodnia = document.querySelector('#dzienTygodnia');
const wynik = document.querySelector('#wynik');
const btn = document.querySelector('button');

btn.addEventListener('click', function(){
   dzien = parseInt(dzienTygodnia.value);
   wynik.innerHTML = `Podany dzień o numerze ${dzien} to `;
   switch(dzien){
       case 1:
           wynik.innerHTML += `poniedziałek`;
           break;
       case 2:
           wynik.innerHTML += `wtorek`;
           break;
       case 3:
           wynik.innerHTML += `środa`;
           break;
       case 4:
           wynik.innerHTML += `czwartek`;
           break;
       case 5:
           wynik.innerHTML += `piątek`;
           break;
       case 6:
           wynik.innerHTML += `sobota`;
           break;
       case 7:
           wynik.innerHTML += `niedziela`;
           break;
       default:
           wynik.innerHTML = `Nie ma takiego dnia tygodnia`;
   }
});