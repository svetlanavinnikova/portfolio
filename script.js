const swiper = new Swiper('.swiper', {
    slidesPerView: 1,
    slidesPerGroup: 1,
    spaceBetween: 0,
    allowTouchMove: 'true',
    breakpoints: {
        730: {
            spaceBetween: 40,
            slidesPerView: 2,
            slidesPerGroup: 2,
        },
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
});

const body = document.getElementById('body'),
    modal = document.querySelectorAll('.modal'),
    modalName = document.getElementById('m-order'),
    modalBtns = document.querySelectorAll('.modal-btn');

let unlock = true;

if (modalBtns.length > 0) {
    for (let index = 0; index < modalBtns.length; index++) {
        
        const modalBtn = modalBtns[index];
        modalBtn.addEventListener('click', function(e) {
            modalOpen(modalName);
            e.preventDefault();
        });
    }
}

const modalCloseBtns = document.querySelectorAll('.modal-close');
if (modalCloseBtns.length > 0) {
    for (let index = 0; index < modalCloseBtns.length; index++) {
        const el = modalCloseBtns[index];
        el.addEventListener('click', function(e) {
            modalClose(el.closest('.modal'))
            e.preventDefault();
        });
    }
}

function modalOpen(modalName) {
    if (modalName && unlock) {
        modalName.classList.add('modal--open');
        bodyLock()
        modalName.addEventListener('click', function (e) {
            if (!e.target.closest('.modal__container')) {
                modalClose(e.target.closest('.modal'))
            }
        });
    }
}

function bodyLock() {
    body.classList.add('no-scroll')
}

function bodyUnlock() {
    body.classList.remove('no-scroll')
}

function modalClose (modalActive) {
    if (unlock) {
        modalActive.classList.remove('modal--open');
        bodyUnlock()
    }
}

const filterItems = document.querySelectorAll('.filter-item');

document.querySelector('.portfolio__list').addEventListener('click', event => {
    if (event.target.tagName !== 'LI') return false;

    document.querySelectorAll('.portfolio__item').forEach(elem => elem.classList.remove('portfolio__item--current'))

    let filterClass = event.target.id;

    filterItems.forEach(elem => {
        elem.classList.remove('hide');
        event.target.classList.add('portfolio__item--current')
        
        if (!elem.classList.contains(filterClass)) {
            elem.classList.add('hide');   
        }

    });
});

