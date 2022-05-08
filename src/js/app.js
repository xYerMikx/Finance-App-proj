import * as flsFunctions from "./modules/functions.js";

flsFunctions.isWebp();

import Swiper, { Navigation, Pagination } from 'swiper';

const swiper = new Swiper();

// accordeon for plans // 
const plans = document.querySelectorAll(".plans__card")



plans.forEach(element => {
    element.addEventListener("click", openPlans)
})
function openPlans(el) {
    el.preventDefault();
    let currentPlan = el.target.closest(".plans__card")
    let currentContent = el.target.nextElementSibling;

    if (currentContent.classList.contains("plans__card-content")) {
        currentPlan.classList.toggle("_active")
        if (currentPlan.classList.contains("_active")) {
            currentContent.style.maxHeight = currentContent.scrollHeight + 'px'
        } else {
            currentContent.style.maxHeight = 0
        }
    }
}









// accordeon for questions //
const items = document.querySelectorAll('.accordeon__item')

items.forEach(element => {
    element.addEventListener("click", openOnClick)
})

function openOnClick(e) {
    e.preventDefault();
    let currentItem = e.target.closest(".accordeon__item")
    let currentInfo = e.target.nextElementSibling;

    if (currentInfo.classList.contains("accordeon__info")) {
        currentItem.classList.toggle("_active")
        if (currentItem.classList.contains("_active")) {
            currentInfo.style.maxHeight = currentInfo.scrollHeight + 'px';
        } else {
            currentInfo.style.maxHeight = 0
        }
    }
}