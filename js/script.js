document.addEventListener("DOMContentLoaded", () => {
    const langDropdown = document.querySelector(".header__lang-dropdown");
    const langBtn = langDropdown ? langDropdown.querySelector(".header__lang-btn") : null;

    const isTouchDevice = !window.matchMedia("(hover: hover)").matches;

    if (langBtn && langDropdown) {
        langBtn.addEventListener("click", (e) => {
            if (isTouchDevice) {
                // Ищем, был ли клик именно по САМОЙ ссылке выбора нового языка (внутри списка)
                const isLinkClick = e.target.closest(".header__lang-list a");

                // Если кликнули по ссылке — разрешаем браузеру перейти на другую страницу
                if (isLinkClick) {
                    return; 
                }

                // Если кликнули по главной верхней кнопке — переключаем меню
                e.preventDefault();
                e.stopPropagation();
                langDropdown.classList.toggle("_active");
            }
        });
    }

    // Клик в любое другое место экрана гарантированно закрывает выпадающий список языков
    document.addEventListener("click", (e) => {
        if (isTouchDevice && langDropdown) {
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
            body.classList.toggle("lock");
        });
    }
});
