/**
 * buildSchoolItem - строим HTML элемента списка школ
 * @param li - элемент списка, куда добавляем HTML
 * @param name - название школы
 * @param students - количество учеников в школе
 * @param maxCapacity - максимальная вместимость самой большой аудитории
 * **/
function buildSchoolItem(li, name, students, maxCapacity) {
    li.setAttribute('class', 'school-item column');
    li.innerHTML = `<div class="modal-item__wrapper row">
                  <div class="modal-list-item__name school-item__name column j-fy-center">` + name + `</div>
                    <div class="modal-list-item__value school-item__students column">` + students + `</div>
                  <div class="button row">
                      <a class="link open-school-edit button__button button__button--theme-big">Редактировать</a>
                  </div>
                  </div>
                  <form class="modal-list__form form-edit school-item-edit modal-item__wrapper row">
                    <input class="form-item__input form-item__name school-item-edit__name school-item__name column" type="text" value="` + name + `" required/>
                    <input class="form-item__input form-item__value school-item-edit__students school-item__students column" type="number" min="10" max="` + maxCapacity + `" value="` + students + `" required/>
                    <div class="form-edit__buttons button">
                        <input class="link submit button__button button__button--theme-mega-big" type="submit" value="Сохранить">
                        <a class="link button__button button__button--theme-mega-big form__cancel" title="Отмена">Отмена</a>
                    </div>
                  </form>`;
    document.querySelector('.schools-list').appendChild(li);
}

/**
 * buildSchoolsModal - строим HTML модального окна списка школ
 * **/
function buildSchoolsModal() {
    document.querySelector('.schools-list').innerHTML = `
    <div class="modal-item__wrapper row">
        <h3 class="modal-list__form-item modal-list-item__name column">Название школы</h3>
        <h3 class="modal-list__form-item modal-list-item__value column">Кол-во студентов</h3>
    </div>
  `;
    // находим максимальную вместимость аудитории, кол-во студентов не должно быть больше максимальной вместимости на данный момент
    let maxCapacity = Math.max.apply(Math, locations.map((location) => {
        return location.capacity
    }));
    for (let school of schools) {
        let li = document.createElement('li');
        buildSchoolItem(li, school.name, school.students, maxCapacity);
        addListenersSchoolsFormEdit(li, school)
    }

    // слушаем событие на нажатие кнопки "Добавить школу"
    let formAdd = document.querySelector('.school-item-add__form');
    formAdd.querySelector('.school-item-add__students').setAttribute('max', maxCapacity);
    document.querySelector('.school-item-add').addEventListener('click', () => {
        formAdd.style.display = 'flex';
    });

    // слушаем событие на нажатие кнопки "Отмена"
    formAdd.querySelector('.form__cancel').addEventListener('click', () => {
        formAdd.style.display = 'none';
    });

    // слушаем событие на отправку формы добавления школы
    formAdd.addEventListener('submit', (event) => {
        event.preventDefault();
        let name = formAdd.querySelector('.school-item-add__name').value,
            students = formAdd.querySelector('.school-item-add__students').value;
        let li = document.createElement('li'),
            school = {
                id: schools.length,
                name: name,
                students: students
            };
        buildSchoolItem(li, name, students, maxCapacity);
        schools.push(school);
        formAdd.style.display = 'none';
        writeInStorage('schools', schools);
        setSelectOptions(schools, 'id', 'name', document.querySelector('.lecture-add__schools'), true);
        addListenersSchoolsFormEdit(li, school);
    });
}

/**
 * addListenersSchoolsFormEdit - добавляем слушателей на отправку формы редактирования школы
 * @param li - редактируемый элемент списка
 * @param school - редактируемый элемент объекта schools
 * **/
function addListenersSchoolsFormEdit(li, school) {
    // слушаем событие на нажатие кнопки "Редактировать" в модальном окне школ
    let formEdit = li.querySelector('.school-item-edit');
    li.querySelector('.open-school-edit').addEventListener('click', () => {
        li.querySelector('.modal-item__wrapper').style.display = 'none';
        formEdit.style.display = 'flex';
    });

    // слушаем событие на нажатие кнопки "Отмена"
    li.querySelector('.form__cancel').addEventListener('click', () => {
        li.querySelector('.modal-item__wrapper').style.display = 'flex';
        formEdit.style.display = 'none';
    });

    // слушаем событие на отправку формы редактирования школы
    formEdit.addEventListener('submit', (event) => {
        event.preventDefault();
        let name = li.querySelector('.school-item-edit__name').value,
            students = li.querySelector('.school-item-edit__students').value,
            dataChanged = name != school.name || students != school.students;

        // проверяем, изменились ли данные
        if (name != school.name) {
            school.name = name;
            li.querySelector('.school-item__name').innerText = name;

            for (let i = 0; i < document.getElementsByClassName('school-id-' + school.id).length; i++) {
                document.getElementsByClassName('location-id-' + location.id)[i].innerText = name;
            }
        }

        if (students != school.students) {
            school.students = students;
            li.querySelector('.school-item__students').innerText = students;
        }

        // если данные изменились обновляем объект schools и перезаписываем localStorage
        li.querySelector('.modal-item__wrapper').style.display = 'flex';
        formEdit.style.display = 'none';
        if (dataChanged) {
            writeInStorage('schools', schools);
            setSelectOptions(schools, 'id', 'name', document.querySelector('.lecture-add__schools'), true);
        }
    });
}
