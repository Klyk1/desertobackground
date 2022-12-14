const menuDiv = document.getElementById('menu-mobile')
const btnAnimar = document.getElementById('btn-menu')

menuDiv.addEventListener('click', animarMenu)

function animarMenu() {
    menuDiv.classList.toggle('abre-fecha')
    btnAnimar.classList.toggle('ativo')
}