(function () {
    // Remember a language picked from the switcher so the root page stops auto-redirecting.
    document.querySelectorAll("[data-lang]").forEach(function (link) {
        link.addEventListener("click", function () {
            try {
                localStorage.setItem("noteday-lang", link.getAttribute("data-lang"));
            } catch (e) {}
        });
    });

    var nav = document.querySelector(".nav");
    function onScroll() {
        nav.classList.toggle("scrolled", window.scrollY > 8);
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    var items = document.querySelectorAll(".reveal");
    if (!("IntersectionObserver" in window)) {
        items.forEach(function (el) {
            el.classList.add("in");
        });
        return;
    }
    var observer = new IntersectionObserver(
        function (entries) {
            entries.forEach(function (entry) {
                if (entry.isIntersecting) {
                    entry.target.classList.add("in");
                    observer.unobserve(entry.target);
                }
            });
        },
        { rootMargin: "0px 0px -8% 0px" }
    );
    items.forEach(function (el) {
        observer.observe(el);
    });
})();
