let advancedSearchClicked = false;


const advancedSearchButton = document.getElementById("advanced-search-button");
advancedSearchButton.addEventListener("click", () => {
    advancedSearchClicked = !advancedSearchClicked
    renderFilter()
})

function renderFilter() {
    if (advancedSearchClicked) {
        document.getElementById("search-filter-div").style.display = "block";
    } else {
        document.getElementById("search-filter-div").style.display = "none";
    }
}