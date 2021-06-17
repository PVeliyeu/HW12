const container = document.querySelector(".container");
const allImgContainers = document.querySelectorAll(".image")
const bigFotoContainer = document.querySelector(".photo")

container.addEventListener('click', function(e){
       let imageContainer = e.target.parentNode;
       if(imageContainer.classList.value !== 'image'){
           return;
       }
       for(let i=0; i<=allImgContainers.length-1; i++){
           allImgContainers[i].classList.remove('active-image');
       }
       imageContainer.classList.add('active-image');
       let imgSrc = e.target.src;
       bigFotoContainer.children[0].setAttribute('src', imgSrc);
})