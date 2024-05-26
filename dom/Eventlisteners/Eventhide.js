//here the challenge is to create a box containing reveal more..when we click on reveal more
//it should show the box of text..
//when we click on the reveal more again it should not show the block

const revealBtn = document.querySelector(".reveal-btn");
const hiddenContent = document.querySelector(".hidden-content");

function revealContent () {
    if (hiddenContent.classList.contains("reveal-btn")){
        hiddenContent.classList.remove("reveal-btn");
    }else hiddenContent.classList.add("reveal-btn");
}

revealBtn.addEventListener("click",revealContent);

//when revealbtn is first clicked it goes inside the function,checks if it contains reveal-btn class
//since it does not contain initially ,it will add the class
//inside the reveal-btn class we have display block,so it displays when first clicked
//when the revealbtn is clicked again,now as it contains the class,it will remove the class and displays none.