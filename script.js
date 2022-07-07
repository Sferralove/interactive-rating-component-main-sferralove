const ratingOne = document.getElementById("rating-1");
const ratingTwo = document.getElementById("rating-2");
const ratingThree = document.getElementById("rating-3");
const ratingFour = document.getElementById("rating-4");
const ratingFive = document.getElementById("rating-5");

const ratingArray = [ratingOne, ratingTwo, ratingThree, ratingFour, ratingFive];

for (let i = 0; i < ratingArray.length; i++) {
    ratingArray[i].addEventListener("click", e => {
        ratingArray.forEach(e => {
            e.classList.remove("selected");
            e.classList.remove("bg-orange-500");
        });
        ratingArray[i].classList.toggle("selected");
        ratingArray[i].classList.toggle("bg-orange-500");
        ratingArray[i].classList.toggle("hover:bg-slate-600");
        document.querySelector("#spanError").setAttribute("hidden", "");
    });
}

function submit() {
    const isSelected = document.querySelector(".selected");
    if (isSelected !== null) {
        const rating = isSelected.querySelector("p").textContent
        document.querySelector("#submit-rating").toggleAttribute("hidden");
        document.querySelector("#thank-you-modal").toggleAttribute("hidden");
        document.querySelector("#rating-declaration").textContent = `You selected ${rating} out of 5`
    } else {
        document.querySelector("#spanError").removeAttribute("hidden", "");
    }
}

