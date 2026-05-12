// static/js/theme.js
(function() {
    const toggleBtn = document.getElementById('theme-toggle');
    const body = document.body;

    // Проверяем сохранённую тему
    const saved = localStorage.getItem('theme');
    if (saved === 'dark') {
        body.classList.add('dark-theme');
    }

    // Функция обновления иконки
    function updateIcon() {
        if (!toggleBtn) return;
        toggleBtn.textContent = body.classList.contains('dark-theme') ? '☀️' : '🌙';
    }
    updateIcon();

    // Обработчик клика
    if (toggleBtn) {
        toggleBtn.addEventListener('click', () => {
            body.classList.toggle('dark-theme');
            localStorage.setItem('theme', body.classList.contains('dark-theme') ? 'dark' : 'light');
            updateIcon();
            console.log('Тема переключена:', body.classList.contains('dark-theme') ? 'dark' : 'light');
        });
    } else {
        console.error('Кнопка #theme-toggle не найдена на странице');
    }
})();// static/js/theme.js
(function() {
    const toggleBtn = document.getElementById('theme-toggle');
    const body = document.body;

    // Проверяем сохранённую тему
    const saved = localStorage.getItem('theme');
    if (saved === 'dark') {
        body.classList.add('dark-theme');
    }

    // Функция обновления иконки
    function updateIcon() {
        if (!toggleBtn) return;
        toggleBtn.textContent = body.classList.contains('dark-theme') ? '☀️' : '🌙';
    }
    updateIcon();

    // Обработчик клика
    if (toggleBtn) {
        toggleBtn.addEventListener('click', () => {
            body.classList.toggle('dark-theme');
            localStorage.setItem('theme', body.classList.contains('dark-theme') ? 'dark' : 'light');
            updateIcon();
            console.log('Тема переключена:', body.classList.contains('dark-theme') ? 'dark' : 'light');
        });
    } else {
        console.error('Кнопка #theme-toggle не найдена на странице');
    }
})();