const menuButton = document.getElementById('menu_button');
const menuList = document.getElementById('menu_list');

menuButton.addEventListener('click', () => {
    menuList.classList.toggle('active');
    menuButton.classList.toggle('active');

    if (menuList.classList.contains('active')) {
        document.body.style.overflow = 'hidden';
    } else {
        document.body.style.overflow = 'auto';
    }
});