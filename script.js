// Language swap logic (full coverage)
document.addEventListener('DOMContentLoaded', function () {
    const langBtn = document.getElementById('lang-swap');
    let currentLang = 'en';
    if (!langBtn) return;
    langBtn.addEventListener('click', function () {
        currentLang = currentLang === 'en' ? 'es' : 'en';
        langBtn.textContent = currentLang === 'en' ? 'ES' : 'EN';
        document.querySelectorAll('[data-en][data-es]').forEach(el => {
            if (el.tagName === 'INPUT' || el.tagName === 'BUTTON') {
                el.value = el.getAttribute('data-' + currentLang);
                el.textContent = el.getAttribute('data-' + currentLang);
            } else {
                el.innerHTML = el.getAttribute('data-' + currentLang);
            }
        });
    });
});
function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}