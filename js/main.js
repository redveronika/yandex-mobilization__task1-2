Flatpickr.localize(Flatpickr.l10ns.ru);
let filter;

/**
 * buildSheduleItem - слушаем события изменения фильтров
 * **/
function addFilterListeners() {
    // фильтруем список лекции на событие изменения селектора школы
    let selectSchool = document.querySelector('.select-school');
    selectSchool.addEventListener('change', () => {
        filter = filter || {};
        filter['school'] = selectSchool.value;
        buildSheduleHtml();
    });

    // фильтруем список лекции на событие изменения селектора аудитории
    let selectLocation = document.querySelector('.select-location');
    selectLocation.addEventListener('change', () => {
        filter = filter || {};
        filter['location'] = selectLocation.value;
        buildSheduleHtml();
    });

    // фильтруем список лекции на событие изменения дат начала или конца лекций
    let date_start = document.querySelector('.date__start');
    let date_end = document.querySelector('.date__end');
    date_start.addEventListener('change', () => {
        filter = filter || {};
        filter['date_start'] = new Date(date_start.value).toJSON();
        ;
        buildSheduleHtml();
    });
    date_end.addEventListener('change', () => {
        filter = filter || {};
        filter['date_end'] = new Date(date_end.value);
        filter['date_end'].setUTCHours(23);
        filter['date_end'].setMinutes(59);
        filter['date_end'].setSeconds(59);
        filter.date_end = filter['date_end'].toJSON();
        buildSheduleHtml();
    });
}

/**
 * buildSheduleItem - создаем HTML для элемента списка лекций
 * @param lecture - элемент объекта lectures, все данные по одной лекции
 * **/
function buildSheduleItem(lecture) {
    let utcDate = new Date(lecture.date_utc),
        buttonClass = new Date(lecture.date_start_utc) > new Date() ? '' : 'show-flex',
        editClass = new Date(lecture.date_start_utc) > new Date() ? 'show-edit' : '',
        schoolsDiv = document.createElement('div'),
        schoolsIcons = document.createElement('div');
    // если у лекции нет ссылки на материалы по умолчанию сслыемся на все материалы по фронтенду
    lecture.link = lecture.link && lecture.link.length > 0 ? lecture.link : 'https://academy.yandex.ru/events/frontend/';

    // добавляем иконки и лэйблы школы к элементу списка
    schoolsIcons.appendChild(document.createElement('span'));
    schoolsDiv.setAttribute('class', 'schoolsDiv');
    for (let schoolId of lecture.schools_id) {
        let span = document.createElement('span'),
            icon = document.createElement('i'),
            classTemp = schoolsClasses.filter((item) => {
                return item.id == schoolId;
            })[0],
            className = classTemp ? classTemp.className : 'label--others';
        span.setAttribute('class', 'label ' + className + ' school-id-' + schoolId);
        let schoolName = schools.filter((item) => {
            return item.id == schoolId;
        })[0].name;
        span.innerText = schoolName;
        icon.setAttribute('class', 'dote-icon ' + className);
        icon.setAttribute('aria-label', schoolName);
        schoolsDiv.appendChild(span);
        schoolsIcons.querySelector('span').appendChild(icon);
    }

    // получаем имя лектора по id из объекта speakers, аналогично с аудиторией
    let speaker = lecture.speaker_id !== -1 ? speakers.filter((item) => {
            return item.id == lecture.speaker_id;
        })[0] : {name: '', photo: ''},
        location = locations.filter((item) => {
            return item.id == lecture.location_id;
        })[0].name,
        li = document.createElement('li');
    li.setAttribute('class', 'schedule-item row');
    li.id = 'lecture-id-' + lecture.id;

    // подставляем данные в шаблон
    li.innerHTML = `<div class="schedule-item__content schedule-item__drop-down">
              <time datetime=` + utcDate.getFullYear() + '-' + ('0' + (utcDate.getMonth() + 1)).slice(-2) + '-' + ('0' + utcDate.getDate()).slice(-2) + ` class="schedule__date text column">
                  <h3 class="row">` + utcDate.getDate() + ` ` + monthNames[utcDate.getMonth()] + `</h3>
                  <h5 class="row">` + lecture.time_start + ` - ` + lecture.time_end + `</h5>
              </time>
              <div class="schedule-description column">
                  <div class="schedule__lecture row">
                      <a class="schedule__lecture-title link row">
                      ` + schoolsIcons.innerHTML + `
                      <h2>` + lecture.title + `</h2></a>
                      <div class="schedule-past__button ` + buttonClass + ` button column">
                          <a href="` + lecture.link + `" class="button__button button__button--theme-normall">Смотреть</a>
                      </div>
                      <a class="link edit-button ` + editClass + `" lecture-id='` + lecture.id + `'><i class="edit-icon"></i></a>
                  </div>
                  <div class="schedule__details row">
                      <a class="schedule__close" title="Свернуть">
                      <i class="close-icon link"></i></a>
                      <a href="https://yandex.ru/company/contacts/moscow/" class="schedule__location link">
                          <i class="schedule__location-icon location-icon" aria-hidden="true"></i>
                          ` + location + `
                      </a>
                      <div class="schedule__lecture-info row">
                          <div class="schedule__lecture-description column">
                              <div class="schedule__lecture-description-text row">
                                  ` + lecture.description + `
                              </div>
                              <div class="schedule__school row">
                              ` + schoolsDiv.innerHTML + `
                              </div>
                              <div class="schedule-description__button button row ` + buttonClass + `">
                                  <a href="` + lecture.link + `" class="button__button button__button--theme-big">Смотреть</a>
                              </div>
                          </div>
                          <a class="schedule__speaker link column">
                              <div class="speaker__photo">
                                  <img class="speaker__image" src="` + speaker.photo + `" alt="Так выглядит лектор"/>
                                  <span class="hover__block">
                                      Посмотреть профиль
                                  </span>
                              </div>
                              <h4 class="speaker__name">` + speaker.name + `</h4></a>
                          </div>
                      </div>
                  </div>
              </div>
          </div>`;
    return li;
}

/**
 * buildSheduleHtml - строим списки лекций
 * **/
function buildSheduleHtml() {
    // создаем новый отфильтрованный объект лекций
    let filterLectures = lectures;
    if (filter && (filter.date_start || filter.date_end)) {
        filter.date_start = filter.date_start || lectures[0].date_start_utc;
        filter.date_end = filter.date_end || lectures[lectures.length - 1].date_end_utc;

        filterLectures = filterLectures.filter((item) => {
            if (item.date_start_utc >= filter.date_start && item.date_end_utc <= filter.date_end) {
                return item;
            }
        });
    }
    if (filter && filter.school && filter.school != 'all') {
        filterLectures = filterLectures.filter((item) => {
            if (item.schools_id.includes(Number(filter.school))) {
                return item;
            }
        });
    }
    if (filter && filter.location && filter.location != 'all') {
        filterLectures = filterLectures.filter((item) => {
            return item.location_id == filter.location;
        });
    }

    // сортируем объект лекций по дате
    filterLectures.sort((a, b) => {
        return new Date(a.date_start_utc) - new Date(b.date_start_utc);
    });

    // подставляем данные лекций в HTML
    document.querySelector('.future-lectures').innerHTML = '';
    let pastLecturesWrapper = document.querySelector('.past-lectures__wrapper'),
        pastLectures = document.createElement('ul');
    pastLecturesWrapper.innerHTML = '';

    for (let lecture of filterLectures) {
        let li = buildSheduleItem(lecture);
        // проверяем прошла лекция или нет, в зависимости от этого, добавляем лекцию в список future или past
        if (new Date(lecture.date_start_utc) >= new Date()) {
            document.querySelector('.future-lectures').appendChild(li);
        } else {
            if (pastLectures.innerHTML.length == 0) {
                pastLecturesWrapper.innerHTML = '<h2 class="schedule-past-items__title">Прошедшие лекции</h2>';
                pastLectures.className = 'past-lectures__list';
                pastLecturesWrapper.appendChild(pastLectures);
            }
            pastLectures.appendChild(li);
        }
    }
    // сортируем прошедшие лекции в обратно порядке: от самой свежей к самой старой
    // if(pastLectures && pastLectures.innerHTML.length > 0) {
    //     // let old = pastLecturesBlock.querySelectorAll('li'), new = []
    //     // for(let t of old) {
    //     //     new.unshift(t)
    //     // }
    //     // pastLecturesBlock.innerHTML = '<h2 class="schedule-past-items__title">Прошедшие лекции</h2>';
    //     // for(let li of new){
    //     //     pastLecturesBlock.appendChild(li);
    //     // }
    // }
    addSheduleListeners();
}

/**
 * buildSheduleHtml - слушаем события в основном шаблоне
 * **/
function addSheduleListeners() {
    // добавляем событие на клик заголовка лекции, чтобы при клике показывался детальный режим
    let lastIndex;
    let lectureTitles = document.querySelectorAll('.schedule__lecture-title');
    for (let i = 0; i < lectureTitles.length; i++) {
        let title = document.querySelectorAll('.schedule__lecture-title')[i];
        title.addEventListener('click', (event) => {
            event.preventDefault();
            if (lastIndex != undefined && lastIndex !== i) {
                let oldItem = document.querySelectorAll('.schedule-item__drop-down')[lastIndex];
                if (oldItem.className.includes('opened')) {
                    oldItem.className = oldItem.className.replace('opened', '');
                }
            }
            lastIndex = i;

            let item = document.querySelectorAll('.schedule-item__drop-down')[i];
            if (item.className.includes('opened')) {
                item.className = item.className.replace('opened', '');
            } else {
                item.className += ' opened';
            }
        });
    }
    // добавляем событие на клик для закрытия детального просмотра каждой лекции
    for (let i = 0; i < document.querySelectorAll('.schedule__close').length; i++) {
        document.querySelectorAll('.schedule__close')[i].addEventListener('click', () => {
            let item = document.querySelectorAll('.schedule-item__drop-down')[i];
            if (item.className.includes('opened')) {
                item.className = item.className.replace('opened', '');
            }
        });
    }
    // открываем модальное окно с информацией о лекторе и подставляем данные
    for (let i = 0; i < document.querySelectorAll('.schedule__speaker').length; i++) {
        let speakerLink = document.querySelectorAll('.schedule__speaker')[i];
        speakerLink.addEventListener('click', () => {
            let speaker = speakers.filter((item) => {
                return item.name == speakerLink.querySelector('.speaker__name').innerText;
            })[0];
            document.querySelector('.modal__speaker-name').innerText = speaker.name;
            document.querySelector('.speaker__about-text').innerText = speaker.about;
            document.querySelector('.modal__speaker-image').src = speaker.photo;
            document.querySelector('.modal__speaker-image').alt = 'Лектор: ' + speaker.name;
            document.querySelector('.lectures-row').innerHTML = '';
            for (let video of speaker.videos) {
                let div = document.createElement('div');
                div.setAttribute('class', 'lecture__preview');
                div.style.backgroundImage = video.img;
                div.innerHTML = `
                    <a href="` + video.link + `" class="lecture__preview-hover link hover__block show-flex j-fy-center column">
                        <div class="text__wrapper">
                            <p class="video-title">` + video.title + `</p>
                            <p>` + video.date + `</p>
                        </div>
                    </a>`;
                document.querySelector('.lectures-row').appendChild(div);
            }

            document.querySelector('.modal__speaker-image').src = speaker.photo;
            document.querySelector('.modal-speaker').style.display = 'flex';
        });
    }

    // события для закрытия каждого модального окна
    for (let i = 0; i < document.querySelectorAll('.modal').length; i++) {
        let modal = document.querySelectorAll('.modal')[i];
        //закрыть модальное окно на крестик
        modal.querySelector('.modal__close').addEventListener('click', () => {
            modal.style.display = 'none';
        });

        //закрыть модальное окно на клик вне
        modal.addEventListener('click', (event) => {
            if (event.target.className.includes('modal-close')) {
                modal.style.display = 'none';
            }
        });
    }

    // открытие модального окна списка школ
    document.querySelector('.open-schools-modal').addEventListener('click', () => {
        document.querySelector('.modal-schools').style.display = 'flex';
    });

    // открытие модального окна списка аудиторий
    document.querySelector('.open-locations-modal').addEventListener('click', () => {
        document.querySelector('.modal-locations').style.display = 'flex';
    });

    // открытие модального окна добавления лекции
    document.querySelector('.open-lecture-add').addEventListener('click', () => {
        flatpickr(".lecture-add__date");
        document.querySelector('.lecture-form').id = 'lecture-add__form';
        lectureAddForm();
        document.querySelector('.lecture-add').style.display = 'flex';
    });

    // открытие модального окна добавления лекции для редактирования
    for (let editButton of document.querySelectorAll('.edit-button')) {
        editButton.addEventListener('click', () => {
            document.querySelector('.lecture-form').id = 'lecture-edit__form';
            lectureEditForm(editButton.getAttribute('lecture-id'));
            document.querySelector('.lecture-add').style.display = 'flex';
        });
    }

    // закрытие модального окна добавления/редактирования лекций
    document.querySelector('.lecture-add-form__cancel').addEventListener('click', () => {
        document.querySelector('.lecture-add').style.display = 'none';
    });
}


buildSheduleHtml();
addFilterListeners();
setSelectOptions(schools, 'id', 'name', document.querySelector('.select-school'));
setSelectOptions(locations, 'id', 'name', document.querySelector('.select-location'));
setSelectOptions(locations, 'id', 'name', document.querySelector('.lecture-add__location'));
setSelectOptions(speakers, 'id', 'name', document.querySelector('.lecture-add__speaker'));
setSelectOptions(schools, 'id', 'name', document.querySelector('.lecture-add__schools'));
buildSchoolsModal();
buildLocationsModal();
flatpickr('.date__start');
flatpickr('.date__end');
