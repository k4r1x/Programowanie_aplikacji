let liczba1 = prompt("Podaj 1 liczbę: ");
let liczba2 = prompt("Podaj 2 liczbę: ");

let wynik1 = Number(liczba1) + Number(liczba2);
let wynik2 = Number(liczba1) - Number(liczba2);
let wynik3 = Number(liczba1) * Number(liczba2);
let wynik4 = Number(liczba1) / Number(liczba2);

// liczba1 = parseInt(liczba1);

document.write(liczba1 + " + " + liczba2 + " = " + wynik1);
document.write("<br>" + liczba1 + " - " + liczba2 + " = " + wynik2);
document.write("<br>" + liczba1 + " * " + liczba2 + " = " + wynik3);

if(liczba2 === 0){
    let wynik4 = "Nie dzielimy przez 0!";
    document.write("<br>" + wynik4);
}
else{
    document.write("<br>" + liczba1 + " / " + liczba2 + " = " + wynik4);
}