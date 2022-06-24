const clickDescriptionTab = document.querySelector('.js-description-tab')
const clickReviewTab = document.querySelector('.js-review-tab')
const showDescriptionTabPanels = document.querySelector('.js-description-tab-panels')
const showReviewTabPanels = document.querySelector('.js-review-tab-panels')


function showDescriptionTab() {
    showDescriptionTabPanels.style.display = "block"
    showReviewTabPanels.style.display = "none"
    clickReviewTab.style.backgroundColor = "rgba(0,0,0,0.5)"
    console.log(clickReviewTab.style)
}
function showReviewTab() {
    showDescriptionTabPanels.style.display = "none"
    showReviewTabPanels.style.display = "block"
    clickDescriptionTab.style.backgroundColor = "rgba(0,0,0,0.5)"
}

clickDescriptionTab.addEventListener('click', showDescriptionTab)
clickReviewTab.addEventListener('click', showReviewTab)
