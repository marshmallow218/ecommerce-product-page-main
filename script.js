/*** INITIALIZATION ***/
const plus = document.querySelector('#plus')
const minus = document.querySelector('#minus')
const quantity = document.querySelector('.quantity')

/*** QUANTITY ***/
let a = 0;
plus.addEventListener('click', () => {
    a++;
    quantity.innerText = a;
})
minus.addEventListener('click', () => {
    a > 0 ? a--: a == a;
    quantity.innerText = a;
})