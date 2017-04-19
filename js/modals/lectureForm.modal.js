/**
 * setFormValues - устанавливаем значения в форму добавления или редактирования
 * @param form - элемент формы, куда добавляем данные
 * @param lectureEdit(optional) - объект редактируемой лекции
 * **/
function setFormValues(form, lectureEdit) {
    for (let error of form.querySelectorAll('.error')) {
        error.innerText = '';
        error.style.display = 'none';
    }
    form.querySelector('.lecture-add__title').value = lectureEdit ? lectureEdit.title : '';
    form.querySelector('.lecture-add__description').value = lectureEdit ? lectureEdit.description : '';
    form.querySelector('.lecture-add__location').value = lectureEdit ? lectureEdit.location_id : '';
    form.querySelector('.lecture-add__speaker').value = lectureEdit ? lectureEdit.speaker_id : '';
    form.querySelector('.lecture-add__date').value = lectureEdit ? lectureEdit.date_utc : '';
    form.querySelector('.lecture-add__time-start-hours').value = lectureEdit ? lectureEdit.time_start.split(':')[0] : '';
    form.querySelector('.lecture-add__time-start-minutes').value = lectureEdit ? lectureEdit.time_start.split(':')[1] : '';
    form.querySelector('.lecture-add__time-end-hours').value = lectureEdit ? lectureEdit.time_end.split(':')[0] : '';
    form.querySelector('.lecture-add__time-end-minutes').value = lectureEdit ? lectureEdit.time_end.split(':')[1] : '';

    for (let option of form.querySelectorAll('.lecture-add__schools option')) {
        option.selected = lectureEdit ? lectureEdit.schools_id.includes(Number(option.value)) : false;
    }
}

/**
 * getFormValues - получаем значения из формы добавления или редактирования
 * @param form - элемент формы, куда добавляем данные
 * @param lecture(optional) - объект редактируемой лекции
 * **/
function getFormValues(form, lecture) {
    lecture = lecture || {};
    lecture.id = lecture && lecture.id ? lecture.id : lectures.length - 1;
    lecture.title = form.querySelector('.lecture-add__title').value;
    lecture.description = form.querySelector('.lecture-add__description').value;
    lecture.location_id = form.querySelector('.lecture-add__location').value;
    lecture.speaker_id = form.querySelector('.lecture-add__speaker').value;
    let date = new Date((new Date(form.querySelector('.lecture-add__date').value)).setHours(0));
    lecture.date_utc = date;
    date.setHours(form.querySelector('.lecture-add__time-start-hours').value);
    date.setMinutes(form.querySelector('.lecture-add__time-start-minutes').value);
    lecture.date_start_utc = new Date(date);
    date.setHours(form.querySelector('.lecture-add__time-end-hours').value);
    date.setMinutes(form.querySelector('.lecture-add__time-end-minutes').value);
    lecture.date_end_utc = new Date(date);
    lecture.time_start = form.querySelector('.lecture-add__time-start-hours').value + ':' + form.querySelector('.lecture-add__time-start-minutes').value;
    lecture.time_end = form.querySelector('.lecture-add__time-end-hours').value + ':' + form.querySelector('.lecture-add__time-end-minutes').value;
    lecture.date_start_utc = (new Date(lecture.date_utc)).setHours(form.querySelector('.lecture-add__time-start-hours').value);
    lecture.schools_id = [];
    for (let option of form.querySelectorAll('.lecture-add__schools option')) {
        if (option.selected) {
            lecture.schools_id.push(Number(option.value));
        }
    }
    return lecture;
}

/**
 * lectureAddForm - устанавливаем значения в форму добавления, вешаем слушателя на событие отправки формы
 * **/
function lectureAddForm() {
    let formAddLecture = document.getElementById('lecture-add__form');
    setFormValues(formAddLecture);
    formAddLecture.addEventListener('submit', (event) => {
        event.preventDefault();
        validateForm(formAddLecture);
    });
}

/**
 * lectureEditForm - устанавливаем значения в форму редактирования, вешаем слушателя на событие отправки формы
 * @param lectureId(optional) - объект редактируемой лекции
 * **/
function lectureEditForm(lectureId) {
    const lectureEdit = lectures.filter((item) => {
        return item.id == lectureId;
    })[0];
    let formEditLecture = document.getElementById('lecture-edit__form');
    setFormValues(formEditLecture, lectureEdit);
    flatpickr('.lecture-add__date', {
        'defaultDate': new Date(lectureEdit.date_utc)
    })
    formEditLecture.addEventListener('submit', (event) => {
        event.preventDefault();
        validateForm(formEditLecture, lectureEdit);
    });
}
