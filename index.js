const wrapper = document.querySelector(".sliderWrapper");
const menuItems1 = document.querySelectorAll(".menuItem");



menuItems1.forEach((item,index) => {
    item.addEventListener("click", () => {
        wrapper.style.transform = `translateX(${-100 * index}vw)`;
    
    })
})

