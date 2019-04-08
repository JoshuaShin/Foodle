// search.js
// Sets up the search bar and search button.
// Define the element ID of searchBar and searchButton before use. 

let searchBar = document.getElementById("searchBar");
let searchButton = document.getElementById("searchButton");

// Detect enter press in search bar
searchBar.addEventListener("keyup", function (event) {
    event.preventDefault();
    if (event.keyCode === 13) {
        search();
    }
});

// Detect click in search button
searchButton.addEventListener("click", function (event) {
    search();
});

// Begin search
function search() {
    sessionStorage.setItem('searchPhrase', filterSearchResult(buildSearchPhraseResult(searchBar.value)));
    sessionStorage.setItem('searchPhraseList', JSON.stringify(buildSearchPhraseResult(searchBar.value)))
    window.location.href = "./search_result.html";
}

// Formats the search input for result use
function filterSearchResult(x) {
    clean = ""
    for (i=0; i<x.length; i++){
        clean = clean + '#' + x[i] + ' ';
    }
    return clean;
}

function buildSearchPhraseResult(searchPhrase) {
    searchPhraseList = [];
    searchItem = "";
    for (let i = 0; i < searchPhrase.length; i++) {
        // Add word to list
        if (searchPhrase[i] == "#" || searchPhrase[i] == ",") {
            if (searchItem != "") {
                searchPhraseList.push(searchItem);
                searchItem = "";
            }
            continue;
        }
        // Build word
        if (searchPhrase[i] != " ") {
            searchItem += searchPhrase[i];
        }
    }
    // Last word case
    if (searchItem.length > 0) {
        searchPhraseList.push(searchItem);
    }
    return searchPhraseList;
}
