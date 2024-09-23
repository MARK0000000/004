
const path = document.getElementsByTagName("path");
document.addEventListener('mouseover',active);
   function active (event){
      if(event.target.closest(".svg1")) {
         path[0].classList.add ("active");
      }
      if(!event.target.closest(".svg1")) {
         path[0].classList.remove ("active");
      }
      if(event.target.closest(".svg2")) {
         path[1].classList.add ("active");
      }
      if(!event.target.closest(".svg2")) {
         path[1].classList.remove ("active");
      }
      if(event.target.closest(".svg3")) {
         path[2].classList.add ("active");
      }
      if(!event.target.closest(".svg3")) {
         path[2].classList.remove ("active");
      }
      if(event.target.closest(".svg4")) {
         path[3].classList.add ("active");
      }
      if(!event.target.closest(".svg4")) {
         path[3].classList.remove ("active");
      }


      if(event.target.closest(".svg5")) {
         path[4].classList.add ("active");
      }
      if(!event.target.closest(".svg5")) {
         path[4].classList.remove ("active");
      }
      if(event.target.closest(".svg6")) {
         path[5].classList.add ("active");
      }
      if(!event.target.closest(".svg6")) {
         path[5].classList.remove ("active");
      }
      if(event.target.closest(".svg7")) {
         path[6].classList.add ("active");
      }
      if(!event.target.closest(".svg7")) {
         path[6].classList.remove ("active");
      }
      if(event.target.closest(".svg8")) {
         path[7].classList.add ("active");
      }
      if(!event.target.closest(".svg8")) {
         path[7].classList.remove ("active");
      }
      if(event.target.closest(".svg9")) {
         path[8].classList.add ("active");
      }
      if(!event.target.closest(".svg9")) {
         path[8].classList.remove ("active");
      }


      if(event.target.closest(".svg10")) {
         path[9].classList.add ("active");
      }
      if(!event.target.closest(".svg10")) {
         path[9].classList.remove ("active");
      }
      if(event.target.closest(".svg11")) {
         path[10].classList.add ("active");
      }
      if(!event.target.closest(".svg11")) {
         path[10].classList.remove ("active");
      }
      if(event.target.closest(".svg12")) {
         path[11].classList.add ("active");
      }
      if(!event.target.closest(".svg12")) {
         path[11].classList.remove ("active");
      }
      if(event.target.closest(".svg13")) {
         path[12].classList.add ("active");
      }
      if(!event.target.closest(".svg13")) {
         path[12].classList.remove ("active");
      }
}
