/**
 * validateForm - проверяем формы добавления или редактирования лекции
 * @param form - элемент формы
 * @param lectureEdit(optional) - если данные лекции редактируются - передаем объект данных редактируемой лекции
 * **/
function validateForm(form, lectureEdit) {
    // очищаем все поля с информацией об ошибках ввода
    for (let error of form.querySelectorAll('.error')) {
        error.innerText = '';
        error.style.display = 'none';
    }
    let formValid = true,
        selectSchools = form.querySelectorAll('.lecture-add__schools option'),
        date = document.querySelector('.lecture-add__date').value,
        d = new Date(date),
        startTimeHours = document.querySelector('.lecture-add__time-start-hours').value,
        startTimeMinutes = document.querySelector('.lecture-add__time-start-minutes').value,
        location = form.querySelector('.lecture-add__location').value,
        speaker = form.querySelector('.lecture-add__speaker').value,
        studentsCount = 0;
    d.setHours(startTimeHours);
    d.setMinutes(startTimeMinutes);

    // проверяем, что введенная дата не устарела
    if (d <= (new Date()).getTime()) {
        console.log('last date')
        form.querySelector('.lecture-add__date-wrapper').querySelector('.error').innerText = 'Невозможно создать лекцию с прошедшей датой';
        formValid = false;
    }

    for (let school of selectSchools) {
        let date = new Date(document.querySelector('.lecture-add__date').value);
        if (school.selected) {
            studentsCount += schools.filter((item) => {
                return item.id == school.value;
            })[0].students;
            for (let lecture of lectures) {
                let dateExist = {
                        date: lecture.date_utc,
                        start: lecture.date_start_utc,
                        end: lecture.date_end_utc
                    },
                    dateDesire = {
                        date: date,
                        start: {
                            hours: document.querySelector('.lecture-add__time-start-hours').value,
                            minutes: document.querySelector('.lecture-add__time-start-minutes').value
                        },
                        end: {
                            hours: document.querySelector('.lecture-add__time-end-hours').value,
                            minutes: document.querySelector('.lecture-add__time-end-minutes').value
                        }
                    };

                // проверяем, что лекция не редактируется, либо редактируемая лекция не является текущей в объекте
                if (!lectureEdit || (lectureEdit && lectureEdit.id != lecture.id)) {

                    // проверяем, что у введеной школы нет других лекций в данное время
                    if (lecture.schools_id.includes(Number(school.value)) && checkTime(dateExist, dateDesire)) {
                        console.log('school buzy in this time')
                        let error = 'В это время у школы уже есть лекция, назначте другой время или день.';
                        let selectSchoolError = document.querySelector('.lecture-add__schools-wrapper').querySelector('.error');
                        selectSchoolError.innerText = error;
                        formValid = false;
                    }
                    // проверяем, что в указанной аудитории нет других лекций в данное время
                    if (lecture.location_id == location && checkTime(dateExist, dateDesire)) {
                        console.log('location buzy in this time');
                        let error = 'В это время в данной аудитории проводится лекция, выберите другую аудиторию.';
                        let selectLocationError = document.querySelector('.lecture-add__location-wrapper').querySelector('.error');
                        selectLocationError.innerText = error;
                        formValid = false;
                    }
                    // проверяем, что у выбранного лектора нет других лекций в данное время
                    if (lecture.speaker_id == speaker && checkTime(dateExist, dateDesire)) {
                        console.log('speaker buzy in this time');
                        let error = 'В это время лектор читает другую лекцию.';
                        let selectSpeakerError = document.querySelector('.lecture-add__speaker-wrapper').querySelector('.error');
                        selectSpeakerError.innerText = error;
                        formValid = false;
                    }
                }
            }
        }
    }
    // проверяем, что вместимость выбранной аудитории больше, чем количество учеников в указанных школах
    let locationCapacity = locations.filter((item) => {
        return item.id == location;
    })[0].capacity;
    if (locationCapacity < studentsCount) {
        console.log('location small :(');
        let error = 'Вместимость аудитории меньше количества студентов во всех школах. Выберите другую аудиторию.';
        let selectLocationError = document.querySelector('.lecture-add__location-wrapper').querySelector('.error');
        selectLocationError.innerText = error;
        formValid = false;
    }

    // показываем все поля с информацией об ошибках ввода
    for (let error of form.querySelectorAll('.error')) {
        error.style.display = 'flex';
    }

    // если форма валидна, то получаем данные с полей и добаляем в объект лекций, либо изменяем имеющуюся запись, строим заново HTML списка лекций
    if (formValid) {
        let newUpdatedLecture = getFormValues(form, lectureEdit);
        console.log(newUpdatedLecture)
        if (!lectureEdit) {
            lectures.push(newUpdatedLecture);
        }
        document.querySelector('.lecture-add').style.display = 'none';
        writeInStorage('lectures', lectures);
        buildSheduleHtml();
    }
}
