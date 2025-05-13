document.addEventListener("DOMContentLoaded", function () {
    const searchInput = document.getElementById("search-input");
    const searchResultsContainer = document.getElementById("search-results");

    // Aranabilir içerik listesi
    const data = [
        { title: "Nike Mercurial Superfly 10 Elite İnceleme", url: "sayfa1.html" },
        { title: "Nike Phantom GX 2 Elite İnceleme", url: "sayfa2.html" },
        { title: "Nike Mercurial Vapor 16 Elite İnceleme", url: "sayfa3.html" },
        { title: "Atak Oyuncuları İçin Adidas Krampon Önerileri", url: "sayfa1.html" },
        { title: "Defans Oyuncuları İçin Nike Tiempo İncelemesi", url: "krampon-sayfasi.html" },
        { title: "Galatasaray 25-26 Sezonu Forma Sızıntısı", url: "/Users/kadir/Desktop/Proje/haberler/İçerikler/Galatasarayforma.html" },
        { title: "Puma Future Grip 19.1 İnceleme", url: "ozel-tasarim-forma-sayfasi.html" },
        { title: "Adidas", url: "/Users/kadir/Desktop/Proje/kramponlar/adidaskramponlar/adidaskramponlar.html" }
    ];

    // Arama kutusuna yazıldıkça filtreleme
    searchInput.addEventListener("input", function () {
        const query = this.value.toLowerCase();
        searchResultsContainer.innerHTML = "";

        if (query.trim() === "") {
            searchResultsContainer.style.display = "none";
            return;
        }

        const filtered = data.filter(item => item.title.toLowerCase().includes(query));

        if (filtered.length === 0) {
            searchResultsContainer.innerHTML = "<p>Sonuç bulunamadı.</p>";
        } else {
            filtered.forEach(item => {
                const link = document.createElement("a");
                link.href = item.url;
                link.textContent = item.title;
                link.classList.add("result-item");
                searchResultsContainer.appendChild(link);
            });
        }

        searchResultsContainer.style.display = "block";
    });

    // Arama dışına tıklanınca sonuçları gizle
    document.addEventListener("click", function (e) {
        if (!searchResultsContainer.contains(e.target) && e.target !== searchInput) {
            searchResultsContainer.style.display = "none";
        }
    });

    // Yorum ekleme sistemi
    const commentButton = document.getElementById("comment-btn");
    const commentInput = document.getElementById("comment-text");
    const commentListContainer = document.getElementById("comment-list");
    const ratingStars = document.getElementById("rating-stars");

    // localStorage'dan yorumları al
    let comments = JSON.parse(localStorage.getItem("yorumlar")) || [];

    // Yıldızları işaretleme işlevi
    function setRating(rating) {
        // Yıldızları sıfırlama
        const stars = document.querySelectorAll(".star");
        stars.forEach((star, index) => {
            if (index < rating) {
                star.classList.add("filled");
            } else {
                star.classList.remove("filled");
            }
        });
    }

    // Yıldız tıklama işlevi
    ratingStars.addEventListener("click", function (e) {
        const clickedStar = e.target;
        if (clickedStar.classList.contains("star")) {
            const rating = Array.from(ratingStars.children).indexOf(clickedStar) + 1;
            setRating(rating);
            commentButton.dataset.rating = rating; // Rating'i butona kaydet
        }
    });

    // Yıldızlar başlangıçta boş olmalı
    setRating(0);

    // Yorumları ekranda gösterme
    function displayComments() {
        commentListContainer.innerHTML = '';
        comments.forEach((commentObj, index) => {
            const commentElement = document.createElement("div");
            commentElement.classList.add("comment-item");
            commentElement.style.border = "1px solid #ccc";
            commentElement.style.padding = "10px";
            commentElement.style.marginBottom = "10px";
            commentElement.style.position = "relative";

            commentElement.innerHTML = `
                <p><strong>Yorum ${index + 1}:</strong> ${commentObj.text}</p>
                <small style="color: gray;">${commentObj.date}</small>
                <div class="stars">${getStarsHTML(commentObj.rating)}</div>
                <button style="position: absolute; right: 10px; top: 10px;" onclick="deleteComment(${index})">Sil</button>
            `;

            commentListContainer.appendChild(commentElement);
        });
    }

    // Yıldızları HTML olarak al
    function getStarsHTML(rating) {
        let starsHTML = '';
        for (let i = 1; i <= 5; i++) {
            starsHTML += i <= rating ? '<span class="star filled">★</span>' : '<span class="star">★</span>';
        }
        return starsHTML;
    }

    // Sayfa açıldığında yorumları göster
    displayComments();

    // Yorum gönderme işlevi
    commentButton.addEventListener("click", function () {
        const commentText = commentInput.value.trim();
        const rating = parseInt(commentButton.dataset.rating);

        if (commentText && rating > 0) {
            const now = new Date().toLocaleString('tr-TR');
            comments.push({ text: commentText, date: now, rating: rating });
            localStorage.setItem("yorumlar", JSON.stringify(comments));
            commentInput.value = '';
            setRating(0); // Yıldızları sıfırla
            displayComments();
        } else {
            alert("Yorumunuzu yazmayı ve bir değerlendirme yapmayı unutmayın!");
        }
    });

    // Silme işlevi (global yapmak için window objesine ekleniyor)
    window.deleteComment = function (index) {
        comments.splice(index, 1);
        localStorage.setItem("yorumlar", JSON.stringify(comments));
        displayComments();
    };
});
