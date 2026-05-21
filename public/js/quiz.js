document.addEventListener('DOMContentLoaded', () => {
    // Персонажи и их описания
    const characters = {
        dima: {
            name: 'Дима',
            desc: 'Ты — человек, который серьёзно относится к поставленным целям, даже если путь к ним тернист. Иногда сомневаешься, но поддержка друзей и вера в себя помогают двигаться вперёд. Физика для тебя — вызов, который ты готов принять!'
        },
        artem: {
            name: 'Артём',
            desc: 'Ты — прирождённый экспериментатор. Тебе важно всё потрогать, проверить и испытать. Знания приходят через действие, а лаборатория для тебя — второй дом. Ты доказываешь, что физика везде вокруг нас.'
        },
        elli: {
            name: 'Элли',
            desc: 'Ты — визуализатор и техно-энтузиаст. Сложные явления становятся понятными, когда их можно увидеть на экране. Программирование и симуляции — твои главные инструменты, а эстетика науки вдохновляет тебя.'
        },
        galya: {
            name: 'Галя',
            desc: 'Ты — теоретик до мозга костей. Формулы, логика, стройные концепции — вот твоя стихия. Тебе нравится докапываться до сути, и ты искренне наслаждаешься красотой физических законов.'
        }
    };

    // Вопросы (значения вариантов соответствуют ключам персонажей)
    const questions = [
        {
            text: 'Как ты относишься к учёбе?',
            options: [
                { text: 'Стараюсь всё понять через практику', value: 'artem' },
                { text: 'Люблю разбираться в формулах и теории', value: 'galya' },
                { text: 'Важно видеть наглядные примеры', value: 'elli' },
                { text: 'Переживаю, но учу, потому что надо', value: 'dima' }
            ]
        },
        {
            text: 'Какой способ изучения физики тебе ближе?',
            options: [
                { text: 'Проводить эксперименты и опыты', value: 'artem' },
                { text: 'Смотреть симуляции и анимации', value: 'elli' },
                { text: 'Разбирать теоретические основы', value: 'galya' },
                { text: 'Решать задачи, даже если сложно', value: 'dima' }
            ]
        },
        {
            text: 'Что тебя больше всего мотивирует?',
            options: [
                { text: 'Поддержка друзей', value: 'dima' },
                { text: 'Желание понять, как устроен мир', value: 'galya' },
                { text: 'Возможность что-то создавать своими руками', value: 'artem' },
                { text: 'Видеть результат в виде работающей программы', value: 'elli' }
            ]
        },
        {
            text: 'Твоя роль в команде:',
            options: [
                { text: 'Организатор, который всех объединяет', value: 'dima' },
                { text: 'Генератор идей', value: 'galya' },
                { text: 'Исполнитель, проверяющий всё на деле', value: 'artem' },
                { text: 'Технический специалист', value: 'elli' }
            ]
        },
        {
            text: 'Что для тебя важнее в проекте?',
            options: [
                { text: 'Достичь поставленной цели', value: 'dima' },
                { text: 'Получить новые знания', value: 'galya' },
                { text: 'Процесс работы и эксперименты', value: 'artem' },
                { text: 'Эстетика и оформление', value: 'elli' }
            ]
        }
    ];

    const form = document.getElementById('quiz-form');
    const resultDiv = document.getElementById('result');
    const questionsContainer = document.getElementById('questions-container');
    const retryBtn = document.getElementById('retry-btn');

    // Рендерим вопросы
    function renderQuestions() {
        let html = '';
        questions.forEach((q, index) => {
            html += `<div class="quiz-block">
                <h3>${index + 1}. ${q.text}</h3>
                <ul class="quiz-options">`;
            q.options.forEach(opt => {
                html += `<li>
                    <label>
                        <input type="radio" name="q${index}" value="${opt.value}" required>
                        ${opt.text}
                    </label>
                </li>`;
            });
            html += `</ul></div>`;
        });
        questionsContainer.innerHTML = html;
    }

    // Подсчёт результата
    function calculateResult() {
        const counts = { dima: 0, artem: 0, elli: 0, galya: 0 };
        questions.forEach((_, index) => {
            const selected = form.querySelector(`input[name="q${index}"]:checked`);
            if (selected) {
                counts[selected.value]++;
            }
        });
        // Находим персонажа с максимальным счётом
        let maxChar = 'dima';
        let maxCount = 0;
        for (const [char, count] of Object.entries(counts)) {
            if (count > maxCount) {
                maxCount = count;
                maxChar = char;
            }
        }
        return maxChar;
    }

    // Показать результат
    function showResult(character) {
        const charData = characters[character];
        document.getElementById('char-name').textContent = charData.name;
        document.getElementById('char-desc').textContent = charData.desc;
        resultDiv.classList.add('visible');
        form.style.display = 'none';
    }

    // Сбросить тест
    function resetQuiz() {
        resultDiv.classList.remove('visible');
        form.style.display = 'block';
        form.reset();
    }

    // Обработчик отправки
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        // Проверяем, все ли вопросы отвечены (браузер сам проверит required)
        const allAnswered = questions.every((_, i) => form.querySelector(`input[name="q${i}"]:checked`));
        if (allAnswered) {
            const character = calculateResult();
            showResult(character);
        }
    });

    // Кнопка "Пройти заново"
    retryBtn.addEventListener('click', resetQuiz);

    // Инициализация
    renderQuestions();
});