const menu = document.getElementById("menu");

Array.from(document.getElementsByClassName("item"))
    .forEach((item, index) => {
        item.onmouseover = () => {
            menu.dataset.activeIndex = index;
            console.log(menu.dataset.activeIndex, index)
        }
    });