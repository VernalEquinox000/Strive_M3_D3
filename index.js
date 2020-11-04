const changeHide = function () {
    let editButtons = document.querySelectorAll(".card-body button:last-of-type")
    for (let i = 0; i < editButtons.length; i++) {
        editButtons[i].innerText = "Hide"; 
        /* editButtons[i].onclick = hideToggle; */
    }
    /* console.log(editButtons) */
}

/* but.setAttribute("onclick",callJavascriptFunction);
but.onclick= callJavascriptFunction;
document.getElementById("but").onclick=callJavascriptFunction; */

const hideToggle = function () {
    let allCards = document.querySelectorAll(".col-md-4 > .card")
    let hideButtons = document.querySelectorAll(".card-body button:last-of-type")
    /* for (let i = 0; i < hideButtons.length; i++) {
        (function (index) {
            hideButtons[i].onclick = function () {
                alert(index)
            }

        })(i) */
    
    

    for (let i = 0; i < hideButtons.length; i++)
{

    (function(index){
        hideButtons[i].onclick = function(){
            allCards[index].style.display="none";
        }    
    })(i);

}


        
               /*  allCards[i].style.display = "none"; */
            }
/*         } 
        

            
        } */
    /* console.log(allCards) */

    
