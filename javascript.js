const accordion = document.querySelectorAll(".accordion")
accordion.forEach(function (accordion) {
    const button = accordion.querySelector(".button");
    const lorem = accordion.querySelector(".lorem");
    accordion.addEventListener("click", function () {
        if (lorem.style.display === "none") {
            lorem.style.display = "block";
            button.style.transform = "rotate(0deg)"
        } else {
            lorem.style.display = "none";
            button.style.transform = "rotate(180deg)"
        }
    })
})













