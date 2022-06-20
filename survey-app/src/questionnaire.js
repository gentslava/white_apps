const questionnaire = [
    {
        question: 'Дата последнего визита к стоматологу?',
        type: 'text',
        required: true,
    },
    {
        question: 'Как Вы узнали о нашей стоматологической клинике?',
        type: 'select',
        answers: [
            {
                title: '2ГИС',
                needsText: false,
            },
            {
                title: 'Яндекс',
                needsText: false,
            },
            {
                title: 'Instagram',
                needsText: false,
            },
            {
                title: 'ВКонтакте',
                needsText: false,
            },
            {
                title: 'Одноклассники',
                needsText: false,
            },
            {
                title: 'ПроДокторов',
                needsText: false,
            },
            {
                title: '32top',
                needsText: false,
            },
            {
                title: 'По рекомендации',
                needsText: false,
            },
            {
                title: 'Живу рядом',
                needsText: false,
            },
            {
                title: 'Свой вариант',
                needsText: true,
                textTitle: 'Напишите',
            },
        ],
        required: true,
    },
    {
        question: 'Принимаете ли вы в настоящее время какие-либо лекарства?',
        type: 'radio',
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
        type: 'radio',
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
        question: 'Ревматизм, ревма\u00ADтические поражения сердца, шумы в сердце, нерегулярный ритм',
        type: 'radio',
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
        type: 'radio',
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
        question: 'Повышенное/пониженное кровяное давление, повышенная крово\u00ADто\u00ADчи\u00ADвость, анемия',
        type: 'radio',
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
        type: 'radio',
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
        question: 'Рак, радио\u00ADлогическое лечение или химиотерапия',
        type: 'radio',
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
        type: 'radio',
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
        type: 'radio',
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
        question: 'Почечные и моче\u00ADиспус\u00ADкательные проблемы, диализ',
        type: 'radio',
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
        type: 'radio',
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
        type: 'radio',
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
        question: 'Хирур\u00ADгические операции и переливания крови',
        type: 'radio',
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
        type: 'radio',
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
        question: 'Лечение нижне\u00ADчелюст\u00ADного сустава',
        type: 'radio',
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
        type: 'radio',
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
        question: 'Принимаете ли Вы бисфос\u00ADфонаты',
        type: 'radio',
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
        type: 'radio',
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
        type: 'radio',
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
        type: 'radio',
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
                question: 'лекар\u00ADственные препараты',
                type: 'radio',
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
                type: 'radio',
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
                type: 'radio',
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
                type: 'radio',
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
                type: 'radio',
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
        question: 'Скрежетание зубами в ночное время/неконтро\u00ADлируемое сжатие челюстей в дневное время',
        type: 'radio',
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
        question: 'Кровото\u00ADчивость десен при чистке зубов',
        type: 'radio',
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
        question: 'Чувстви\u00ADтельная реакция со стороны зубов, при употреблении холодных напитков или сладкого',
        type: 'radio',
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
        question: 'Наслед\u00ADственные заболевания',
        type: 'radio',
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
                question: 'аллер\u00ADгические реакции',
                type: 'radio',
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
                question: 'продол\u00ADжительное кровотечение',
                type: 'radio',
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
                question: 'какие-либо другие осложнения во время или после стомато\u00ADлогического лечения',
                type: 'radio',
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
        type: 'text',
        required: false,
    },
];
export default questionnaire;
