const monthNames = ["января", "февраля", "марта", "апреля", "мая", "июня",
  "июля", "августа", "сентября", "октября", "ноября", "декабря"];
const schoolsClasses = [
  {id: 0, className: 'label--interfaces'},
  {id: 1, className: 'label--mobile'},
  {id: 2, className: 'label--design'}
];
// постоянные данные лекций, аудиторий, школ и лекторов
const schoolsConst = [
    {
        id: 0,
        name: 'Школа разработки интерфейсов',
        students: 38
    },
    {
        id: 1,
        name: 'Школа мобильной разработки',
        students: 24
    },
    {
        id: 2,
        name: 'Школа мобильного дизайна',
        students: 46
    }
];
const locationsConst = [
    {
        id: 0,
        name: 'Ясеневый беспорядок',
        description: 'Первый этаж. Второй кабинет налево от главного входа по левой стороне.',
        capacity: 25
    },
    {
        id: 1,
        name: 'За углом',
        description: 'Первый этаж. Направо от главного входа, сразу за углом.',
        capacity: 45
    },
    {
        id: 2,
        name: 'Проектор сломался',
        description: 'Первый этаж. Большой кабинет сразу за кухней.',
        capacity: 100
    },
    {
        id: 3,
        name: 'Светлая сторона',
        description: 'Второй этаж. Третий кабинет налево от лестницы по правую сторону, окна выходят на южную сторону.',
        capacity: 90
    },
    {
        id: 4,
        name: 'Темная сторона',
        description: 'Второй этаж. Третий кабинет налево от лестницы по левую сторону.',
        capacity: 30
    },
    {
        id: 5,
        name: 'Завтра хаос',
        description: 'Второй этаж. Направо от лестницы, первый кабинет по правую сторону.',
        capacity: 70
    },
    {
        id: 6,
        name: 'Истина рядом',
        description: 'Третий этаж. Направо от лестницы, четвертый кабинет по правую сторону.',
        capacity: 40
    },
    {
        id: 7,
        name: 'За стеклом',
        description: 'Третий этаж. Кабинет прямо напротив лестницы.',
        capacity: 120
    }
];
const lecturesConst = [
    {
        "id":0,
        "title":"Лекция 1. Идея, исследование, концепт (Часть 1)",
        "time_start":"11:00",
        "time_end":"13:30",
        "date":"18 октября 2016",
        "date_utc":"2017-04-18T00:00:00.000Z",
        "date_start_utc":"2017-04-18T08:00:00.000Z",
        "date_end_utc":"2017-04-18T10:30:00.000Z",
        "link":"https://events.yandex.ru/lib/talks/4158/",
        "description":"Идея определяет суть любого продукта и, вместе с тем, ничего не стоит. Чтобы работать с ней, нужен понятный процесс, который проведет дизайнера от её возникновения до реализации и оценки реальными пользователями. И на этом работа дизайнера не заканчивается — ему всегда нужно уметь заглядывать в будущее.",
        "speaker_id":0,
        "schools_id":[
            2
        ],
        "location_id":6
    },
    {
        "id":1,
        "title":"Лекция 2. Идея, исследование, концепт (Часть 2)",
        "time_start":"14:00",
        "time_end":"16:30",
        "date":"18 октября 2016",
        "date_utc":"2017-04-18T00:00:00.000Z",
        "date_start_utc":"2017-04-18T11:00:00.000Z",
        "date_end_utc":"2017-04-18T13:30:00.000Z",
        "link":"https://events.yandex.ru/lib/talks/4159/",
        "description":"Как блестящие идеи претворяются в жизнь, какие сложности возникают при их реализации, чем важна хорошая коммуникация в работе и что даёт проверка прототипов жизнью. Лекция с примерами ошибок и советом не бояться совершать собственные.",
        "speaker_id":0,
        "schools_id":[
            2
        ],
        "location_id":1
    },
    {
        "id":2,
        "title":"Лекция 1. Java Blitz (Часть 1)",
        "time_start":"15:00",
        "time_end":"17:30",
        "date":"19 октября 2016",
        "date_utc":"2017-04-19T00:00:00.000Z",
        "date_start_utc":"2017-04-19T12:00:00.000Z",
        "date_end_utc":"2017-04-19T14:30:00.000Z",
        "link":"https://events.yandex.ru/lib/talks/4160/",
        "description":"О языке программирования Java и устройстве виртуальной машины Dalvik/ART на Android. А также об отличиях среды мобильной разработки от десктопной Java и о том, что важно знать при знакомстве с экосистемой Android.",
        "speaker_id":1,
        "schools_id":[
            1
        ],
        "location_id":1
    },
    {
        "id":3,
        "title":"Лекция 2. Git & Workflow",
        "time_start":"18:00",
        "time_end":"20:30",
        "date":"19 октября 2016",
        "date_utc":"2017-04-19T00:00:00.000Z",
        "date_start_utc":"2017-04-19T15:00:00.000Z",
        "date_end_utc":"2017-04-19T17:30:00.000Z",
        "link":"https://events.yandex.ru/lib/talks/4161/",
        "description":"Обзор основных концепций git с их преимуществами и недостатками. А также о том, какие есть модели организации работы с распределенной системой и как выбрать подходящую модель для команды.",
        "speaker_id":2,
        "schools_id":[
            1
        ],
        "location_id":4
    },
    {
        "id":4,
        "title":"Лекция 1. Адаптивная вёрстка",
        "time_start":"11:00",
        "time_end":"13:30",
        "date":"20 октября 2016",
        "date_utc":"2017-04-20T00:00:00.000Z",
        "date_start_utc":"2017-04-20T08:00:00.000Z",
        "date_end_utc":"2017-04-20T10:30:00.000Z",
        "link":"https://events.yandex.ru/lib/talks/4162/",
        "description":"О проблемах отображения современного сайта на разных устройствах, с их удачными и не лучшими решениями. В практической части лекции рассматривается процесс улучшения статического сайта и основные прикладные техники адаптивной вёрстки.",
        "speaker_id":3,
        "schools_id":[
            0
        ],
        "location_id":4
    },
    {
        "id":5,
        "title":"Проектирование интерфейсов",
        "time_start":"18:00",
        "time_end":"20:30",
        "date":"16 декабря 2016",
        "date_utc":"2017-05-16T00:00:00.000Z",
        "date_start_utc":"2017-05-16T15:00:00.000Z",
        "date_end_utc":"2017-05-16T17:30:00.000Z",
        "link":"",
        "description":"Требования к интерфейсам: маркетинговые и технические, анализ портрета пользователя, основные принципы построения интерфейсов ",
        "speaker_id":2,
        "schools_id":[
            0,
            1,
            2
        ],
        "location_id":1
    },
    {
        "id":6,
        "title":"Лекция 3. Особенности проектирования мобильных интерфейсов",
        "time_start":"11:00",
        "time_end":"13:30",
        "date":"25 октября 2016",
        "date_utc":"2017-04-25T00:00:00.000Z",
        "date_start_utc":"2017-04-25T08:00:00.000Z",
        "date_end_utc":"2017-04-25T10:30:00.000Z",
        "link":"https://events.yandex.ru/lib/talks/4167/",
        "description":"Из чего складывается внимание человека и как им управлять. А также — как применять эти знания в проектировании мобильных интерфейсов.",
        "speaker_id":4,
        "schools_id":[
            2
        ],
        "location_id":2
    },
    {
        "id":7,
        "title":"Лекция 3. Java Blitz (Часть 2)",
        "time_start":"18:00",
        "time_end":"20:30",
        "date":"25 октября 2016",
        "date_utc":"2017-04-25T00:00:00.000Z",
        "date_start_utc":"2017-04-25T15:00:00.000Z",
        "date_end_utc":"2017-04-25T17:30:00.000Z",
        "link":"https://events.yandex.ru/lib/talks/4168/",
        "description":"Что такое generics и чем они важны? Можно ли читать байткод? Как работает препроцессор и аннотации? А также о том, нужна ли рефлексия в продакшене, как не наступать на простые грабли и как выглядит контрактное программирование в Java.",
        "speaker_id":1,
        "schools_id":[
            1
        ],
        "location_id":2
    },
    {
        "id":8,
        "title":"MyFirstApp (Часть 1)",
        "time_start":"15:00",
        "time_end":"17:30",
        "date":"25 октября 2016",
        "date_utc":"2017-04-25T00:00:00.000Z",
        "date_start_utc":"2017-04-25T12:00:00.000Z",
        "date_end_utc":"2017-04-25T14:30:00.000Z",
        "link":"https://events.yandex.ru/lib/talks/4169/",
        "description":"Об основных компонентах приложений под Android и инструментах их разработки с базовыми рекомендациями по архитектуре. А также об ошибках, к которым может привести недостаточное знание инструментов.",
        "speaker_id":5,
        "schools_id":[
            1
        ],
        "location_id":2
    },
    {
        "id":9,
        "title":"Лекция 2. Работа с сенсорным пользовательским вводом",
        "time_start":"15:00",
        "time_end":"17:30",
        "date":"27 октября 2016",
        "date_utc":"2017-04-27T00:00:00.000Z",
        "date_start_utc":"2017-04-27T12:00:00.000Z",
        "date_end_utc":"2017-04-27T14:30:00.000Z",
        "link":"https://events.yandex.ru/lib/talks/4172/",
        "description":"Об отличиях интерфейсов, рассчитанных на сенсорный ввод, про новый стандарт обработки событий ввода Pointer Events и CSS-свойства, которые полезно знать при работе над сенсорными интерфейсами. Практическая часть представлена разбором реализации жеста для скрытия бокового меню.",
        "speaker_id":3,
        "schools_id":[
            0
        ],
        "location_id":4
    },
    {
        "id":10,
        "title":"Лекция 4. Продукт и платформа",
        "time_start":"12:00",
        "time_end":"14:30",
        "date":"1 ноября 2016",
        "date_utc":"2017-04-01T00:00:00.000Z",
        "date_start_utc":"2017-04-01T09:00:00.000Z",
        "date_end_utc":"2017-04-01T11:30:00.000Z",
        "link":"https://events.yandex.ru/lib/talks/4189/",
        "description":"Как взаимодействуют бренд платформы и бренд продукта. Как не потерять себя в гайдлайнах операционной системы и на что ориентироваться при выборе между кастомными и нативными решениями. Можно ли назвать двух близнецов абсолютно идентичными? А мёртвое дерево — всё ещё «дерево»? Лекция о дизайне с лёгким уклоном во французский язык.",
        "speaker_id":6,
        "schools_id":[
            2
        ],
        "location_id":0
    },
    {
        "id":11,
        "title":"Лекция 5. Природа операционных систем",
        "time_start":"15:00",
        "time_end":"17:30",
        "date":"1 ноября 2016",
        "date_utc":"2017-04-01T00:00:00.000Z",
        "date_start_utc":"2017-04-01T12:00:00.000Z",
        "date_end_utc":"2017-04-01T14:30:00.000Z",
        "link":"https://events.yandex.ru/lib/talks/4190/",
        "description":"Основы философии Material Design, или как проектировать интерфейсы, опираясь на знания об окружающей природе.",
        "speaker_id":4,
        "schools_id":[
            2
        ],
        "location_id":6
    },
    {
        "id":12,
        "title":"Лекция 5. MyFirstApp (Часть 2)",
        "time_start":"12:00",
        "time_end":"14:30",
        "date":"2 ноября 2016",
        "date_utc":"2017-04-02T00:00:00.000Z",
        "date_start_utc":"2017-04-02T09:00:00.000Z",
        "date_end_utc":"2017-04-02T11:30:00.000Z",
        "link":"https://events.yandex.ru/lib/talks/4195/",
        "description":"Как перестать бояться пересоздания Activity, прекратить видеть в этом ужасную трудность для разработчиков и начать рассматривать действие с компонентом как полезную особенность.",
        "speaker_id":5,
        "schools_id":[
            1
        ],
        "location_id":4
    },
    {
        "id":13,
        "title":"Лекция 6. ViewGroup",
        "time_start":"16:00",
        "time_end":"18:30",
        "date":"2 ноября 2016",
        "date_utc":"2017-04-02T00:00:00.000Z",
        "date_start_utc":"2017-04-02T13:00:00.000Z",
        "date_end_utc":"2017-04-02T15:30:00.000Z",
        "link":"https://events.yandex.ru/lib/talks/4196/",
        "description":"Про классы View и ViewGroup и их ключевые компоненты — measure и layout. А также о том, как написать кастомный ViewGroup и обрабатывать касания экрана — о значении MotionEvent, пользе VelocityTracker и GestureDetector.",
        "speaker_id":7,
        "schools_id":[
            1
        ],
        "location_id":3
    },
    {
        "id":14,
        "title":"Лекция 3. Мультимедиа: возможности браузера",
        "time_start":"16:00",
        "time_end":"18:30",
        "date":"3 ноября 2016",
        "date_utc":"2017-04-03T00:00:00.000Z",
        "date_start_utc":"2017-04-03T13:00:00.000Z",
        "date_end_utc":"2017-04-03T15:30:00.000Z",
        "link":"https://events.yandex.ru/lib/talks/4197/",
        "description":"О средствах для работы с графикой и звуком в браузере: Canvas, WebGL и Web Audio API.",
        "speaker_id":8,
        "schools_id":[
            0
        ],
        "location_id":4
    },
    {
        "id":15,
        "title":"Управление проектом",
        "time_start":"17:00",
        "time_end":"19:30",
        "date":"7 ноября 2016",
        "date_utc":"2017-04-07T00:00:00.000Z",
        "date_start_utc":"2017-04-07T14:00:00.000Z",
        "date_end_utc":"2017-04-07T16:30:00.000Z",
        "link":"",
        "description":"Организация трудового процесса, управление бюджетом, подбор метода управления проектом.",
        "speaker_id":8,
        "schools_id":[
            0,
            1,
            2
        ],
        "location_id":7
    },
    {
        "id":16,
        "title":"Лекция 7. Инструмент под задачи",
        "time_start":"18:00",
        "time_end":"20:30",
        "date":"8 ноября 2016",
        "date_utc":"2017-04-08T00:00:00.000Z",
        "date_start_utc":"2017-04-08T15:00:00.000Z",
        "date_end_utc":"2017-04-08T17:30:00.000Z",
        "link":"https://events.yandex.ru/lib/talks/4268/",
        "description":"Как выбрать инструмент для создания прототипа: проверить интерфейсную гипотезу с минимальными затратами времени и усилий. Чем пользуются дизайнеры в Яндексе.",
        "speaker_id":9,
        "schools_id":[
            2
        ],
        "location_id":2
    },
    {
        "id":17,
        "title":"Лекция 6. Прототипирование как процесс",
        "time_start":"13:00",
        "time_end":"15:30",
        "date":"8 ноября 2016",
        "date_utc":"2017-04-08T00:00:00.000Z",
        "date_start_utc":"2017-04-08T10:00:00.000Z",
        "date_end_utc":"2017-04-08T12:30:00.000Z",
        "link":"https://events.yandex.ru/lib/talks/4267/",
        "description":"Как оживить идею или созданный на её основе макет и проверить их работоспособность без дорогостоящей разработки. А также об изменениях в осмыслении и подходе к реализации продуктов, когда дизайнер начинает создавать прототипы.",
        "speaker_id":9,
        "schools_id":[
            2
        ],
        "location_id":2
    },
    {
        "id":18,
        "title":"Лекция 8. RecyclerView",
        "time_start":"18:00",
        "time_end":"20:30",
        "date":"9 ноября 2016",
        "date_utc":"2017-04-09T00:00:00.000Z",
        "date_start_utc":"2017-04-09T15:00:00.000Z",
        "date_end_utc":"2017-04-09T17:30:00.000Z",
        "link":"https://events.yandex.ru/lib/talks/4223/",
        "description":"О виджете отображения списков RecyclerView — про всё, что нужно знать и о чём важно не забывать при его использовании. Также о жизненном цикле объектов паттерна ViewHolder и почему важно избегать их уничтожения.",
        "speaker_id":10,
        "schools_id":[
            1
        ],
        "location_id":2
    },
    {
        "id":19,
        "title":"Лекция 7. Background",
        "time_start":"14:00",
        "time_end":"16:30",
        "date":"9 ноября 2016",
        "date_utc":"2017-04-09T00:00:00.000Z",
        "date_start_utc":"2017-04-09T11:00:00.000Z",
        "date_end_utc":"2017-04-09T13:30:00.000Z",
        "link":"https://events.yandex.ru/lib/talks/4222/",
        "description":"Как строить взаимодействие между потоками внутри приложения и с какими проблемами мы сталкиваемся при попытках сделать отзывчивые и плавные интерфейсы. А также об основных инструментах и способах установления взаимодействия между потоками, с сильными и слабыми сторонами решений.",
        "speaker_id":11,
        "schools_id":[
            1
        ],
        "location_id":1
    },
    {
        "id":20,
        "title":"Лекция 4. Нативные приложения на веб-технологиях",
        "time_start":"12:00",
        "time_end":"14:30",
        "date":"10 ноября 2016",
        "date_utc":"2017-04-10T00:00:00.000Z",
        "date_start_utc":"2017-04-10T09:00:00.000Z",
        "date_end_utc":"2017-04-10T11:30:00.000Z",
        "link":"https://events.yandex.ru/lib/talks/4230/",
        "description":"Зачем и в каких случаях стоит использовать веб-технологии для создания нативных приложений. В лекции рассматриваются технологические варианты реализации, особое внимание уделено рекомендуемому способу с использованием Cordova и PhoneGap.",
        "speaker_id":12,
        "schools_id":[
            0
        ],
        "location_id":0
    },
    {
        "id":21,
        "title":"Дополнительная лекция. Design Everything",
        "time_start":"15:00",
        "time_end":"17:30",
        "date":"15 ноября 2016",
        "date_utc":"2017-04-15T00:00:00.000Z",
        "date_start_utc":"2017-04-15T12:00:00.000Z",
        "date_end_utc":"2017-04-15T14:30:00.000Z",
        "link":"https://events.yandex.ru/lib/talks/4269/",
        "description":"Take a look as Jonas and Krijn from the Framer Team introduce you to designing with code. The talk starts with a short overview of the tool, after which they’ll take you on a head-first dive into creating your first prototypes.\nAll in all, want to learn the basics of Framer? Watch this presentation and you should be good to go.",
        "speaker_id":13,
        "schools_id":[
            2
        ],
        "location_id":6
    },
    {
        "id":22,
        "title":"Лекция 8. Анимации",
        "time_start":"18:00",
        "time_end":"20:30",
        "date":"15 ноября 2016",
        "date_utc":"2017-04-15T00:00:00.000Z",
        "date_start_utc":"2017-04-15T15:00:00.000Z",
        "date_end_utc":"2017-04-15T17:30:00.000Z",
        "link":"https://events.yandex.ru/lib/talks/4266/",
        "description":"Из чего складывается отличная анимация: её составляющие, предназначение и функции в продукте. Про физиологию визуального восприятия, ощущения от взаимодействий и анимации в iOS и Android. И об инструментах анимирования.",
        "speaker_id":9,
        "schools_id":[
            2
        ],
        "location_id":6
    },
    {
        "id":23,
        "title":"Лекция 10. Drawing",
        "time_start":"11:00",
        "time_end":"13:30",
        "date":"16 ноября 2016",
        "date_utc":"2017-04-16T00:00:00.000Z",
        "date_start_utc":"2017-04-16T08:00:00.000Z",
        "date_end_utc":"2017-04-16T10:30:00.000Z",
        "link":"https://events.yandex.ru/lib/talks/4276/",
        "description":"О работе с графикой в Android — про классы Bitmap, Canvas, Paint, Path и Drawable. Также о том, что такое overdraw и почему это плохо.",
        "speaker_id":7,
        "schools_id":[
            1
        ],
        "location_id":7
    },
    {
        "id":24,
        "title":"Лекция 9. Service & Broadcasts",
        "time_start":"14:00",
        "time_end":"16:30",
        "date":"16 ноября 2016",
        "date_utc":"2017-04-16T00:00:00.000Z",
        "date_start_utc":"2017-04-16T11:00:00.000Z",
        "date_end_utc":"2017-04-16T3:30:00.000Z",
        "link":"https://events.yandex.ru/lib/talks/4275/",
        "description":"О двух компонентах приложений для Android — Service и BroadcastReceiver. В частности — об их роли в приложениях и о том, как с ними взаимодействовать из разных процессов.",
        "speaker_id":11,
        "schools_id":[
            1
        ],
        "location_id":2
    },
    {
        "id":25,
        "title":"Лекция 5. Клиентская оптимизация: базовые знания и лучшие практики",
        "time_start":"14:00",
        "time_end":"16:30",
        "date":"17 ноября 2016",
        "date_utc":"2017-04-17T00:00:00.000Z",
        "date_start_utc":"2017-04-17T11:00:00.000Z",
        "date_end_utc":"2017-04-17T13:30:00.000Z",
        "link":"https://events.yandex.ru/lib/talks/4292/",
        "description":"Что такое клиентская оптимизация (web performance optimization), а также о базовых техниках ускорения загрузки и лучших практиках разработки быстроработающих приложений.",
        "speaker_id":14,
        "schools_id":[
            0
        ],
        "location_id":2
    },
    {
        "id":26,
        "title":"Лекция 9. Развитие продукта",
        "time_start":"14:00",
        "time_end":"16:30",
        "date":"22 ноября 2016",
        "date_utc":"2017-04-22T00:00:00.000Z",
        "date_start_utc":"2017-04-22T11:00:00.000Z",
        "date_end_utc":"2017-04-22T13:30:00.000Z",
        "link":"https://events.yandex.ru/lib/talks/4295/",
        "description":"Про взаимоотношения пользователя и продукта: как они начинаются, как развиваются и как использование продукта входит в привычку.",
        "speaker_id":15,
        "schools_id":[
            2
        ],
        "location_id":1
    },
    {
        "id":27,
        "title":"Лекция 12. SQL&SQLite",
        "time_start":"16:00",
        "time_end":"18:30",
        "date":"23 ноября 2016",
        "date_utc":"2017-04-23T00:00:00.000Z",
        "date_start_utc":"2017-04-23T13:00:00.000Z",
        "date_end_utc":"2017-04-23T15:30:00.000Z",
        "link":"https://events.yandex.ru/lib/talks/4297/",
        "description":"Почему в Вашем приложении нужен SQLite, какие его основные функции, и как писать код в реальном приложении.",
        "speaker_id":-1,
        "schools_id":[
            1
        ],
        "location_id":1
    },
    {
        "id":28,
        "title":"Лекция 11. Content provider",
        "time_start":"19:00",
        "time_end":"22:30",
        "date":"23 ноября 2016",
        "date_utc":"2017-04-23T00:00:00.000Z",
        "date_start_utc":"2017-04-23T16:00:00.000Z",
        "date_end_utc":"2017-04-23T19:30:00.000Z",
        "link":"https://events.yandex.ru/lib/talks/4296/",
        "description":"Почему и когда нужно использовать ContentProvider, а также зачем надо всегда помнить об authority.",
        "speaker_id":16,
        "schools_id":[
            1
        ],
        "location_id":3
    },
    {
        "id":29,
        "title":"Лекция 6. Клиентская оптимизация: мобильные устройства и инструменты",
        "time_start":"15:00",
        "time_end":"17:30",
        "date":"24 ноября 2016",
        "date_utc":"2017-04-24T00:00:00.000Z",
        "date_start_utc":"2017-04-24T12:00:00.000Z",
        "date_end_utc":"2017-04-24T14:30:00.000Z",
        "link":"https://events.yandex.ru/lib/talks/4307/",
        "description":"Оптимизации для мобильных устройств нужно уделять больше внимания, чем для десктопных. Ведь надо обеспечивать работу в мобильных сетях и на более слабом «железе». Лекция о многообразии платформ, браузеров и их версий, с упоминанием основных проблем, влияющих на производительность, и способов их решения. Так же — об основных принципах измерений на клиенте, что позволяет видеть результаты оптимизации.",
        "speaker_id":17,
        "schools_id":[
            0
        ],
        "location_id":7
    },
    {
        "id":30,
        "title":"Лекция 10. Исследование интерфейсов",
        "time_start":"14:00",
        "time_end":"16:30",
        "date":"29 ноября 2016",
        "date_utc":"2017-04-29T00:00:00.000Z",
        "date_start_utc":"2017-04-29T11:00:00.000Z",
        "date_end_utc":"2017-04-29T13:30:00.000Z",
        "link":"https://events.yandex.ru/lib/talks/4319/",
        "description":"Как самостоятельно проверить свои и чужие интерфейсные решения и как узнать больше о своих пользователях. Когда такие исследования могут быть полезны, как их подготовить и провести.",
        "speaker_id":18,
        "schools_id":[
            2
        ],
        "location_id":1
    },
    {
        "id":31,
        "title":"Лекция 14. Fragments (Часть 2)",
        "time_start":"15:00",
        "time_end":"17:30",
        "date":"30 ноября 2016",
        "date_utc":"2017-04-30T00:00:00.000Z",
        "date_start_utc":"2017-04-30T12:00:00.000Z",
        "date_end_utc":"2017-04-30T14:30:00.000Z",
        "link":"https://events.yandex.ru/lib/talks/4321/",
        "description":"Во второй части лекции про фрагменты (Fragments) — о том, что собой представляет Support Library и почему её следует использовать. Также о том, что такое State loss и как его избегать. Немного об анимациях и полезных методах во Fragments API.",
        "speaker_id":19,
        "schools_id":[
            1
        ],
        "location_id":1
    },
    {
        "id":32,
        "title":"Лекция 13. Fragments (Часть 1)",
        "time_start":"12:00",
        "time_end":"14:30",
        "date":"30 ноября 2016",
        "date_utc":"2017-04-30T00:00:00.000Z",
        "date_start_utc":"2017-04-30T09:00:00.000Z",
        "date_end_utc":"2017-04-30T11:30:00.000Z",
        "link":"https://events.yandex.ru/lib/talks/4320/",
        "description":"О фрагментах (Fragments) в Android — зачем они нужны, как с ними правильно работать и взаимодействовать. Основные методы жизненного цикла. А также о главных недостатках фрагментов и о том, как с ними бороться.",
        "speaker_id":19,
        "schools_id":[
            1
        ],
        "location_id":3
    },
    {
        "id":33,
        "title":"Лекция 7. Инфраструктура веб-проектов",
        "time_start":"11:00",
        "time_end":"13:30",
        "date":"1 декабря 2016",
        "date_utc":"2017-05-01T00:00:00.000Z",
        "date_start_utc":"2017-05-01T08:00:00.000Z",
        "date_end_utc":"2017-05-01T10:30:00.000Z",
        "link":"https://events.yandex.ru/lib/talks/4323/",
        "description":"Что такое инфраструктура веб-проектов и зачем нужны дополнительные средства, не решающие бизнес-задачи напрямую. Какими средствами окружить проект, чтобы разработка оказалась удобной и быстрой, а сервис был стабильным. Лекция с ответами на эти вопросы на примере условного проекта, решениями инфраструктурных задач и чек-листом для старта.",
        "speaker_id":20,
        "schools_id":[
            0
        ],
        "location_id":5
    },
    {
        "id":34,
        "title":"Лекция 8. Инструменты разработки мобильного фронтенда",
        "time_start":"14:00",
        "time_end":"16:30",
        "date":"1 декабря 2016",
        "date_utc":"2017-05-01T00:00:00.000Z",
        "date_start_utc":"2017-05-01T11:00:00.000Z",
        "date_end_utc":"2017-05-01T13:30:00.000Z",
        "link":"https://events.yandex.ru/lib/talks/4324/",
        "description":"Как сделать процесс разработки под мобильные браузеры таким же комфортным, как под десктопные. Или об инструментах веб-разработки и о том, как использовать их под мобильные нужды.",
        "speaker_id":20,
        "schools_id":[
            0
        ],
        "location_id":7
    },
    {
        "id":35,
        "title":"Лекция 11. Работа в команде",
        "time_start":"17:00",
        "time_end":"19:30",
        "date":"6 декабря 2016",
        "date_utc":"2017-05-06T00:00:00.000Z",
        "date_start_utc":"2017-05-06T14:00:00.000Z",
        "date_end_utc":"2017-05-06T16:30:00.000Z",
        "link":"https://events.yandex.ru/lib/talks/4345/",
        "description":"Про командную работу: почему важно наладить качественное взаимодействие дизайнеров, разработчиков и менеджеров, и какие инструменты можно использовать, чтобы сделать это как можно эффективнее.",
        "speaker_id":21,
        "schools_id":[
            2
        ],
        "location_id":6
    },
    {
        "id":36,
        "title":"Лекция 15. MVP&Co",
        "time_start":"14:00",
        "time_end":"16:30",
        "date":"7 декабря 2016",
        "date_utc":"2017-05-07T00:00:00.000Z",
        "date_start_utc":"2017-05-07T11:00:00.000Z",
        "date_end_utc":"2017-05-07T13:30:00.000Z",
        "link":"https://events.yandex.ru/lib/talks/4346/",
        "description":"Лекция о важности работы над архитектурой приложений, с уклоном в особенности архитектуры Android и примерами шаблонов проектирования. Также о том, как писать собственные UX-тесты и советы по оформлению unit-тестов.",
        "speaker_id":22,
        "schools_id":[
            1
        ],
        "location_id":3
    },
    {
        "id":37,
        "title":"Дополнительная лекция. Айдентика",
        "time_start":"13:00",
        "time_end":"15:30",
        "date":"13 декабря 2016",
        "date_utc":"2017-05-13T00:00:00.000Z",
        "date_start_utc":"2017-05-13T10:00:00.000Z",
        "date_end_utc":"2017-05-13T12:30:00.000Z",
        "link":"https://events.yandex.ru/lib/talks/4349/",
        "description":"О визуальном образе проекта «Мобилизация»: через какие этапы мы прошли, чему научились и что получилось. Как отпускать концепции и находить новые.",
        "speaker_id":23,
        "schools_id":[
            2
        ],
        "location_id":7
    },
    {
        "id":38,
        "title":"Лекция 16. Debugging & Polishing",
        "time_start":"15:00",
        "time_end":"17:30",
        "date":"14 декабря 2016",
        "date_utc":"2017-05-14T00:00:00.000Z",
        "date_start_utc":"2017-05-14T12:00:00.000Z",
        "date_end_utc":"2017-05-14T14:30:00.000Z",
        "link":"https://events.yandex.ru/lib/talks/4352/",
        "description":"Большую часть времени разработчики тратят на отладку и оптимизацию программы. В лекции приведены основные инструменты поиска и отладки проблемных мест в приложениях на Android, а также самые частые проблемы и варианты их решения.",
        "speaker_id":24,
        "schools_id":[
            1
        ],
        "location_id":0
    }
];
const speakersConst = [
    {
        "id":0,
        "name":"Антон Тен",
        "about":"В Яндексе с 2014 года. Ведущий дизайнер продукта в сервисах Переводчик, Расписания и Видео.",
        "photo":"https://avatars.mds.yandex.net/get-yaevents/204268/07bb5f8ab6dc11e687ef002590c62a5c/big",
        "videos":[
            {
                "link":"https://events.yandex.ru/lib/talks/4218/",
                "title":"Переведено",
                "date":"26 ноя 2016",
                "img":"url(\"https://avatars.mds.yandex.net/get-yaevents/194464/184bb4f74a7704681de90464929522c6/320x240\")"
            },
            {
                "link":"https://events.yandex.ru/lib/talks/4159/",
                "title":"Лекция 2. Идея, исследование, концепт (Часть 2)",
                "date":"18 окт 2016",
                "img":"url(\"https://avatars.mds.yandex.net/get-yaevents/194464/69c403acb7b911e6afd30025909419be/320x240\")"
            },
            {
                "link":"https://events.yandex.ru/lib/talks/4158/",
                "title":"Лекция 1. Идея, исследование, концепт (Часть 1)",
                "date":"18 окт 2016",
                "img":"url(\"https://avatars.mds.yandex.net/get-yaevents/197753/69036160b7b911e6afd30025909419be/320x240\")"
            }
        ]
    },
    {
        "id":1,
        "name":"Эдуард Мацуков",
        "about":"Разрабатываю приложения для Android с 2010 года. В 2014 делал высоконагруженное финансовое приложение. Тогда же начал осваивать АОП, внедряя язык в продакшн. В 2015 разрабатывал инструменты для Android Studio, позволяющие использовать aspectJ в своих проектах. В Яндексе занят на проекте Авто.ру.",
        "photo":"https://avatars.mds.yandex.net/get-yaevents/198307/9d9a8672b6da11e687ef002590c62a5c/big",
        "videos":[
            {
                "link":"https://events.yandex.ru/lib/talks/4171/",
                "title":"Gradle Build Variants, или про Flavors, Build Types и Apk Splits",
                "date":"23 ноя 2016",
                "img":""
            },
            {
                "link":"https://events.yandex.ru/lib/talks/4168/",
                "title":"Лекция 3. Java Blitz (Часть 2)",
                "date":"25 окт 2016",
                "img":"url(\"https://avatars.mds.yandex.net/get-yaevents/95043/7002ea9eb7b911e6afd30025909419be/320x240\")"
            },
            {
                "link":"https://events.yandex.ru/lib/talks/4160/",
                "title":"Лекция 1. Java Blitz (Часть 1)",
                "date":"19 окт 2016",
                "img":"url(\"https://avatars.mds.yandex.net/get-yaevents/204268/6a96c2d8b7b911e6afd30025909419be/320x240\")"
            },
            {
                "link":"https://events.yandex.ru/lib/talks/3406/",
                "title":"Аспектно-ориентированное программирование под Android",
                "date":"16 мар 2016",
                "img":"url(\"https://avatars.mds.yandex.net/get-yaevents/198307/b149e472b7b811e6afd30025909419be/320x240\")"
            }
        ]
    },
    {
        "id":2,
        "name":"Дмитрий Складнов",
        "about":"Окончил факультет ИТ Московского Технического Университета. В Яндексе с 2015 года, разрабатывает приложение Auto.ru для Android.",
        "photo":"https://avatars.mds.yandex.net/get-yaevents/197753/08c605ecb6dc11e687ef002590c62a5c/big",
        "videos":[
            {
                "link":"https://events.yandex.ru/lib/talks/4161/",
                "title":"Лекция 2. Git & Workflow",
                "date":"19 окт 2016",
                "img":"url(\"https://avatars.mds.yandex.net/get-yaevents/204268/6b30d8c8b7b911e6afd30025909419be/320x240\")"
            }
        ]
    },
    {
        "id":3,
        "name":"Дмитрий Душкин",
        "about":"Кандидат технических наук, научный сотрудник ИПУ РАН с 2008 по 2013. Пришёл в Яндекс.Картинки в 2014 году, отвечал за мобильную версию и рост производительности сервиса. В 2016 перешёл в Yandex Data Factory, где разрабатывает интерфейсы и дизайн веб-приложений для B2B.",
        "photo":"https://avatars.mds.yandex.net/get-yaevents/95043/0914ac42b6dc11e687ef002590c62a5c/big",
        "videos":[
            {
                "link":"https://events.yandex.ru/lib/talks/4172/",
                "title":"Лекция 2. Работа с сенсорным пользовательским вводом",
                "date":"27 окт 2016",
                "img":"url(\"https://avatars.mds.yandex.net/get-yaevents/204268/71f8323cb7b911e6afd30025909419be/320x240\")"
            },
            {
                "link":"https://events.yandex.ru/lib/talks/4162/",
                "title":"Лекция 1. Адаптивная вёрстка",
                "date":"20 окт 2016",
                "img":"url(\"https://avatars.mds.yandex.net/get-yaevents/197753/6d8b30beb7b911e6afd30025909419be/320x240\")"
            }
        ]
    },
    {
        "id":4,
        "name":"Васюнин Николай",
        "about":"Пришёл в Яндекс в 2014 году. Дизайнер продукта в музыкальных сервисах компании, участник команды разработки Яндекс.Радио.",
        "photo":"https://avatars.mds.yandex.net/get-yaevents/194464/1c55b8d2b6dc11e687ef002590c62a5c/big",
        "videos":[
            {
                "link":"https://events.yandex.ru/lib/talks/4190/",
                "title":"Лекция 5. Природа операционных систем",
                "date":"1 ноя 2016",
                "img":"url(\"https://avatars.mds.yandex.net/get-yaevents/204268/7f381d9ab7b911e6afd30025909419be/320x240\")"
            },
            {
                "link":"https://events.yandex.ru/lib/talks/4167/",
                "title":"Лекция 3. Особенности проектирования мобильных интерфейсов",
                "date":"25 окт 2016",
                "img":"url(\"https://avatars.mds.yandex.net/get-yaevents/194464/6e904daab7b911e6afd30025909419be/320x240\")"
            }
        ]
    },
    {
        "id":5,
        "name":"Роман Григорьев",
        "about":"Окончил Самарский университет. Разрабатывает приложения для Android с 2010 года. В Яндексе — с 2012-го. Руководит разработкой мобильных клиентов Яндекс.Диска.",
        "photo":"https://avatars.mds.yandex.net/get-yaevents/198307/1ce07512b6dc11e687ef002590c62a5c/big",
        "videos":[
            {
                "link":"https://events.yandex.ru/lib/talks/4195/",
                "title":"Лекция 5. MyFirstApp (Часть 2)",
                "date":"2 ноя 2016",
                "img":"url(\"https://avatars.mds.yandex.net/get-yaevents/95043/8634aa5ab7b911e6afd30025909419be/320x240\")"
            },
            {
                "link":"https://events.yandex.ru/lib/talks/4169/",
                "title":"MyFirstApp (Часть 1)",
                "date":"25 окт 2016",
                "img":"url(\"https://avatars.mds.yandex.net/get-yaevents/204268/70b44870b7b911e6afd30025909419be/320x240\")"
            }
        ]
    },
    {
        "id":6,
        "name":"Сергей Калабин",
        "about":"Пришёл в компанию дизайнером мобильных приложений в 2013-м. Три года занимался музыкальными сервисами Яндекса, сейчас руководит дизайном турецкого направления. Считает что дизайнера должна отличать любовь к людям.",
        "photo":"https://avatars.mds.yandex.net/get-yaevents/198307/1e200dacb6dc11e687ef002590c62a5c/big",
        "videos":[
            {
                "link":"https://events.yandex.ru/lib/talks/4189/",
                "title":"Лекция 4. Продукт и платформа",
                "date":"1 ноя 2016",
                "img":"url(\"https://avatars.mds.yandex.net/get-yaevents/204268/7e98fa12b7b911e6afd30025909419be/320x240\")"
            }
        ]
    },
    {
        "id":7,
        "name":"Алексей Щербинин",
        "about":"Профессионал с глубокими познаниями в графической части Android и всего, что с ней связано. Любит нестандартные задачи и решает их в команде мобильного Яндекс Браузера.",
        "photo":"https://avatars.mds.yandex.net/get-yaevents/95043/209761c0b6dc11e687ef002590c62a5c/big",
        "videos":[
            {
                "link":"https://events.yandex.ru/lib/talks/4276/",
                "title":"Лекция 10. Drawing",
                "date":"16 ноя 2016",
                "img":"url(\"https://avatars.mds.yandex.net/get-yaevents/204268/b6ab7fa6b7b911e6afd30025909419be/320x240\")"
            },
            {
                "link":"https://events.yandex.ru/lib/talks/4196/",
                "title":"Лекция 6. ViewGroup",
                "date":"2 ноя 2016",
                "img":"url(\"https://avatars.mds.yandex.net/get-yaevents/194464/877eef4cb7b911e6afd30025909419be/320x240\")"
            }
        ]
    },
    {
        "id":8,
        "name":"Максим Васильев",
        "about":"Во фронтенд-разработке с 2007 года. До 2013-го, когда пришёл в Яндекс, работал технологом в студии Лебедева и других компаниях.",
        "photo":"https://avatars.mds.yandex.net/get-yaevents/194464/21e1dae2b6dc11e687ef002590c62a5c/big",
        "videos":[
            {
                "link":"https://events.yandex.ru/lib/talks/4545/",
                "title":"Безопасность в современной медицине",
                "date":"15 апр 2017",
                "img":""
            },
            {
                "link":"https://events.yandex.ru/lib/talks/4197/",
                "title":"Лекция 3. Мультимедиа: возможности браузера",
                "date":"3 ноя 2016",
                "img":"url(\"https://avatars.mds.yandex.net/get-yaevents/194464/89106142b7b911e6afd30025909419be/320x240\")"
            }
        ]
    },
    {
        "id":9,
        "name":"Сергей Томилов",
        "about":"Серёжа: Профессионально занимается дизайном с 2009 года. В 2010 году переключился на работу исключительно над интерфейсами, по большей части мобильными. В Яндекс пришёл в 2011 году. Участвовал в создании разных продуктов Поиска, Диска, Фоток и Музыки для всех популярных платформ.",
        "photo":"https://avatars.mds.yandex.net/get-yaevents/194464/9d003c48b6da11e687ef002590c62a5c/big",
        "videos":[
            {
                "link":"https://events.yandex.ru/lib/talks/4266/",
                "title":"Лекция 8. Анимации",
                "date":"15 ноя 2016",
                "img":"url(\"https://avatars.mds.yandex.net/get-yaevents/204268/b4558490b7b911e6afd30025909419be/320x240\")"
            },
            {
                "link":"https://events.yandex.ru/lib/talks/4268/",
                "title":"Лекция 7. Инструмент под задачи",
                "date":"8 ноя 2016",
                "img":"url(\"https://avatars.mds.yandex.net/get-yaevents/194464/b3b38118b7b911e6afd30025909419be/320x240\")"
            },
            {
                "link":"https://events.yandex.ru/lib/talks/4267/",
                "title":"Лекция 6. Прототипирование как процесс",
                "date":"8 ноя 2016",
                "img":"url(\"https://avatars.mds.yandex.net/get-yaevents/194464/b30e98a6b7b911e6afd30025909419be/320x240\")"
            },
            {
                "link":"https://events.yandex.ru/lib/talks/3527/",
                "title":"Всё переделать",
                "date":"23 апр 2016",
                "img":"url(\"https://avatars.mds.yandex.net/get-yaevents/194464/d1301b94b7b811e6afd30025909419be/320x240\")"
            },
            {
                "link":"https://events.yandex.ru/lib/talks/3404/",
                "title":"Лекция 12. Поиск идеи продукта и его места на рынке",
                "date":"26 янв 2016",
                "img":"url(\"https://avatars.mds.yandex.net/get-yaevents/194464/9c48159eb7b811e6afd30025909419be/320x240\")"
            }
        ]
    },
    {
        "id":10,
        "name":"Владимир Тагаков",
        "about":"Энтузиаст разработки под Android, в Яндексе занимается оптимизацией и разработкой мобильного приложения Карт.",
        "photo":"https://avatars.mds.yandex.net/get-yaevents/197753/24d12686b6dc11e687ef002590c62a5c/big",
        "videos":[
            {
                "link":"https://events.yandex.ru/lib/talks/4223/",
                "title":"Лекция 8. RecyclerView",
                "date":"9 ноя 2016",
                "img":"url(\"https://avatars.mds.yandex.net/get-yaevents/204268/ac2b6eceb7b911e6afd30025909419be/320x240\")"
            }
        ]
    },
    {
        "id":11,
        "name":"Алексей Макаров",
        "about":"Выпускник Московского Института Электронной Техники. Android- и Python-разработчик. В команде мобильного Яндекс.Браузера с 2015 года.",
        "photo":"https://avatars.mds.yandex.net/get-yaevents/194464/246b1f3ab6dc11e687ef002590c62a5c/big",
        "videos":[
            {
                "link":"https://events.yandex.ru/lib/talks/4275/",
                "title":"Лекция 9. Service & Broadcasts",
                "date":"16 ноя 2016",
                "img":"url(\"https://avatars.mds.yandex.net/get-yaevents/197753/b603fca4b7b911e6afd30025909419be/320x240\")"
            },
            {
                "link":"https://events.yandex.ru/lib/talks/4222/",
                "title":"Лекция 7. Background",
                "date":"9 ноя 2016",
                "img":"url(\"https://avatars.mds.yandex.net/get-yaevents/198307/a3332e2eb7b911e6afd30025909419be/320x240\")"
            }
        ]
    },
    {
        "id":12,
        "name":"Сергей Бережной",
        "about":"Веб-разработчик в Яндексе с 2005 года. Успел поработать над Поиском, Почтой, Поиском по блогам, Я.ру, Картинками, Видео. Помимо этого, активно занимается развитием внутренних инструментов для создания сайтов.",
        "photo":"https://avatars.mds.yandex.net/get-yaevents/194464/2e89984ab6d511e687ef002590c62a5c/big",
        "videos":[
            {
                "link":"https://events.yandex.ru/lib/talks/4484/",
                "title":"Bem-react-core — что нового",
                "date":"15 мар 2017",
                "img":""
            },
            {
                "link":"https://events.yandex.ru/lib/talks/4230/",
                "title":"Лекция 4. Нативные приложения на веб-технологиях",
                "date":"10 ноя 2016",
                "img":"url(\"https://avatars.mds.yandex.net/get-yaevents/204268/acee74f0b7b911e6afd30025909419be/320x240\")"
            },
            {
                "link":"https://events.yandex.ru/lib/talks/3685/",
                "title":"Что нового в bem-core@v4",
                "date":"9 июля 2016",
                "img":"url(\"https://avatars.mds.yandex.net/get-yaevents/204268/11ea1054b7b911e6afd30025909419be/320x240\")"
            },
            {
                "link":"https://events.yandex.ru/lib/talks/3519/",
                "title":"Тестирование фронтенда своими руками",
                "date":"29 апр 2016",
                "img":"url(\"https://avatars.mds.yandex.net/get-yaevents/204268/e5cc6cbab7b811e6afd30025909419be/320x240\")"
            },
            {
                "link":"https://events.yandex.ru/lib/talks/2455/",
                "title":"Frontend: State of the Web",
                "date":"30 окт 2014",
                "img":"url(\"https://static.video.yandex.ru/get/ya-events/sht93zz4g3.5541/320x240.jpg\")"
            },
            {
                "link":"https://events.yandex.ru/lib/talks/2196/",
                "title":"Планы по разработке bem-core@v3",
                "date":"6 сен 2014",
                "img":"url(\"https://static.video.yandex.ru/get/ya-events/jhmg2kfetx.5345/320x240.jpg\")"
            },
            {
                "link":"https://events.yandex.ru/lib/talks/1420/",
                "title":"Ответы на вопросы",
                "date":"29 ноя 2013",
                "img":"url(\"https://static.video.yandex.ru/get/ya-events/cjzvuptooi.5704/320x240.jpg\")"
            },
            {
                "link":"https://events.yandex.ru/lib/talks/1419/",
                "title":"bem-core v1.0.0",
                "date":"29 ноя 2013",
                "img":"url(\"https://static.video.yandex.ru/get/ya-events/fctvg1z6fi.7643/320x240.jpg\")"
            },
            {
                "link":"https://events.yandex.ru/lib/talks/1437/",
                "title":"Шаблонизаторы (templates)",
                "date":"2 ноя 2013",
                "img":"url(\"https://static.video.yandex.ru/get/ya-events/43qrsv9fz7.3913/320x240.jpg\")"
            },
            {
                "link":"https://events.yandex.ru/lib/talks/1447/",
                "title":"Парное программирование",
                "date":"2 ноя 2013",
                "img":"url(\"https://static.video.yandex.ru/get/ya-events/r7ud7igl0h.7034/320x240.jpg\")"
            },
            {
                "link":"https://events.yandex.ru/lib/talks/1352/",
                "title":"bem-core",
                "date":"2 окт 2013",
                "img":"url(\"https://static.video.yandex.ru/get/ya-events/wp1mkcsuc0.5207/320x240.jpg\")"
            },
            {
                "link":"https://events.yandex.ru/lib/talks/1108/",
                "title":"Фронтенд в Яндексе: сложные сервисы, непростые решения",
                "date":"2 окт 2013",
                "img":"url(\"https://static.video.yandex.ru/get/ya-events/ogx134kx8g.7209/320x240.jpg\")"
            },
            {
                "link":"https://events.yandex.ru/lib/talks/1591/",
                "title":"Первый BEMup — вопросы и ответы",
                "date":"2 авг 2013",
                "img":"url(\"https://static.video.yandex.ru/get/ya-events/el33khwu48.2216/320x240.jpg\")"
            },
            {
                "link":"https://events.yandex.ru/lib/talks/1590/",
                "title":"Контрибьютинг, пул-реквесты, флоу, тестирование и задачи",
                "date":"2 авг 2013",
                "img":"url(\"https://static.video.yandex.ru/get/ya-events/4yztrka7n2.7304/320x240.jpg\")"
            },
            {
                "link":"https://events.yandex.ru/lib/talks/1587/",
                "title":"bem-core, bem-bl: новости и планы",
                "date":"2 авг 2013",
                "img":"url(\"https://static.video.yandex.ru/get/ya-events/aqkp3cyp9n.7311/320x240.jpg\")"
            },
            {
                "link":"https://events.yandex.ru/lib/talks/690/",
                "title":"Экзотическая шаблонизация, или как писать HTML для блоков",
                "date":"6 апр 2013",
                "img":"url(\"https://static.video.yandex.ru/get/ya-events/3fihe196lh.7208/320x240.jpg\")"
            },
            {
                "link":"https://events.yandex.ru/lib/talks/689/",
                "title":"Клиентский JavaScript в БЭМ-терминах: от блока до библиотеки",
                "date":"6 апр 2013",
                "img":"url(\"https://static.video.yandex.ru/get/ya-events/0q9oomv5a6.7241/320x240.jpg\")"
            },
            {
                "link":"https://events.yandex.ru/lib/talks/856/",
                "title":"MIX: зачем смешивать блоки",
                "date":"6 апр 2013",
                "img":"url(\"https://static.video.yandex.ru/get/ya-events/haqxgslpvu.4011/320x240.jpg\")"
            },
            {
                "link":"https://events.yandex.ru/lib/talks/529/",
                "title":"Система ведения задач",
                "date":"15 сен 2012",
                "img":"url(\"https://static.video.yandex.ru/get/ya-events/jr1h1fzqgo.5025/320x240.jpg\")"
            },
            {
                "link":"https://events.yandex.ru/lib/talks/530/",
                "title":"Wiki",
                "date":"15 сен 2012",
                "img":"url(\"https://static.video.yandex.ru/get/ya-events/gbzafvm3tx.5015/320x240.jpg\")"
            },
            {
                "link":"https://events.yandex.ru/lib/talks/553/",
                "title":"Шаблонизаторы",
                "date":"15 сен 2012",
                "img":"url(\"https://static.video.yandex.ru/get/ya-events/r9m1mxlhjn.4817/320x240.jpg\")"
            },
            {
                "link":"https://events.yandex.ru/lib/talks/559/",
                "title":"Парное программирование",
                "date":"15 сен 2012",
                "img":"url(\"https://static.video.yandex.ru/get/ya-events/y283u1txm6.4127/320x240.jpg\")"
            },
            {
                "link":"https://events.yandex.ru/lib/talks/330/",
                "title":"Внедрение БЭМ в существующие системы",
                "date":"8 сен 2012",
                "img":"url(\"https://static.video.yandex.ru/get/ya-events/9hqb0ara2c.4607/320x240.jpg\")"
            },
            {
                "link":"https://events.yandex.ru/lib/talks/329/",
                "title":"Про шаблонизаторы вообще и BEMHTML в частности",
                "date":"8 сен 2012",
                "img":"url(\"https://static.video.yandex.ru/get/ya-events/edrym8d9qe.4125/320x240.jpg\")"
            },
            {
                "link":"https://events.yandex.ru/lib/talks/302/",
                "title":"Разные способы создания клиентских js-компонентов",
                "date":"28 июля 2012",
                "img":"url(\"https://static.video.yandex.ru/get/ya-events/aza819np1i.4614/320x240.jpg\")"
            },
            {
                "link":"https://events.yandex.ru/lib/talks/43/",
                "title":"BEMHTML. NOT yet another шаблонизатор",
                "date":"19 сен 2011",
                "img":"url(\"https://static.video.yandex.ru/get/ya-events/5vzgxjy6bt.4005/320x240.jpg\")"
            },
            {
                "link":"https://events.yandex.ru/lib/talks/33/",
                "title":"Истории про разработку сайтов",
                "date":"19 сен 2011",
                "img":"url(\"https://static.video.yandex.ru/get/ya-events/yyyjfrfep1.4015/320x240.jpg\")"
            },
            {
                "link":"https://events.yandex.ru/lib/talks/217/",
                "title":"Про БЭМ, или Как разрабатывать веб-проекты",
                "date":"2 июля 2011",
                "img":"url(\"https://static.video.yandex.ru/get/ya-events/0lfmh8ztvs.2921/320x240.jpg\")"
            }
        ]
    },
    {
        "id":13,
        "name":"Rijshouwer Krijn",
        "about":"Krijn Rijshouwer is a product designer. \n“I like to create and work on products that have a positive impact in the world. The thing that attracts me most in doing what I do at Framer, and did before at other companies, is changing the way a lot of people work, live and consume on a daily basis with just the push of a button.",
        "photo":"https://avatars.mds.yandex.net/get-yaevents/198307/447ca5b4b6dc11e687ef002590c62a5c/big",
        "videos":[
            {
                "link":"https://events.yandex.ru/lib/talks/4269/",
                "title":"Дополнительная лекция. Design Everything",
                "date":"15 ноя 2016",
                "img":"url(\"https://avatars.mds.yandex.net/get-yaevents/197753/b50acd5ab7b911e6afd30025909419be/320x240\")"
            }
        ]
    },
    {
        "id":14,
        "name":"Андрей Морозов",
        "about":"Окончил радиофизический факультет Киевского Национального Университета. Автор трёх патентных заявок. В Яндексе с 2014 года, разрабатывает интерфейсы Яндекс.Карт.",
        "photo":"https://avatars.mds.yandex.net/get-yaevents/204268/478d8b92b6dc11e687ef002590c62a5c/big",
        "videos":[
            {
                "link":"https://events.yandex.ru/lib/talks/4292/",
                "title":"Лекция 5. Клиентская оптимизация: базовые знания и лучшие практики",
                "date":"17 ноя 2016",
                "img":"url(\"https://avatars.mds.yandex.net/get-yaevents/197753/bc296358b7b911e6afd30025909419be/320x240\")"
            }
        ]
    },
    {
        "id":15,
        "name":"Андрей Гевак",
        "about":"В конце 2013 года команда сервиса Яндекс.Музыка начала разработку новой версии. Новой получилась не только «шкурка», то есть дизайн, но и сами возможности. Мы переосмыслили поведение пользователей на сайте и в приложении и иначе оценили потребность людей в новой музыке. В результате этого получилась нынешняя версия music.yandex.ru и её мобильные клиенты.\nВ докладе я расскажу о том, как шёл процесс переосмысления, почему мы сделали именно так, как сделали, и что из этого всего вышло.",
        "photo":"https://avatars.mds.yandex.net/get-yaevents/197753/6f74eb0eb6d811e687ef002590c62a5c/big",
        "videos":[
            {
                "link":"https://events.yandex.ru/lib/talks/4295/",
                "title":"Лекция 9. Развите продукта",
                "date":"22 ноя 2016",
                "img":"url(\"https://avatars.mds.yandex.net/get-yaevents/198307/bccb36f6b7b911e6afd30025909419be/320x240\")"
            },
            {
                "link":"https://events.yandex.ru/lib/talks/2490/",
                "title":"Новая Яндекс.Музыка. Зачем и как мы переделывали сервис",
                "date":"18 окт 2014",
                "img":"url(\"https://static.video.yandex.ru/get/ya-events/uaxz5bfrdu.5903/320x240.jpg\")"
            }
        ]
    },
    {
        "id":16,
        "name":"Максим Хромцов",
        "about":"Учится в магистратуре на факультете информатики и вычислительной техники Московского института радиотехники, электроники и автоматики. С 2005 года занимается разработкой приложений (игры, бизнес-приложения) для мобильных устройств на платформах J2ME, Windows Mobile, Android, Symbian, участвовал в разработке веб-приложений на Java EE. В Яндексе с 2010 года, занимается разработкой для мобильных устройств на платформах J2ME и Android.",
        "photo":"https://avatars.mds.yandex.net/get-yaevents/198307/781ede98b6d511e687ef002590c62a5c/big",
        "videos":[
            {
                "link":"https://events.yandex.ru/lib/talks/4296/",
                "title":"Лекция 11. Content provider",
                "date":"23 ноя 2016",
                "img":"url(\"https://avatars.mds.yandex.net/get-yaevents/95043/bd7e50a6b7b911e6afd30025909419be/320x240\")"
            },
            {
                "link":"https://events.yandex.ru/lib/talks/209/",
                "title":"Yandex MapKit для Android OS в примерах",
                "date":"15 окт 2011",
                "img":"url(\"https://static.video.yandex.ru/get/ya-events/qwlytnykcx.4006/320x240.jpg\")"
            }
        ]
    },
    {
        "id":17,
        "name":"Иван Карев",
        "about":"Окончил факультет ВМК (вычислительной математики и кибернетики) МГУ им. М.В. Ломоносова, занимается веб-программированием с 2007 года. Сначала делал админки для системы фильтрации трафика, затем — интерфейсы онлайн-карт для проекта Космоснимки. В Яндексе начинал с Народа и Я.ру, последние два года занимался главной страницей. В настоящее время специализируется на вопросах производительности: от серверного JS до оптимизации загрузки страницы на клиенте.",
        "photo":"https://avatars.mds.yandex.net/get-yaevents/204268/71a0f046b6d611e687ef002590c62a5c/big",
        "videos":[
            {
                "link":"https://events.yandex.ru/lib/talks/4307/",
                "title":"Лекция 6. Клиентская оптимизация: мобильные устройства и инструменты",
                "date":"24 ноя 2016",
                "img":"url(\"https://avatars.mds.yandex.net/get-yaevents/194464/c03f92f0b7b911e6afd30025909419be/320x240\")"
            },
            {
                "link":"https://events.yandex.ru/lib/talks/3934/",
                "title":"Фронтенд и аналитика",
                "date":"17 сен 2016",
                "img":"url(\"https://avatars.mds.yandex.net/get-yaevents/194464/7a38f7ceb7b911e6afd30025909419be/320x240\")"
            },
            {
                "link":"https://events.yandex.ru/lib/talks/3207/",
                "title":"Мгновенная Морда",
                "date":"17 окт 2015",
                "img":"url(\"https://avatars.mds.yandex.net/get-yaevents/204268/2c17b55eb7b811e6afd30025909419be/320x240\")"
            },
            {
                "link":"https://events.yandex.ru/lib/talks/1430/",
                "title":"Графика в вебе",
                "date":"2 ноя 2013",
                "img":"url(\"https://static.video.yandex.ru/get/ya-events/ttui457s3r.2134/320x240.jpg\")"
            },
            {
                "link":"https://events.yandex.ru/lib/talks/1435/",
                "title":"Клиентская оптимизация (performance)",
                "date":"2 ноя 2013",
                "img":"url(\"https://static.video.yandex.ru/get/ya-events/8eat69lx63.3824/320x240.jpg\")"
            },
            {
                "link":"https://events.yandex.ru/lib/talks/1115/",
                "title":"Когда загрузится страница нам нужно знать наверняка",
                "date":"2 окт 2013",
                "img":"url(\"https://static.video.yandex.ru/get/ya-events/wdv6as4qog.2218/320x240.jpg\")"
            },
            {
                "link":"https://events.yandex.ru/lib/talks/709/",
                "title":"Клиентская оптимизация",
                "date":"23 мар 2013",
                "img":"url(\"https://static.video.yandex.ru/get/ya-events/j8ors3xwud.7316/320x240.jpg\")"
            },
            {
                "link":"https://events.yandex.ru/lib/talks/663/",
                "title":"Клиентская оптимизация",
                "date":"15 сен 2012",
                "img":"url(\"https://static.video.yandex.ru/get/ya-events/0o9slrv1re.4622/320x240.jpg\")"
            }
        ]
    },
    {
        "id":18,
        "name":"Кондратьев Александр",
        "about":"Занимается исследованиями интерфейсов в Яндексе больше 5 лет. За это время поработал с десятками продуктов Поиска, Карт, Маркета, Почты и других сервисов компании. Заинтересовался интерфейсами в 2005 году, по образованию специалист по защите информации.",
        "photo":"https://avatars.mds.yandex.net/get-yaevents/198307/2e07060227e202433f0bf1d483ee0a15/big",
        "videos":[
            {
                "link":"https://events.yandex.ru/lib/talks/4319/",
                "title":"Лекция 10. Исследование интерфейсов",
                "date":"29 ноя 2016",
                "img":"url(\"https://avatars.mds.yandex.net/get-yaevents/197753/edbd22f6451420a63642e1e5449569b7/320x240\")"
            }
        ]
    },
    {
        "id":19,
        "name":"Денис Загаевский",
        "about":"Окончил факультет ВМК МГУ им. Ломоносова. Занимается разработкой приложений и игр с 2011 года, в 2012-м сконцентрировался на мобильных платформах Android и iOS. В Яндексе разрабатывает приложения для Android.",
        "photo":"https://avatars.mds.yandex.net/get-yaevents/197753/fc1d16442d6a7cbe12b154032f8a0019/big",
        "videos":[
            {
                "link":"https://events.yandex.ru/lib/talks/4321/",
                "title":"Лекция 14. Fragments (Часть 2)",
                "date":"30 ноя 2016",
                "img":"url(\"https://avatars.mds.yandex.net/get-yaevents/204268/cdcd0d6d17881b8009a7d8c3826d00a8/320x240\")"
            },
            {
                "link":"https://events.yandex.ru/lib/talks/4320/",
                "title":"Лекция 13. Fragments (Часть 1)",
                "date":"30 ноя 2016",
                "img":"url(\"https://avatars.mds.yandex.net/get-yaevents/197753/bf12ed5ab86fa0ad995643f4ba27aa8b/320x240\")"
            }
        ]
    },
    {
        "id":20,
        "name":"Прокопюк Андрей",
        "about":"В 2008 году впечатлился веб-разработкой из-за скорости воплощения идей и лёгкость их донесения до пользователей. В Яндексе с 2014 года, разрабатывает страницу поисковой выдачи. Любит сложные задачи, интересуется аналитикой, тестированием и новыми способами автоматизировать рутину.",
        "photo":"https://avatars.mds.yandex.net/get-yaevents/197753/08c0df918516725d5f8ac452fb8bf610/big",
        "videos":[
            {
                "link":"https://events.yandex.ru/lib/talks/4324/",
                "title":"Лекция 8. Инструменты разработки мобильного фронтенда",
                "date":"1 дек 2016",
                "img":"url(\"https://avatars.mds.yandex.net/get-yaevents/95043/fd150a3b7b9e9d0af1e9cedf4218eefd/320x240\")"
            },
            {
                "link":"https://events.yandex.ru/lib/talks/4323/",
                "title":"Лекция 7. Инфраструктура веб-проектов",
                "date":"1 дек 2016",
                "img":"url(\"https://avatars.mds.yandex.net/get-yaevents/204268/4f90c0a47fa7a35eab5cd144d758eda2/320x240\")"
            }
        ]
    },
    {
        "id":21,
        "name":"Юрий Подорожный",
        "about":"Руководитель службы разработки мобильных геоинформационных сервисов «Яндекса». Работает над «Яндекс.Картами» и «Яндекс.Метро». Занимается мобильной разработкой более восьми лет.",
        "photo":"https://avatars.mds.yandex.net/get-yaevents/204268/ccd5a5c8f1abbc2c6eebca87e56b5f5a/big",
        "videos":[
            {
                "link":"https://events.yandex.ru/lib/talks/4345/",
                "title":"Лекция 11. Работа в команде",
                "date":"6 дек 2016",
                "img":"url(\"https://avatars.mds.yandex.net/get-yaevents/194464/6b294885c9e7c9c6e474b45a584416e6/320x240\")"
            }
        ]
    },
    {
        "id":22,
        "name":"Дмитрий Попов",
        "about":"Окончил факультет ПМТ Вятского государственного университета в 2012 году. В Яндексе с 2015-го, занимается разработкой продуктов медийных сервисов.",
        "photo":"https://avatars.mds.yandex.net/get-yaevents/197753/61b9c073415fbaea4bce3851900c28c8/big",
        "videos":[
            {
                "link":"https://events.yandex.ru/lib/talks/4346/",
                "title":"Лекция 15. MVP&Co",
                "date":"7 дек 2016",
                "img":"url(\"https://avatars.mds.yandex.net/get-yaevents/197753/d6eb0ab9ef5957f392f40fab532f4a2a/320x240\")"
            }
        ]
    },
    {
        "id":23,
        "name":"Дмитрий Моруз",
        "about":"Работал дизайнером в студии «Трансформер», с 2014 года — дизайнер систем идентификации в Яндексе.",
        "photo":"https://avatars.mds.yandex.net/get-yaevents/204268/d6f837add3cb0a859a41959b8ae14c6a/big",
        "videos":[
            {
                "link":"https://events.yandex.ru/lib/talks/4349/",
                "title":"Дополнительная лекция. Айдентика",
                "date":"13 дек 2016",
                "img":"url(\"https://avatars.mds.yandex.net/get-yaevents/204268/8fca9139ea70b43e59ab29df1393770a/320x240\")"
            }
        ]
    },
    {
        "id":24,
        "name":"Илья Сергеев",
        "about":"Разрабатывает приложения под мобильные платформы с 2009 года. За это время принял участие более чем в 30 законченных проектах под Android, iOS, и Windows Phone. В Яндексе с 2015 года, занимается разработкой КиноПоиска под Android и iOS.",
        "photo":"https://avatars.mds.yandex.net/get-yaevents/198307/bbe3a45e099d739cfb5bba6f96ae07f8/big",
        "videos":[
            {
                "link":"https://events.yandex.ru/lib/talks/4352/",
                "title":"Лекция 16. Debugging & Polishing",
                "date":"14 дек 2016",
                "img":"url(\"https://avatars.mds.yandex.net/get-yaevents/198307/284912a510c86c0206b038586bbccf52/320x240\")"
            }
        ]
    }
];
