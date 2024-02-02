let searchInput = document.querySelector('searchInput');
let items = document.querySelectorAll('.item');
let list = document.querySelector('.list');


let chunk = 'Гру'



searchInput.addEventListener('keyup', () => {
    for (let item of items) {
        let str = item.textContent;
        if (str.indexOf(searchInput.value) != -1) {
            console.log(str);
        }

    }
})


