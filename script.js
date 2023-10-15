const plus = document.querySelector('#plus');
const minus = document.querySelector('#minus');
const quantity = document.querySelector('.quantity');
const thumbnails = document.querySelectorAll('.product-thumbnail img');
let a = 0;


/*** CHANGE QUANTITY ***/
function increase() {
    a++;
    quantity.innerText = a;
}
function decrease() {
    a > 0 ? a--: a == 0;
    quantity.innerText = a;
}

/*** THUMBNAIL STYLE SWITCH ***/
thumbnails.forEach(thumbnail => {
    thumbnail.addEventListener('click', () => {
        document.querySelector('.selected')?.classList.remove('selected');
        thumbnail.classList.add('selected');
    })
})


plus.addEventListener('click', increase)
minus.addEventListener('click', decrease)
