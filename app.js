
let section = document.querySelectorAll("section");
const menu = document.querySelector(".menu");
const menuItems = menu.querySelectorAll(".menu__item");
const menuBorder = menu.querySelector(".menu__border");
let activeItem = menu.querySelector(".active");

window.onscroll = () => {
    section.forEach((i) => {
        let top = window.scrollY;
        let offset = i.offsetTop - 150;
        let height = i.offsetHeight;
        let id = i.getAttribute("id");

        if (top >= offset && top < offset + height) {
            menuItems.forEach((param) => {
                param.classList.remove("active");
                btn = document.querySelector("menu a[href*=" + id + "]").firstElementChild;
                btn.classList.add("active");
                clickItem(btn);
                
            });
        }
    });
};

function reveal() {
    var reveals = document.querySelectorAll(".reveal");

    for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementVisible = 150;

        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add("active");
        } else {
            reveals[i].classList.remove("active");
        }
    }
}

window.addEventListener("scroll", reveal);

// To check the scroll position on page load
reveal();

function clickItem(item) {

    menu.style.removeProperty("--timeOut");

    if (activeItem == item) return;

    activeItem.classList.remove("active");
    activeItem.lastElementChild.classList.remove("hidden");
    activeItem.firstElementChild.classList.add("hidden");




    item.classList.add("active");
    item.firstElementChild.classList.remove("hidden")
    item.lastElementChild.classList.add("hidden");
    activeItem = item;
    offsetMenuBorder(activeItem, menuBorder);


}

function offsetMenuBorder(element, menuBorder) {

    const offsetActiveItem = element.getBoundingClientRect();
    const left = Math.floor(offsetActiveItem.left - menu.offsetLeft - (menuBorder.offsetWidth - offsetActiveItem.width) / 2) + "px";
    menuBorder.style.transform = `translate3d(${left}, 0 , 0)  rotate(180deg)`;

}

offsetMenuBorder(activeItem, menuBorder);



window.addEventListener("resize", () => {
    offsetMenuBorder(activeItem, menuBorder);
    menu.style.setProperty("--timeOut", "none");
});