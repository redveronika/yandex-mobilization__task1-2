/**
 * setSelectOptions - добавляем опции в select
 * @param items - объект данных для выбора
 * @param value - параметр items для установки value
 * @param innerText - параметр items для получения текста каждого элемента option
 * @param select - элемент select, куда добалять созданные option
 * @param clear(optional) - очищаем select, если clear определено
 * **/
function setSelectOptions(items, value, innerText, select, clear) {
    if (clear) {
        select.innerHTML = '';
    }
    for (let item of items) {
        let option = document.createElement('option');
        option.setAttribute('value', item[value]);
        option.innerText = item[innerText];
        select.appendChild(option);
    }
}

/**
 * checkTime - проверяем промежуток времени, чтобы оба промежутка не пересекались и между ними было хотя бы 30 минут перерыва
 * @param dateExist - объект уже существующего временного промежутка
 * @param dateDesire - объект желаемого временного промежутка
 * **/
function checkTime(dateExist, dateDesire) {
    dateExist.date = new Date(dateExist.date);
    dateExist.start = new Date(dateExist.start);
    dateExist.end = new Date(dateExist.end);
    let dateStart = new Date(dateDesire.date),
        d = new Date(dateDesire.date),
        dateEnd = new Date(dateDesire.date);
    dateStart.setHours(dateDesire.start.hours);
    dateStart.setMinutes(dateDesire.start.minutes);
    dateStart.setMinutes(dateStart.getMinutes() - 30);
    dateEnd.setHours(dateDesire.end.hours);
    dateEnd.setMinutes(dateDesire.end.minutes);
    dateEnd.setMinutes(dateEnd.getMinutes() + 30);

    return d.getTime() == dateExist.date.getTime() && ( (dateStart.getTime() <= dateExist.start.getTime() && dateEnd.getTime() > dateExist.start.getTime()) || (dateStart.getTime() >= dateExist.start.getTime() && dateStart.getTime() < dateExist.end.getTime()));
}
