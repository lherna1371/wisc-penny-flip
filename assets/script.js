let headsCount = 0;

if(localStorage.getItem("headsCount") !== null) {
    headsCount = parseInt(localStorage.getItem("headsCount"));
}


let tailsCount = 0;

if(localStorage.getItem("tailsCount") !== null) {
    tailsCount = parseInt(localStorage.getItem("tailsCount"));
}


scoreTable()


let flipButton = document.querySelector("#flip-btn");
// console.log(flipButton)

//add an event listener to the flipButton
flipButton.addEventListener("click", function(){
    //randomize heads or tails
    let isHeads = Math.random() < 0.5;
    console.log(isHeads);
    if(isHeads) {
        // update DOM to heads elements
        //update image
        document.querySelector("img").src = "./assets/images/penny-heads.jpg";
        //update h2
        document.querySelector(".result-header").textContent = "You Flipped Heads!";

        // increment headsCount value by 1
        headsCount++

    } else {
        // update DOM to tails elements 
        //update image
        document.querySelector("img").src = "./assets/images/penny-tails.jpg";
        //update h2
        document.querySelector(".result-header").textContent = "You Flipped Tails!";

        // increment tailsCount value by 1
        tailsCount++
    }

    //update table counter cells
    scoreTable()

    //store counters in localstorage
    storeLocalStorage() 

})




document.querySelector("#clear-btn").addEventListener("click", function() {
    document.querySelector("img").src = "./assets/images/penny-heads.jpg";
    document.querySelector(".result-header").textContent = "Let's Get Rolling!";

    headsCount = 0;
    tailsCount = 0;

    storeLocalStorage() 

    scoreTable()
})



function scoreTable(){
    console.log(`headsCount: ${headsCount} and tailsCount: ${tailsCount}`)

    document.querySelector(".heads-count").textContent = headsCount;
    document.querySelector(".tails-count").textContent = tailsCount;

    // update table percentage cells
    let total = headsCount + tailsCount;
    let headsPercent = 0;
    let tailsPercent = 0;

    if(total > 0) {
        headsPercent = Math.round(headsCount/total * 100);
        tailsPercent = Math.round(tailsCount/total * 100);
    }


    document.querySelector(".heads-percent").textContent = headsPercent + "%";
    document.querySelector(".tails-percent").textContent = tailsPercent + "%";
}

function storeLocalStorage() {
    localStorage.setItem("headsCount", headsCount);
    localStorage.setItem("tailsCount", tailsCount);
}