const loadImages = () =>{
  let loadImagesBtn = document.querySelector('#loadImagesBtn');
  let imgsDiv = document.querySelectorAll('img');
  let imgIdDiv = document.querySelectorAll('.img-id');
  loadImagesBtn.onclick = function(){
      console.log('button clickeddddddddddddddd');
      fetch("http://www.splashbase.co/api/v1/images/search?query=sun", {
          "method": "GET",
          })
          .then(response => response.json())
          .then(apiResponse =>{

              for(let i=0; i<imgsDiv.length; i++){
                  imgIdDiv[i].innerText = apiResponse.images[i].id;
                  imgsDiv[i].src = apiResponse.images[i].url;
              }

          })
          .catch(err => {
              console.error('!!!!!!!!!!!!!!!!!!!! ', err);
          });
  }
}
const loadImages2 = () =>{
  let loadImagesBtn2 = document.querySelector('#loadImagesBtn2');
  let imgsDiv = document.querySelectorAll('img');
  let imgIdDiv = document.querySelectorAll('.img-id');
  loadImagesBtn2.onclick = function(){
      console.log('button clickeddddddddddddddd');
      fetch("http://www.splashbase.co/api/v1/images/search?query=snow", {
          "method": "GET",
          })
          .then(response => response.json())
          .then(apiResponse =>{

              for(let i=0; i<imgsDiv.length; i++){
                  imgIdDiv[i].innerText = apiResponse.images[i].id;
                  imgsDiv[i].src = apiResponse.images[i].url;
              }

          })
          .catch(err => {
              console.error('!!!!!!!!!!!!!!!!!!!! ', err);
          });
  }
}
const addModal = () =>{
  let btn = document.getElementsByClassName("view-btn"); 
  let modalBody = document.querySelector('.modal-body');
  let index = 999;
  for(let i=0; i < btn.length; i++){
      let att = document.createAttribute("data-toggle");        
      att.value = "modal";
      btn[i].setAttributeNode(att);
      let att2 = document.createAttribute("data-target");
      att2.value = "#exampleModal";
      btn[i].setAttributeNode(att2);        
      btn[i].onclick = function(){
          index = i;
          console.log('clicked button::::::::::::::::::::::::',index);
          fetch("http://www.splashbase.co/api/v1/images/search?query=snow", {
          "method": "GET",
          })
          .then(response => response.json())
          .then(apiResponse =>{
              modalBody.innerHTML = `<img src="${apiResponse.images[index].url}" 
              class="fluid" height="300px" width="470px">`
          })
          .catch(err => {
              console.error('!!!!!!!!!!!!!!!!!!!! ', err);
          });
      }
  }
}
window.onload = function(){
  loadImages();
  loadImages2();
  addModal();
}
// http://www.splashbase.co/api/v1/images/search?query=your query
// http://www.splashbase.co/api/v1/images/search?query=your secondary query