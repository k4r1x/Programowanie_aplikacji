const wagaa = document.querySelector('#waga');
const wzrostt = document.querySelector('#wzrost');
const wynik = document.querySelector('#wynik');
const btn = document.querySelector('button');

btn.addEventListener('click', function(){
    let waga = parseFloat(wagaa.value);
    let wzrost = parseInt(wzrostt.value) / 100; //wzrost w metrach
    wynik.innerHTML = `Twoje BMI to: ${BMI(waga, wzrost)}`;
});

function BMI(waga, wzrost){
    let bmi = waga / Math.pow(wzrost, 2);
    switch(true){
        case (bmi < 16): return "Wygłodzenie";
        case (bmi >= 16 && bmi <= 16.99): return "Wychudzenie";
        case (bmi >= 17 && bmi <= 18.49): return "Niedowaga";
        case (bmi >= 18.5 && bmi <= 24.99): return "Optimum";
        case (bmi >=25 && bmi <=29.99): return "Nadwaga";
        case (bmi >= 30 && bmi <= 34.99): return "Otyłość I st.";
        case (bmi >= 35 && bmi <= 39.99): return "Otyłość II st.";
        case (bmi >= 40): return "Otyłość III st.";
        default: return "Nieprawidłowe dane!";
    }
}