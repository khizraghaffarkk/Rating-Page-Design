//JS Code


let addingRating= document.querySelector(".container-for-adding-rating");
let ratingResult= document.querySelector(".rating-result");
let submitButton= document.getElementById('sub');
let ratingNumIdSpan= document.getElementById('rating-num');
let listButtonId= document.querySelectorAll('.li-button');

submitButton.addEventListener("click", () => {
    ratingResult.classList.remove("hidden-res");
    addingRating.style.display= "none";
})

listButtonId.forEach((listelement) => {
    listelement.addEventListener("click", () =>{
        // console.log(listelement.innerHTML);
        ratingNumIdSpan.innerHTML=listelement.innerHTML;
    })
})
