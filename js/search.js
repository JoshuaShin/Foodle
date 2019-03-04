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
    sessionStorage.setItem('searchPhrase', filterSearchResult(searchBar.value));
    sessionStorage.setItem('searchPhraseList', JSON.stringify(buildSearchPhraseResult(searchBar.value)))
    window.location.href = "./search_result.html";
}

// Formats the search input for result use
function filterSearchResult(x) {
    stringLength = x.length

    // Needed for past search result
    var clean = ''

    // Deletes the first hashtag
    if (x[0] == '#') {
        x = x.substr(1);
    }
    else {
        x
    }

    // Splits the #
    while (x.includes('#')) {
        x = x.split('#', stringLength);

    }

    // Splits the ,
    while (x.includes(',')) {
        x = x.split(',', stringLength);
    }

    // Gets rid of spaces and commas in the string
    for (i = 0; i <x.length; i++){
        x[i] = x[i].replace(",", "")
        x[i] = x[i].trim();
        x[i] = "#" + x[i];
    }

    // Adds the items into a string
    for (i = 0; i <x.length; i++){
        clean = clean + x[i] + ' '
    }
    return clean
}

// Filters the # and , in search bar
function filterSearch(x) {
    stringLength = x.length

    // Deletes the first hashtag
    if (x[0] == '#') {
        x = x.substr(1);
    }

    // Splits the #
    while (x.includes('#')) {
        x = x.split('#', stringLength);
    }

    // Splits the ,
    while (x.includes(',')) {
        x = x.split(',', stringLength);
    }

    // Gets rid of spaces and commas in the string
    for (i = 0; i <x.length; i++){
        x[i] = x[i].replace(",", "")
        x[i] = x[i].trim();
    }
    return x;
}

function buildSearchPhraseResult(searchPhrase) {
    searchPhraseList = [];
    searchItem = "";
    for (let i = 0; i < searchPhrase.length; i++) {
        if (searchPhrase[i] == "#" || searchPhrase[i] == ",") {
            if (searchItem != "") {
                searchPhraseList.push(searchItem);
                searchItem = "";
            }
            continue;
        }
        if (searchPhrase[i] != " ") {
            searchItem += searchPhrase[i];
        }
    }
    searchPhraseList.push(searchItem);
    return searchPhraseList;
}
