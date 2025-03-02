document.addEventListener("DOMContentLoaded", function () {
    const links = document.querySelectorAll(".nav-item a");

    links.forEach(link => {
        if (link.pathname === window.location.pathname) {
            link.parentElement.classList.add("active");
        }
    });
});

const scrollButton = document.querySelector(".department-scroll-button");
const scrollSection = document.querySelector(".main-4");

let scrolledtoEnd = false;

scrollButton.addEventListener("click", () => {
    if (scrolledtoEnd) {
        scrollSection.scrollTo({ left: 0, behavior: "smooth" });
        scrollButton.innerHTML = '<i class="fa-solid fa-chevron-right"></i>';
    } else {
        scrollSection.scrollTo({ left: scrollSection.scrollWidth, behavior: "smooth" });
        scrollButton.innerHTML = '<i class="fa-solid fa-chevron-left"></i>';
    }
    scrolledtoEnd = !scrolledtoEnd
});