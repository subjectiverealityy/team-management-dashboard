document.addEventListener("DOMContentLoaded", function () {
    const links = document.querySelectorAll(".nav-item a");

    links.forEach(link => {
        if (link.pathname === window.location.pathname) {
            link.parentElement.classList.add("active");
        }
    });
});