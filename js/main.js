(function () {
    const header = document.querySelector('.header');
    window.onscroll = () => {
        if (window.scrollY > 50){
            header.classList.add('header__active')
        }else {
            header.classList.remove('header__active');
        }
    }
}());