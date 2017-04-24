/**
 * validateForm - проверяем формы добавления или редактирования лекции
 * @param form - элемент формы
 * @param lectureEdit(optional) - если данные лекции редактируются - передаем объект данных редактируемой лекции
 * **/
function validateForm(form, lectureEdit) {
    // очищаем все поля с информацией об ошибках ввода
    for (let i = 0; i < form.querySelectorAll('.error').length; i++) {
        let error = form.querySelectorAll('.error')[i];
        error.innerText = '';
        error.style.display = 'none';
    }

    if(lectureEdit) {
        return new Promise((resolve, reject) => {
            const newUpdatedLecture = getFormValues(form, lectureEdit);
            const response = scheduleLibrary.editLecture(newUpdatedLecture);
            if(response === true) {
                resolve(true);
            } else {
                showErrors(response);
                reject(false)
            }
        })
    } else {
        return new Promise((resolve, reject) => {
            const newUpdatedLecture = getFormValues(form);
            const response = scheduleLibrary.addLecture(newUpdatedLecture);
            if (response === true) {
                resolve(true);
            } else {
                showErrors(response);
                reject(false)
            }
        });
    }

    function showErrors(formErrors) {
        const date = formErrors.filter((item) => {
            return item.name === 'date'
        })[0],
            schoolBusy = formErrors.filter((item) => {
            return item.name === 'schoolBusy'
        })[0],
            locationBusy = formErrors.filter((item) => {
            return item.name === 'locationBusy'
        })[0],
            speakerBusy = formErrors.filter((item) => {
            return item.name === 'speakerBusy'
        })[0],
            locationSmall = formErrors.filter((item) => {
            return item.name === 'locationSmall'
        })[0];

        if(date && date.value) {
            form.querySelector('.lecture-add__date-wrapper').querySelector('.error').innerText = 'Невозможно создать лекцию с прошедшей датой';
        }
        if(schoolBusy && schoolBusy.value) {
            document.querySelector('.lecture-add__schools-wrapper').querySelector('.error').innerText = 'В это время у школы уже есть лекция, назначте другой время или день.';
        }
        if(locationBusy && locationBusy.value) {
            document.querySelector('.lecture-add__location-wrapper').querySelector('.error').innerText = 'В это время в данной аудитории проводится лекция, выберите другую аудиторию.';
        }
        if(speakerBusy && speakerBusy.value) {
            document.querySelector('.lecture-add__speaker-wrapper').querySelector('.error').innerText = 'В это время лектор читает другую лекцию.';
        }
        if(locationSmall && locationSmall.value) {
            document.querySelector('.lecture-add__location-wrapper').querySelector('.error').innerText = 'Вместимость аудитории меньше количества студентов во всех школах. Выберите другую аудиторию.';
        }

        // показываем все поля с информацией об ошибках ввода
        for (let i = 0; i < form.querySelectorAll('.error').length; i++) {
            let error = form.querySelectorAll('.error')[i];
            error.style.display = 'flex';
        }
    }
}
