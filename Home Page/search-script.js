const books = [
    "Agama",
    "Bahasa",
    "Edukasi",
    "Filsafat",
    "Fiksi",
    "Geografi",
    "Horor",
    "Kesenian",
    "Sastra",
    "Sejarah"

];

const bookDetailMap = {
    "Agama": {
        url: "/Book Review/BookReviewAgama.html",
        author: "Richard Dawkins",
        judul: "The God Delusion",
        category : "Agama"
    },
    "Bahasa": {
        url: "/Book Review/BookReviewBahasa.html",
        author: "John H. McWhorter",
        judul: "The Power of Babel",
        category : "Bahasa"
    },
    "Edukasi": {
        url: "/Book Review/BookReviewEdukasi.html",
        author: "Sir Ken Robinson, PhD",
        judul: "The Element",
        category : "Edukasi"
    },
    "Fiksi": {
        url: "/Book Review/BookReviewFiksi.html",
        author: "H.G. Wells",
        judul: "The Invisable Man",
        category: "Fiksi"
    },
    "Filsafat": {
        url: "/Book Review/BookReviewFilsafat.html",
        author: "Jostein Gaarder",
        judul: "Sophie's World",
        category: "Filsafat"
    },
    "Geografi": {
        url: "/Book Review/BookReviewGeografi.html",
        author: "Tim Marshall",
        judul: "Prisoners of Geography",
        category : "Geografi"
    },
    "Horor": {
        url: "/Book Review/BookReviewHorror.html",
        author: "H.G. Wells",
        judul: "The Invisable Man",
        category: "Horor"
    },
    "Kesenian": {
        url: "/Book Review/BookReviewSeni.html",
        author: "E.H. Gombrich",
        judul: "The Story of Art",
        category: "Seni"
    },
    "Sastra": {
        url: "/Book Review/BookReviewSastra.html",
        author: "Thomas C. Foster",
        judul: "How to Read Literature Like a Professor",
        category: "Sastra"
    },
    "Sejarah": {
        url: "/Book Review/BookReviewSejarah.html",
        author: "Howard Zinn",
        judul: "A People's History of the United States",
        category: "Sejarah"
    }
};

function getQueryParam(param) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
}

function displayResults(results) {
    const resultsContainer = document.getElementById('search-results');
    resultsContainer.innerHTML = '';

    if (results.length === 0) {
        resultsContainer.innerHTML =  '<p style="margin-left: 90px; font-weight: bold; font-size:20px;">No results found</p>';
    } else {
        results.forEach(book => {
            const detail = bookDetailMap[book];
            resultsContainer.innerHTML += `
                <div class="book-preview">
                    <div class="book-container">
                        <a href="${detail.url}">
                            <img src="../Book Review/Book Cover/${detail.judul}.jpg" alt="${detail.judul}">
                            <div class="book-info">
                                <h3>${detail.judul}</h3>
                            </div>
                        </a>
                    </div>
                    <div class="information">
                        <h2>${detail.judul}</h2>
                        <p style="margin-top: 10px;">Oleh ${detail.author}</p>
                        <div class="sub-info">
                            <p>${detail.category}</p>
                            
                        </div>
                        <div class="star">
                            <i class="fas fa-star" style="color: #FBBC05"></i>
                            <p>4</p>    
                        </div>
                        <a href="${detail.url}">SELENGKAPNYA</a>
                    </div>
                </div>
            `;
        });
    }
}


document.addEventListener('DOMContentLoaded', function() {
    const query = getQueryParam('query').toLowerCase();
    const results = books.filter(book => book.toLowerCase().includes(query));
    displayResults(results);
});
