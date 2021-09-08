const menuItems = document.querySelectorAll(".menu__item");

const buttonClick = (element) => {
    if (!element.classList.contains("menu__item--active")) {
        document.body.style.backgroundColor = `#${element.getAttribute('data-background')}`;
    }
}

menuItems.forEach(menuItem => {
    menuItem.addEventListener("click", () => {
        buttonClick(menuItem);
    });
});