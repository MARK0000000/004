const glass = document.querySelector(".blog__content__imges__glass__item");
console.log(glass);
const img = document.querySelector(".popup-hidden");
console.log(img);

document.addEventListener("click", popup );
function popup (event){
      if(event.target.closest(".blog__content__imges__glass__item")) {
            img.classList.add("__popup")
         }
         else{
            img.classList.remove("__popup")
         }
   

}