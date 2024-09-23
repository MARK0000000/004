const home = document.querySelector(".header__content__menu__item_home");
const features = document.querySelector(".header__content__menu__item_features");
const blog = document.querySelector(".header__content__menu__item_blog");
const pricing = document.querySelector(".header__content__menu__item_pricing");
const documentatoin = document.querySelector(".header__content__menu__item_documentatoin");

const homePoint = document.querySelector(".header")
const featuresPoint = document.querySelector(".manage");
const blogPoint = document.querySelector(".blog");
const pricingDocumentationPoint = document.querySelector(".getStarted");

const menuLinks = documentatoin.getElementsByClassName("header__content__menu__item");

home.addEventListener('click', scrollToHome);
function scrollToHome (top, event) {
   window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
   })
};

features.addEventListener('click', scrollToFeatures);
function scrollToFeatures (top, event) {
      featuresPoint.scrollIntoView({
         block: "start", 
	      inline: 'nearest',
	      behavior: "smooth",
      });
};

blog.addEventListener('click', scrollToBlog);
function scrollToBlog (top, event) {
      blogPoint.scrollIntoView({
         block: "start", 
	      inline: 'nearest',
	      behavior: "smooth",
      });
}
documentatoin.addEventListener('click', scrollToPricingAndDocument);
pricing.addEventListener('click', scrollToPricingAndDocument);
function scrollToPricingAndDocument (top, event) {
      pricingDocumentationPoint.scrollIntoView({
         block: "start", 
	      inline: 'nearest',
	      behavior: "smooth",
      });
}

      