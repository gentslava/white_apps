const questionnaire = [
    {
        question: 'Дата последнего визита к стоматологу?',
        textAnswer: true,
        required: true,
    },
    {
        question: 'Как Вы узнали о нашей стоматологической клинике?',
        textAnswer: true,
        required: true,
    },
    {
        question: 'Принимаете ли вы в настоящее время какие-либо лекарства?',
        answers: [
            {
                title: 'Да',
                textTitle: 'Перечислите названия лекарств',
                needsText: true,
            },
            {
                title: 'Нет',
                needsText: false,
            },
        ],
        required: true,
    },
    {
        question: 'Инфаркт миокарда, стенокардия, хирургия на сердце, врожденные пороки сердца',
        answers: [
            {
                title: 'Да',
                needsText: false,
            },
            {
                title: 'Нет',
                needsText: false,
            },
        ],
        required: true,
    },
    {
        question: 'Ревматизм, ревматические поражения сердца, шумы в сердце, нерегулярный ритм',
        answers: [
            {
                title: 'Да',
                needsText: false,
            },
            {
                title: 'Нет',
                needsText: false,
            },
        ],
        required: true,
    },
    {
        question: 'Желудочно-кишечные заболевания',
        answers: [
            {
                title: 'Да',
                needsText: false,
            },
            {
                title: 'Нет',
                needsText: false,
            },
        ],
        required: true,
    },
    {
        question: 'Повышенное/пониженное кровяное давление, повышенная кровоточивость, анемия',
        answers: [
            {
                title: 'Да',
                needsText: false,
            },
            {
                title: 'Нет',
                needsText: false,
            },
        ],
        required: true,
    },
    {
        question: 'Проблемы с дыханием, астма, туберкулез',
        answers: [
            {
                title: 'Да',
                needsText: false,
            },
            {
                title: 'Нет',
                needsText: false,
            },
        ],
        required: true,
    },
    {
        question: 'Рак, радиологическое лечение или химиотерапия',
        answers: [
            {
                title: 'Да',
                needsText: false,
            },
            {
                title: 'Нет',
                needsText: false,
            },
        ],
        required: true,
    },
    {
        question: 'Диабет',
        answers: [
            {
                title: 'Да',
                needsText: false,
            },
            {
                title: 'Нет',
                needsText: false,
            },
        ],
        required: true,
    },
    {
        question: 'Гепатит, желтуха, заболевания печени',
        answers: [
            {
                title: 'Да',
                needsText: false,
            },
            {
                title: 'Нет',
                needsText: false,
            },
        ],
        required: true,
    },
    {
        question: 'Почечные и мочеиспускательные проблемы, диализ',
        answers: [
            {
                title: 'Да',
                needsText: false,
            },
            {
                title: 'Нет',
                needsText: false,
            },
        ],
        required: true,
    },
    {
        question: 'ВИЧ-инфекция (СПИД)',
        answers: [
            {
                title: 'Да',
                needsText: false,
            },
            {
                title: 'Нет',
                needsText: false,
            },
        ],
        required: true,
    },
    {
        question: 'Гемофилия',
        answers: [
            {
                title: 'Да',
                needsText: false,
            },
            {
                title: 'Нет',
                needsText: false,
            },
        ],
        required: true,
    },
    {
        question: 'Хирургические операции и переливания крови',
        answers: [
            {
                title: 'Да',
                needsText: false,
            },
            {
                title: 'Нет',
                needsText: false,
            },
        ],
        required: true,
    },
    {
        question: 'Травмы головы или шеи',
        answers: [
            {
                title: 'Да',
                needsText: false,
            },
            {
                title: 'Нет',
                needsText: false,
            },
        ],
        required: true,
    },
    {
        question: 'Лечение нижнечелюстного сустава',
        answers: [
            {
                title: 'Да',
                needsText: false,
            },
            {
                title: 'Нет',
                needsText: false,
            },
        ],
        required: true,
    },
    {
        question: 'Остеопороз',
        answers: [
            {
                title: 'Да',
                needsText: false,
            },
            {
                title: 'Нет',
                needsText: false,
            },
        ],
        required: true,
    },
    {
        question: 'Принимаете ли Вы бисфосфонаты',
        answers: [
            {
                title: 'Да',
                needsText: false,
            },
            {
                title: 'Нет',
                needsText: false,
            },
        ],
        required: true,
    },
    {
        question: 'Отмечается ли у Вас потеря веса за последние 6 месяцев?',
        answers: [
            {
                title: 'Да',
                needsText: false,
            },
            {
                title: 'Нет',
                needsText: false,
            },
        ],
        required: true,
    },
    {
        question: 'Заболевания ЛОР-органов (уха, горла, носа)',
        answers: [
            {
                title: 'Да',
                needsText: false,
            },
            {
                title: 'Нет',
                needsText: false,
            },
        ],
        required: true,
    },
    {
        question: 'Заболевание гайморовых пазух',
        answers: [
            {
                title: 'Да',
                needsText: false,
            },
            {
                title: 'Нет',
                needsText: false,
            },
        ],
        required: true,
    },
    {
        question: 'Бывают ли у вас проявления аллергии на:',
        multipleQuestions: [
            {
                question: 'лекарственные препараты',
                answers: [
                    {
                        title: 'Да',
                        needsText: false,
                    },
                    {
                        title: 'Нет',
                        needsText: false,
                    },
                ],
            },
            {
                question: 'пищевые продукты',
                answers: [
                    {
                        title: 'Да',
                        needsText: false,
                    },
                    {
                        title: 'Нет',
                        needsText: false,
                    },
                ],
            },
            {
                question: 'шерсть животных',
                answers: [
                    {
                        title: 'Да',
                        needsText: false,
                    },
                    {
                        title: 'Нет',
                        needsText: false,
                    },
                ],
            },
            {
                question: 'пыльцу растений',
                answers: [
                    {
                        title: 'Да',
                        needsText: false,
                    },
                    {
                        title: 'Нет',
                        needsText: false,
                    },
                ],
            },
            {
                question: 'прочие',
                answers: [
                    {
                        title: 'Да',
                        needsText: false,
                    },
                    {
                        title: 'Нет',
                        needsText: false,
                    },
                ],
            },
        ],
        required: true,
    },
    {
        question: 'Скрежетание зубами в ночное время/неконтролируемое сжатие челюстей в дневное время',
        answers: [
            {
                title: 'Да',
                needsText: false,
            },
            {
                title: 'Нет',
                needsText: false,
            },
        ],
        required: true,
    },
    {
        question: 'Кровоточивость десен при чистке зубов',
        answers: [
            {
                title: 'Да',
                needsText: false,
            },
            {
                title: 'Нет',
                needsText: false,
            },
        ],
        required: true,
    },
    {
        question: 'Чувствительная реакция со стороны зубов, при употреблении холодных напитков или сладкого',
        answers: [
            {
                title: 'Да',
                needsText: false,
            },
            {
                title: 'Нет',
                needsText: false,
            },
        ],
        required: true,
    },
    {
        question: 'Наследственные заболевания',
        answers: [
            {
                title: 'Да',
                needsText: false,
            },
            {
                title: 'Нет',
                needsText: false,
            },
        ],
        required: true,
    },
    {
        question: 'Наблюдались ли у Вас при предыдущем стоматологическом лечении:',
        multipleQuestions: [
            {
                question: 'аллергические реакции',
                answers: [
                    {
                        title: 'Да',
                        needsText: false,
                    },
                    {
                        title: 'Нет',
                        needsText: false,
                    },
                ],
            },
            {
                question: 'продолжительное кровотечение',
                answers: [
                    {
                        title: 'Да',
                        needsText: false,
                    },
                    {
                        title: 'Нет',
                        needsText: false,
                    },
                ],
            },
            {
                question: 'какие-либо другие осложнения во время или после стоматологического лечения',
                answers: [
                    {
                        title: 'Да',
                        needsText: false,
                    },
                    {
                        title: 'Нет',
                        needsText: false,
                    },
                ],
            },
        ],
        required: true,
    },
    {
        question: 'Добавьте то, что Вы считаете важным',
        textAnswer: true,
        required: false,
    },
];
export default questionnaire;
