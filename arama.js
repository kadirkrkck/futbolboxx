document.addEventListener("DOMContentLoaded", function () {
    const searchInput = document.getElementById("search-input");
    const searchResultsContainer = document.getElementById("search-results");

    // Aranabilir içerik listesi
    const data = [
        { title: "Nike Mercurial Superfly 10 Elite İnceleme", url: "/Users/kadir/Desktop/Proje/kramponlar/nikekramponlar/Nike%20Mercurial%20Superfly%2010%20Elite/superfly.html" },
        { title: "Nike Phantom GX 2 Elite İnceleme", url: "/Users/kadir/Desktop/Proje/kramponlar/nikekramponlar/Nike%20Phantom%20GX%202%20Elite/phantom.html" },
        { title: "Nike Mercurial Vapor 16 Elite İnceleme", url: "/Users/kadir/Desktop/Proje/kramponlar/nikekramponlar/Nike%20Mercurial%20Vapor%2016%20Elite/mercurial.html" },
        { title: "Atak Oyuncuları İçin Adidas Krampon Önerileri", url: "/Users/kadir/Desktop/Proje/kramponlar/adidaskramponlar/adidasöneri/adidasöneri.html"},
        { title: "Inter 25-26 Forma Sızıntısı", url: "/Users/kadir/Desktop/Proje/haberler/icerikler/interforma/interforma.html" },
        { title: "Galatasaray 25-26 Sezonu Forma Sızıntısı", url: "/Users/kadir/Desktop/Proje/haberler/İçerikler/Galatasarayforma.html" },
        { title: "Puma Future Grip 19.1 İnceleme", url: "ozel-tasarim-forma-sayfasi.html" },
        { title: "Beşiktaş 24-25 Forma İncelemesi", url: "/Users/kadir/Desktop/Proje/haberler/icerikler/bjkforma/bjkforma.html" },
        { title: "Adidas Predator 24 Elite FG İncelemesi", url: "/Users/kadir/Desktop/Proje/kramponlar/adidaskramponlar/predator/predator.html" },
        { title: "Puma Future Ultimate İncelemesi", url: "/Users/kadir/Desktop/Proje/kramponlar/pumakramponlar/future/future.html" },
        { title: "Adidas Predator Pro Goalkeeper Gloves Kaleci Eldiveni İncelemesi", url: "/Users/kadir/Desktop/Proje/eldivenler/adidaseldivenler/predatorpro/predatorpro.html" },
        { title: "Nike Vapor Grip3 Goalkeeper Gloves Kaleci Eldiveni İncelemesi", url: "/Users/kadir/Desktop/Proje/eldivenler/nikeeldivenler/gloves/gloves.html" },
        { title: "Puma Future Grip 19.1 Kaleci Eldiveni İncelemesi", url: "/Users/kadir/Desktop/Proje/eldivenler/pumaeldivenler/grip/grip.html" },
        { title: "Beşiktaş 24-25 Forma İncelemesi", url: "/Users/kadir/Desktop/Proje/haberler/icerikler/bjkforma/bjkforma.html" },
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

    // *** Commento scriptini dinamik olarak  ***
(function() {
  var d = document;
  var s = d.createElement('script');
  s.src = 'https://cdn.commento.io/js/commento.js';
  s.async = true;
  s.setAttribute('data-id', '5692983001219072-proj'); 
  d.body.appendChild(s);
})();

});
