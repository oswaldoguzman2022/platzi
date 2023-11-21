const h1 = document.querySelector('h1');
const form = document.querySelector('#form');
const p = document.querySelector('p');
const parrafito = document.querySelector('.parrafito');
const pid = document.querySelector('#pid');
const input1 = document.querySelector('#calculo1');
const input2 = document.querySelector('#calculo2');
const btn = document.querySelector('#btnCalcular');
const pResult = document.querySelector('#result')


console.log({
    h1,
    p,
    parrafito,
    pid,
    input1,
});

const img = document.createElement('img');
img.setAttribute('src', 'https://cdn-fmbil.nitrocdn.com/SLliXPplezlNyFTwUkCvDxIAbuHugGuK/assets/images/optimized/rev-d39f44a/www.tekkiwebsolutions.com/wp-content/uploads/react-migrations.png');
pid.append(img);

form.addEventListener('submit', sumarInputsValue);

function sumarInputsValue(event) {
    event.preventDefault();
    const sumaInputs = input1.value + input2.value;
    pResult.innerText = "Resultado: " + sumaInputs;
}