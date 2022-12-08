const rokk = document.querySelector('#rok');
const wynik = document.querySelector('#wynik');
const btn = document.querySelector('button');

console.log('test');

btn.addEventListener('click', function(){
   let rok = parseInt(rokk.value);

   if(rok%4==0 && rok%100!=0 || rok&400==0){
      wynik.innerHTML = `Rok ${rok} jest przestępny`;
   } else{
      wynik.innerHTML = `Rok ${rok} nie jest przestępny`;
   }
});