const liczbaMies = document.querySelector('#liczbaMies');
const wynik = document.querySelector('#wynik');
const btn = document.querySelector('button');

let mies = parseInt(liczbaMies.value);

btn.addEventListener('click', function(){
    wynik.innerHTML = `Miesiąc o liczbię ${mies} to ${funkcjaMiesiac(mies)}`;
});

function funkcjaMiesiac(x){
    switch(x){
        case 1:
            return "Styczeń";
        case 2:
            return "Luty";
        case 3:
            return "Marzec";
        case 4:
            return "Kwiecień";
        case 5:
            return "Maj";
        case 6:
            return "Czerwiec";
        case 7:
            return "Lipiec";
        case 8:
            return "Sierpień";
        case 9:
            return "Wrzesień";
        case 10:
            return "Październik";
        case 11:
            return "Listopad";
        case 12:
            return "Grudznień";
        default:
            return "Błąd, nie istenieje miesiąc o takiej liczbie!";
    }
}