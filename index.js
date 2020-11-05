const changeHide = function () {
    let editButtons = document.querySelectorAll(".card-body button:last-of-type")
    for (let i = 0; i < editButtons.length; i++) {
        editButtons[i].innerText = "Hide"; 
        editButtons[i].onclick = hideToggle; 
    }
}


const hideToggle = function () {
    let allCards = document.querySelectorAll(".col-md-4 > .card")
    let hideButtons = document.querySelectorAll(".card-body button:last-of-type")
    for (let i = 0; i < hideButtons.length; i++) {
        hideButtons[i].onclick = function(){
            allCards[i].style.display="none";
        }    
    }

}

/* window.onload = function () {
    changeHide()
}
 */