document.addEventListener("DOMContentLoaded", function () {
    const searchInput = document.getElementById("search-input");
    const searchResultsContainer = document.getElementById("search-results");

    // Aranabilir içerik listesi (isteğe göre çoğaltılabilir)
    const data = [
        { title: "Nike Mercurial Superfly 10 Elite İnceleme", url: "sayfa1.html" },
        { title: "Nike Phantom GX 2 Elite İnceleme", url: "sayfa2.html" },
        { title: "Nike Mercurial Vapor 16 Elite İnceleme", url: "sayfa3.html" },
        { title: "Atak Oyuncuları İçin Adidas Krampon Önerileri", url: "sayfa1.html" },
        { title: "Defans Oyuncuları İçin Nike Tiempo İncelemesi", url: "krampon-sayfasi.html" },
        { title: "Galatasaray 25-26 Sezonu Forma Sızıntısı", url: "/Users/kadir/Desktop/Proje/haberler/İçerikler/Galatasarayforma.html" },
        { title: "Puma Future Grip 19.1 İnceleme", url: "ozel-tasarim-forma-sayfasi.html" },
		{ title: "Manchester City 25-26 Sezonu Forma Sızıntısı", url: "eldiven1.html" },
        // Buraya daha fazla içerik ekleyebilirsin
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
});
