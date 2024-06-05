const books = [
    "Harry Potter",
    "Invisible Man",
    "American Psycho",
    "David Sedaris",
    "Ghost Forest",
    "More Than This",
    "A Clockwork Orange"
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
            const bookPreview = document.createElement('div');
            bookPreview.classList.add('book-preview');

            const bookContainer = document.createElement('div');
            bookContainer.classList.add('book-container');

            const bookLink = document.createElement('a');
            bookLink.href = '#';

            const bookImage = document.createElement('img');
            bookImage.src = `../Home Page/${book}.jpg`;
            bookImage.alt = book;

            const bookInfo = document.createElement('div');
            bookInfo.classList.add('book-info');

            const bookTitle = document.createElement('h3');
            bookTitle.textContent = book;

            bookInfo.appendChild(bookTitle);
            bookLink.appendChild(bookImage);
            bookLink.appendChild(bookInfo);
            bookContainer.appendChild(bookLink);
            bookPreview.appendChild(bookContainer);

            resultsContainer.appendChild(bookPreview);
        });
    }
}

document.addEventListener('DOMContentLoaded', function() {
    const query = getQueryParam('query').toLowerCase();
    const results = books.filter(book => book.toLowerCase().includes(query.toLowerCase())); // Memastikan pencarian case-insensitive
    displayResults(results);
});
