document.addEventListener("DOMContentLoaded", function () {
    const searchInput = document.getElementById("search-input");
    const searchResultsContainer = document.getElementById("search-results");

    // Aranabilir içerik listesi
    const data = [
        { title: "Nike Mercurial Superfly 10 Elite İnceleme", url: "https://kadirkrkck.github.io/futbolboxx/kramponlar/nikekramponlar/Nike%20Mercurial%20Superfly%2010%20Elite/superfly.html" },
        { title: "Nike Phantom GX 2 Elite İnceleme", url: "https://kadirkrkck.github.io/futbolboxx/kramponlar/nikekramponlar/Nike%20Phantom%20GX%202%20Elite/phantom.html" },
        { title: "Nike Mercurial Vapor 16 Elite İnceleme", url: "https://kadirkrkck.github.io/futbolboxx/kramponlar/nikekramponlar/Nike%20Mercurial%20Vapor%2016%20Elite/mercurial.html" },
        { title: "Atak Oyuncuları İçin Adidas Krampon Önerileri", url: "https://kadirkrkck.github.io/futbolboxx/kramponlar/adidaskramponlar/adidas%C3%B6neri/adidas%C3%B6neri.html"},
        { title: "Inter 25-26 Forma Sızıntısı", url: "https://kadirkrkck.github.io/futbolboxx/haberler/icerikler/interforma/interforma.html" },
        { title: "Galatasaray 25-26 Sezonu Forma Sızıntısı", url: "https://kadirkrkck.github.io/futbolboxx/haberler/icerikler/gsforma/galatasarayforma.html" },
        { title: "Puma Future Grip 19.1 İnceleme", url: "ozel-tasarim-forma-sayfasi.html" },
        { title: "Beşiktaş 24-25 Forma İncelemesi", url: "https://kadirkrkck.github.io/futbolboxx/formalar/adidasformalar/bjkforma/bjkforma.html" },
        { title: "Adidas Predator 24 Elite FG İncelemesi", url: "https://kadirkrkck.github.io/futbolboxx/kramponlar/adidaskramponlar/predator/predator.html" },
        { title: "Puma Future Ultimate İncelemesi", url: "https://kadirkrkck.github.io/futbolboxx/kramponlar/pumakramponlar/future/future.html" },
        { title: "Adidas Predator Pro Goalkeeper Gloves Kaleci Eldiveni İncelemesi", url: "/Users/kadir/Desktop/Proje/eldivenler/adidaseldivenler/predatorpro/predatorpro.html" },
        { title: "Nike Vapor Grip3 Goalkeeper Gloves Kaleci Eldiveni İncelemesi", url: "/Users/kadir/Desktop/Proje/eldivenler/nikeeldivenler/gloves/gloves.html" },
        { title: "Puma Future Grip 19.1 Kaleci Eldiveni İncelemesi", url: "/Users/kadir/Desktop/Proje/eldivenler/pumaeldivenler/grip/grip.html" },
        { title: "Beşiktaş 24-25 Forma İncelemesi", url: "https://kadirkrkck.github.io/futbolboxx/haberler/icerikler/bjkforma/bjkforma.html" },
        { title: "Puma Ultra Ultimate FG/AG İncelemesi", url: "https://kadirkrkck.github.io/futbolboxx/kramponlar/pumakramponlar/ultra/ultra.html" },
        { title: "Puma King Ultimate FG/AG İncelemesi", url: "https://kadirkrkck.github.io/futbolboxx/kramponlar/pumakramponlar/king/king.html" },
        { title: "Beşiktaş 24-25 Forma İncelemesi", url: "https://kadirkrkck.github.io/futbolboxx/haberler/icerikler/bjkforma/bjkforma.html" },
        { title: "Beşiktaş 24-25 Forma İncelemesi", url: "https://kadirkrkck.github.io/futbolboxx/haberler/icerikler/bjkforma/bjkforma.html" },
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

    
document.addEventListener("DOMContentLoaded", function () {
    const utterancesContainer = document.createElement("div");
    utterancesContainer.id = "utterances-comments";
    document.body.appendChild(utterancesContainer); // Yorum alanını ekle

    const script = document.createElement("script");
    script.src = "https://utteranc.es/client.js";
    script.setAttribute("repo", "kadirkrkck/futbolboxx"); // Kendi repo adın
    script.setAttribute("issue-term", "pathname");
    script.setAttribute("label", "Yorum");
    script.setAttribute("theme", "github-light"); // github-dark da olabilir
    script.crossOrigin = "anonymous";
    script.async = true;

    document.getElementById("utterances-comments").appendChild(script);
});




});
