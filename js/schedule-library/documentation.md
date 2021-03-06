# Shedule Library. Документация.

[Пример использования библиотеки](https://github.com/redveronika/yandex-mobilization__task1-2/blob/gh-pages/js/schedule-library/example.md)

## Подключение библиотеки

1. Вставьте код ниже перед закрывающим тегом `</body>` вашего проекта: 
```
<script src="./schedule-library/schedule-library.js"></script>
```
Данный путь работает при расположении папки `schedule-library` в корневой директории.

2. Создайте объект расписания в вашем основном js-файле:

```
const scheduleLibrary = new ScheduleLibrary();
```

## Основные методы


### Добавление списка лекций:

Метод создаст массив лекций для дальнейшей работы с ним. Если объект уже был записан в localStorage, то возьмет данные оттуда, в другом случае - запишет их в переданный массив в localStorage.   

```
setLecturesList(lectures)
```
lectures {object} - массив всех лекций, с параметрами:
- id{number|string} - порядковый номер записи в массиве
- title{string} - название лекции
- date_utc{string} - дата проведения лекции в формате UTC
- date_start_utc{string|object} - дата начала лекции в формате UTC
- date_end_utc{string|object} - дата конца лекции в формате UTC
- location_id{number|string} - идентификатор аудитории
- schools_id{Object} - массив номеров или строк идентификаторов школ
- speaker_id{number|string} - идентификатор лектора
- time_start{string} - время начала лекции
- time_end{string} - время окончания лекции
- description{string}(optional) - описание лекции
- date{string}(optional) - дата проведения лекции в удобном для чтения формате
- link{string}(optional) - оссылка на материалы лекции



### Добавление списка школ:

Метод создаст массив школ для дальнейшей работы с ним. Если объект уже был записан в localStorage, то возьмет данные оттуда, в другом случае - запишет их в переданный массив в localStorage.   

```
setSchoolsList(schools)
```
schools {object} - массив всех школ с параметрами:
- id{number|string} - порядковый номер записи в массиве
- name{string} - название школы
- students{number|string} - количество студентов, обучающихся в школе


### Добавление списка лекторов:

Метод создаст массив лекторов для дальнейшей работы с ним. Если объект уже был записан в localStorage, то возьмет данные оттуда, в другом случае - запишет их в переданный массив в localStorage.   

```
setSpeakersList(speakers)
```
speakers {object} - массив всех лекторов с параметрами:
- id{number|string} - порядковый номер записи в массиве
- name{string} - имя лектора
- about{number|string}(optional) - информация о лекторе
- photo{string}(optional) - ссылка на фотографию лектора
- videos{object}(optional) - массив с информацией о прочитанных лектором докладов с параметрами:
	- link{string}(optional) - ссылка на видео доклада
	- title{string}(optional) - название доклада
	- date{string}(optional) - дата проведения доклада
	- img{string}(optional) - ссылка на обложку доклада


### Добавление списка аудиторий:

Метод создаст массив аудиторий для дальнейшей работы с ним. Если объект уже был записан в localStorage, то возьмет данные оттуда, в другом случае - запишет их в переданный массив в localStorage.   

```
setLocationsList(locations)
```
locations {object} - массив всех аудиторий с параметрами:
- id{number|string} - порядковый номер записи в массиве
- name{string} - название аудитории
- capacity{number|string} - вместимость аудитории


### Фильтрация лекций по заданным параметрам:

Метод позволяет просмотреть расписание школы в заданный интервал даты, расписание аудитории в заданный интервал дат, а так же список лекций в конкретной аудитории для конкретной школы в заданный диапазон дат.
	
```
filterSchedule(filterParams)
```
filterParams {object} - объект данных для фильтрации, возможные параметры: date_start, date_end, school, location
В объект filterParams можно передать перечисленные выше параметры, ни один из параметров не является обязательным.

### Добавление данных о школе

Метод позволяет добавить новую школу в список. Перед добавлением введенные данные проходят валидацию и в случае, если название пустое, либо совпадает с уже существующим, то школа не будет добавлена.

```
addSchool(school)
```
school{object} - новый элемент массива schools, параметры: id{number}, name{string}, students{number}


### Редактирование данных о школе

Метод позволяет отредактировать данные о школе. Перед добавлением введенные данные проходят валидацию и в случае, если название пустое, либо совпадает с уже существующим, но не редактируемоей школы, то школа не будет добавлена.

```
editSchool(school, nameNew, studentsNew, dataChanged)
```
school{object} - новый элемент массива schools, параметры: id{number}, name{string}, students{number}
nameNew{string} - новое название школы
studentsNew{string} - новое количесвто студентов в школе
dataChanged{boolean} - поменялись ли данные

### Добавление данных об аудитории

Метод позволяет добавить новую аудиторию в список. Перед добавлением введенные данные проходят валидацию и в случае, если название пустое, либо совпадает с уже существующим, то аудитория не будет добавлена.

```
addLocation(location)
```
location{object} - новый элемент массива locations, параметры: id{number}, name{string}, capacity{number}


### Редактирование данных об аудитории

Метод позволяет отредактировать данные об аудитории. Перед добавлением введенные данные проходят валидацию и в случае, если название пустое, либо совпадает с уже существующим, но не редактируемоей аудитории, то аудитория не будет добавлена.

```
editLocation(location, nameNew, capacityNew, dataChanged)
```
location{object} - новый элемент массива locations, параметры: id{number}, name{string}, capacity{number}
nameNew{string} - новое название школы
capacityNew{string} - новая вместимость аудитории
dataChanged{boolean} - поменялись ли данные


### Добавление данных о лекции

Метод позволяет добавить новую лекцию в список.
Проходит проверку по следующим условиям:
* добавляемая лекция не может иметь прошедшую дату
* во время проведении лекции у указанной школы не должно быть других занятий, также учитывается, что минимальный перерыв между лекциями = 30 минут.
* во время проведении лекции в указанной аудитории не должно проводиться других лекций, также учитывается, что минимальный перерыв между лекциями в аудитории = 30 минут(чтобы не было наложений).
* во время проведении лекции у выбранного лектора не должно быть других лекций, также учитывается, что минимальный перерыв между лекциями = 30 минут.
* у выбранной аудитории вместимость должна быть больше или равной количеству всех учеников в школах, для которых будет читаться лекция.

```
addLecture(newLecture)
```
newLecture{object} - объект данных добавляемой лекции


### Редактирование данных о лекции

Метод позволяет отредактировать имеющуюся лекцию.
Проходит проверку по следующим условиям:
* редактируемая лекция не может иметь прошедшую дату
* у выбранной аудитории вместимость должна быть больше или равной количеству всех учеников в школах, для которых будет читаться лекция.
* во время проведении лекции у указанной школы не должно быть других занятий, также учитывается, что минимальный перерыв между лекциями = 30 минут.
* во время проведении лекции в указанной аудитории не должно проводиться других лекций, также учитывается, что минимальный перерыв между лекциями в аудитории = 30 минут(чтобы не было наложений).
* во время проведении лекции у выбранного лектора не должно быть других лекций, также учитывается, что минимальный перерыв между лекциями = 30 минут.

```
editLecture(newLecture)
```
newLecture{object} - объект данных редактируемой лекции

После добавления и правки объекты данных записываются в localStorage.
