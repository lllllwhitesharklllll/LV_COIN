document.addEventListener("DOMContentLoaded", () => {
    // 1. Логика для выбора языка на смартфонах (Исправлено под обе страницы)
    const langDropdown = document.querySelector(".header__lang-dropdown");
    
    // Находим ПЕРВУЮ (активную) кнопку внутри дропдауна, независимо от языка
    const langBtn = langDropdown ? langDropdown.querySelector(".header__lang-btn") : null;

    if (langBtn && langDropdown) {
        langBtn.addEventListener("click", (e) => {
            if (window.innerWidth <= 1024) {
                e.stopPropagation(); // Не дает событию всплыть к документу и мгновенно закрыть меню
                langDropdown.classList.toggle("_active"); // Открывает при первом клике, закрывает при втором
            }
        });
    }

    // Клик в любое другое место экрана гарантированно закрывает выпадающий список языков
    document.addEventListener("click", (e) => {
        if (window.innerWidth <= 1024 && langDropdown) {
            if (!langDropdown.contains(e.target)) {
                langDropdown.classList.remove("_active");
            }
        }
    });

    // 2. Логика работы главного бургер-меню
    const burgerIcon = document.querySelector(".header__burger-icon");
    const headerMenu = document.querySelector(".header__menu");
    const body = document.body;

    if (burgerIcon && headerMenu) {
        burgerIcon.addEventListener("click", () => {
            burgerIcon.classList.toggle("is-open");
            headerMenu.classList.toggle("is-open");
            body.classList.toggle("lock"); // Блокирует прокрутку сайта под меню
        });
    }
});
