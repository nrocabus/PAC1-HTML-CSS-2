/**
 * Import dependencies from node_modules
 * see commented examples below
 */

// import 'some-node-module';
// import SomeModule from 'some-node-module';


import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init();


/**
 * Write any other JavaScript below
 */


( function() {
  const university = "UOC";
  console.log(`Hello, ${university}!`);
} )();
 

function toggleClass(idname, classname) {
  let element = document.getElementById(idname);
  element.classList.toggle(classname);
}

function expandCard(idname){
  document.getElementById(idname).classList.toggle("info-card--is-active");
  document.getElementById(idname+"_title").classList.toggle("info-card__title--is-active");
  document.getElementById(idname+"_text").classList.toggle("info-card__text--is-active");
}

window.toggleClass = toggleClass;
window.expandCard = expandCard;