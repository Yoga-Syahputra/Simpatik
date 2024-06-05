const books = [
    "Harry Potter",
    "Invisible Man",
    "American Psycho",
    "David Sedaris",
    "Ghost Forest",
    "More Than This",
    "A Clockwork Orange"
];

const bookDetailURLs = [
    "BookReviewHarry.html",
    "invisible_man_detail.html",
    "../Book Review/BookReviewAmerican.html",
    "david_sedaris_detail.html",
    "../Book Review/BookReviewGhost.html",
    "more_than_this_detail.html",
    "a_clockwork_orange_detail.html"
];

function getQueryParam(param) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
}

function displayResults(results) {
    const resultsContainer = document.getElementById('search-results');
    resultsContainer.innerHTML = '';

    if (results.length === 0) {
        resultsContainer.innerHTML = '<p>No results found</p>';
    } else {
        results.forEach(book => {
            const detailURL = bookDetailURLs[books.indexOf(book)];
            resultsContainer.innerHTML += `
                <div class="book-preview">
                    <div class="book-container">
                        <a href="#">
                            <img src="../Home Page/${book}.jpg" alt="${book}">
                            <div class="book-info">
                                <h3>${book}</h3>
                            </div>
                        </a>
                    </div>
                    <div class="information">
                        <h2>${book.toUpperCase()} AND THE SORCERER'S STONE</h2>
                        <p style="margin-top: 10px;">Oleh JK Rowling</p>
                        <div class="sub-info">
                            <p>Fiksi</p>
                            <p>Sastra</p>
                        </div>
                        <div class="star">
                            <i class="fas fa-star" style="color: #FBBC05"></i>
                            <p>4</p>    
                        </div>
                        <a href="${detailURL}">SELENGKAPNYA</a>
                    </div>
                </div>
            `;
        });
    }
}

document.addEventListener('DOMContentLoaded', function() {
    const query = getQueryParam('query').toLowerCase();
    const results = books.filter(book => book.toLowerCase().includes(query.toLowerCase()));
    displayResults(results);
});
