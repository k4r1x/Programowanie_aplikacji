const date1 = new Date("22 March 2015");
const date2 = new Date("10 September 2010");
const date3 = new Date("10 September 2010");

console.log(date1 < date2);

console.log(date2.getTime() === date3.getTime());

const birthdate = new Date(USER.birthdate);
const today = new Date();

if(today.getMonth() === birthdate.getMonth() && today.getDate() === birthdate.getDate()) {
    console.log("Dzisiaj urodziny!");
}


const wynik = document.querySelector('#wynik');
const btn = document.querySelector('button');
btn.addEventListener('click', function(){
    let imie1 = document.querySelector('#imie1').value;
    let imie2 = document.querySelector('#imie2').value;
    const urodziny1 = new Date(document.querySelector('#urodziny1').value);
    const urodziny2 = new Date(document.querySelector('#urodziny2').value);

    if(urodziny1.getTime() <  urodziny2.getTime()){
        wynik.innerHTML = `${imie1} jest starszy/a!`;
    } else if(urodziny2.getTime() < urodziny1.getTime()){
        wynik.innerHTML = `${imie2} jest starszy/a!`;
    } else{
        wynik.innerHTML = `Jesteście w tym samym wieku!`;
    }
});
