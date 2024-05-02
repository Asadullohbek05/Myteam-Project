const btnEls = document.querySelectorAll('.btn')

const card = document.querySelector('.directors-card')


btnEls.forEach(btnEl => {
    btnEl.addEventListener('click', () => {
        const innerCardEl = btnEl.parentElement.firstElementChild;
        innerCardEl.classList.toggle('hidden')
        btnEl.classList.toggle('rotate')
    })
})

function NavbarniOchish() {
    innerNav.style.transform = "translateX(0px)";
}

function NavbarniYopish() {
    innerNav.style.transform = "translateX(100%)";
}