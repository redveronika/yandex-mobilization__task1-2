/**
 * buildLocationItem - строим HTML элемента списка аудиторий
 * @param li - элемент списка, куда добавляем HTML
 * @param name - название аудитории
 * @param capacity - вместимость аудитории
 * **/
function buildLocationItem(li, name, capacity) {
    li.setAttribute('class', 'location-item column');
    li.innerHTML = `<div class="modal-item__wrapper row">
                  <div class="modal-list-item__name location-item__name column j-fy-center">` + name + `</div>
                  <div class="modal-list-item__value location-item__capacity column">` + capacity + `</div>
                  <div class="button row">
                      <a class="link open-location-edit button__button button__button--theme-big">Редактировать</a>
                  </div>
                  </div>
                  <form class="modal-list__form form-edit location-item-edit modal-item__wrapper row">
                    <input class="form-item__input form-item__name location-item-edit__name location-item__name column" type="text" value="` + name + `" required/>
                    <input class="form-item__input form-item__value location-item-edit__capacity location-item__capacity column" type="number" min="10" value="` + capacity + `" required/>
                    <div class="form-edit__buttons button">
                        <input class="link submit button__button button__button--theme-mega-big" type="submit" value="Сохранить">
                        <a class="link button__button button__button--theme-mega-big form__cancel" title="Отмена">Отмена</a>
                    </div>
                  </form>`;
    document.querySelector('.locations-list').appendChild(li);
}

/**
 * buildLocationsModal - строим HTML модального окна списка аудиторий
 * **/
function buildLocationsModal() {
    document.querySelector('.locations-list').innerHTML = `
      <div class="modal-item__wrapper row">
          <h3 class="modal-list__form-item modal-list-item__name column">Название аудитории</h3>
          <h3 class="modal-list__form-item modal-list-item__value column">Вместимость</h3>
      </div>
    `;
    for (let location of locations) {
        let li = document.createElement('li');
        buildLocationItem(li, location.name, location.capacity);
        addListenersLocationsFormEdit(li, location)
    }

    // слушаем событие на нажатие кнопки "Добавить аудиторию"
    let formAdd = document.querySelector('.location-item-add__form');
    document.querySelector('.location-item-add').addEventListener('click', () => {
        formAdd.style.display = 'flex';
    });

    // слушаем событие на нажатие кнопки "Отмена"
    formAdd.querySelector('.form__cancel').addEventListener('click', () => {
        formAdd.style.display = 'none';
    });

    // слушаем событие на отправку формы добавления аудитории
    formAdd.addEventListener('submit', (event) => {
        event.preventDefault();
        let name = formAdd.querySelector('.location-item-add__name').value,
            capacity = formAdd.querySelector('.location-item-add__capacity').value;
        let li = document.createElement('li'),
            location = {
                id: locations.length,
                name: name,
                capacity: capacity
            };
        buildLocationItem(li, name, capacity);
        locations.push(location);
        formAdd.style.display = 'none';
        writeInStorage('locations', locations);
        setSelectOptions(locations, 'id', 'name', document.querySelector('.lecture-add__location'), true);
        addListenersLocationsFormEdit(li, location);
    });
}

/**
 * addListenersLocationsFormEdit - добавляем слушателей на отправку формы редактирования аудитории
 * @param li - редактируемый элемент списка
 * @param location - редактируемый элемент объекта locations
 * **/
function addListenersLocationsFormEdit(li, location) {
    // слушаем событие на нажатие кнопки "Редактировать" в модальном окне списка аудиторий
    let formEdit = li.querySelector('.location-item-edit');
    li.querySelector('.open-location-edit').addEventListener('click', () => {
        li.querySelector('.modal-item__wrapper').style.display = 'none';
        formEdit.style.display = 'flex';
    });

    // слушаем событие на нажатие кнопки "Отмена"
    li.querySelector('.form__cancel').addEventListener('click', () => {
        formEdit.style.display = 'none';
        li.querySelector('.modal-item__wrapper').style.display = 'flex';
    });

    // слушаем событие на отправку формы редактирования аудитории
    formEdit.addEventListener('submit', (event) => {
        event.preventDefault();
        let name = li.querySelector('.location-item-edit__name').value,
            capacity = li.querySelector('.location-item-edit__capacity').value,
            dataChanged = name != location.name || capacity != location.capacity;

        // проверяем, изменились ли данные
        if (name != location.name) {
            location.name = name;
            li.querySelector('.location-item__name').innerText = name;

            for (let item of document.getElementsByClassName('location-id-' + location.id)) {
                item.innerText = name;
            }
        }
        if (capacity != location.capacity) {
            location.capacity = capacity;
            li.querySelector('.location-item__capacity').innerText = capacity;
        }

        li.querySelector('.modal-item__wrapper').style.display = 'flex';
        formEdit.style.display = 'none';

        // если данные изменились обновляем объект locations и перезаписываем localStorage
        if (dataChanged) {
            writeInStorage('locations', locations);
            setSelectOptions(locations, 'id', 'name', document.querySelector('.lecture-add__location'), true);
        }
    });
}
