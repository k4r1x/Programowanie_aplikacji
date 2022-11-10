const min = document.querySelector('#min');
const max = document.querySelector('#max');
const wynik = document.querySelector('#wynik');
const btn = document.querySelector('button');
let p1, p2, p3, p4, p5;

btn.addEventListener('click', function(){
    p1 = Math.floor(Math.random()*(max.value-min.value+1)+min.value);
    p2 = Math.floor(Math.random()*(max.value-min.value+1)+min.value);
    p3 = Math.floor(Math.random()*(max.value-min.value+1)+min.value);
    p4 = Math.floor(Math.random()*(max.value-min.value+1)+min.value);
    p5 = Math.floor(Math.random()*(max.value-min.value+1)+min.value);

    let suma, iloczyn, srednia;
    suma = p1 + p2 + p3 + p4 + p5;
    iloczyn = p1 * p2 * p3 * p4 * p5;
    srednia = (p1 + p2 + p3 + p4 + p5) / 5;

    console.log(p1);
    console.log(p2);
    console.log(p3);
    console.log(p4);
    console.log(p5);
    console.log(suma);
    console.log(iloczyn);
    console.log(srednia);
});