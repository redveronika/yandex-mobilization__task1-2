class ScheduleLibrary {

    constructor() {
        this.lectures = [];
        this.schools = [];
        this.speakers = [];
        this.locations = [];
    }

    /**
     * getLecturesList - создаем массив лекций
     * @param lectures {object} - массив всех лекций
     * **/
    setLecturesList(lectures) {
        this.lectures = this.checkStorage('lectures', lectures);
    }

    /**
     * getSchoolsList - создаем массив школ
     * @param schools {object} - массив всех школ
     * **/
    setSchoolsList(schools) {
        this.schools = this.checkStorage('schools', schools);
    }

    /**
     * getSpeakersList - создаем массив лекторов
     * @param speakers {object} - массив всех лекторов
     * **/
    setSpeakersList(speakers) {
        this.speakers = this.checkStorage('speakers', speakers);
    }

    /**
     * getLocationsList - создаем массив аудиторий
     * @param locations {object} - массив всех аудиторий
     * **/
    setLocationsList(locations) {
        this.locations = this.checkStorage('locations', locations);
    }

    /**
     * checkStorage - проверяем localStorage по заданным параметрам, если данные есть - возвращаем их, в другом случае - записываем их
     * @param name - название ключа
     * @param value - значение ключа
     * **/
    checkStorage(name, value) {
        try {
            if(localStorage.getItem(name)) {
                return JSON.parse(localStorage.getItem(name));
            } else {
                localStorage.setItem(name, JSON.stringify(value));
                return value;
            }
        } catch(error) {
            console.error('Could not write to localStorage', error);
            return value;
        }
    }

    /**
     * writeInStorage - записываем данные в localStorage по заданным параметрам
     * @param name - название ключа
     * @param value - значение ключа
     * **/
    writeInStorage(name, value) {
        try {
            localStorage.setItem(name, JSON.stringify(value));
        } catch(error) {
            console.error('Could not write to localStorage', error);
        }
    }

    /**
     * setSelectOptions - добавляем опции в select
     * @param items - объект данных для выбора
     * @param value - параметр items для установки value
     * @param innerText - параметр items для получения текста каждого элемента option
     * @param select - элемент select, куда добалять созданные option
     * @param clear(optional) - очищаем select, если clear определено
     * **/
    setSelectOptions(items, value, innerText, select, clear) {
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
     * filterSchedule - Фильтруем лекции по заданным параметрам
     * @param filterParams {object} - объект данных для фильтрации, возможные параметры: date_start, date_end, school, location
     * **/
    filterSchedule(filterParams) {
        let filterLectures = this.lectures;
        if (filterParams && (filterParams.date_start || filterParams.date_end)) {
            filterParams.date_start = filterParams.date_start || this.lectures[0].date_start_utc;
            filterParams.date_end = filterParams.date_end || this.lectures[this.lectures.length - 1].date_end_utc;

            filterLectures = filterLectures.filter((item) => {
                if (item.date_start_utc >= filterParams.date_start && item.date_end_utc <= filterParams.date_end) {
                    return item;
                }
            });
        }
        if (filterParams && filterParams.school && filterParams.school != 'all') {
            filterLectures = filterLectures.filter((item) => {
                if (item.schools_id.includes(Number(filterParams.school))) {
                    return item;
                }
            });
        }
        if (filterParams && filterParams.location && filterParams.location != 'all') {
            filterLectures = filterLectures.filter((item) => {
                return item.location_id == filterParams.location;
            });
        }

        // сортируем объект лекций по дате
        filterLectures.sort((a, b) => {
            return new Date(a.date_start_utc) - new Date(b.date_start_utc);
        });
        return filterLectures;
    }


    /**
     * validateLocation - валидация новой аудитории
     * @param location{object} - новый или редактируемый элемент массива locations, параметры: id{number}, name{string}, capacity{number}
     * **/
    validateLocation(location) {
        if(location.name && typeof location.name === 'string' && location.name.length > 0) {
           const nameExist = this.locations.some((item) => {
               // проверяем, что это не редактируемая запись
               if(item.id !== location.id){
                   return item.name == location.name;
               }
           });
            return !nameExist;
        } else {
            console.error('Wrong location name');
            return false;
        }
    }

    /**
     * addLocation - добавляем новую аудиторию
     * @param location{object} - новый элемент массива locations, параметры: id{number}, name{string}, capacity{number}
     * **/
    addLocation(location) {
        if(this.validateLocation(location)) {
            this.locations.push(location);
            this.writeInStorage('locations', this.locations);
            return true;
        } else {
            return false;
        }
    }

    /**
     * editLocation - редактируем аудиторию
     * @param location{object} - новый элемент массива locations, параметры: id{number}, name{string}, capacity{number}
     * @param nameNew{string} - новое название аудитории
     * @param capacityNew{string} - новая вместимость аудитории
     * @param dataChanged{boolean} - поменялись ли данные
     * **/
    editLocation(location, nameNew, capacityNew, dataChanged) {
        if(dataChanged) {
            // проверяем, изменились ли данные
            if (nameNew !== location.name) {
                location.name = nameNew;
            }
            if (capacityNew !== location.capacity) {
                location.capacity = capacityNew;
            }
            if(this.validateLocation(location)) {
                this.writeInStorage('locations', this.locations);
                return true;
            } else {
                return false;
            }
        } else {
            return true;
        }
    }


    /**
     * validateSchool - валидация школы
     * @param school{object} - новый или редактируемый элемент массива schools, параметры: id{number}, name{string}, students{number}
     * **/
    validateSchool(school) {
        if(school.name && typeof school.name === 'string' && school.name.length > 0) {
           const nameExist = this.schools.some((item) => {
               // проверяем, что это не редактируемая запись
               if(item.id !== school.id){
                   return item.name == school.name;
               }
           });
            return !nameExist;
        } else {
            console.error('Wrong school name');
            return false;
        }
    }

    /**
     * addSchool- добавляем новую школу
     * @param school{object} - новый элемент массива schools, параметры: id{number}, name{string}, students{number}
     * **/
    addSchool(school) {
        if(this.validateSchool(school)) {
            this.schools.push(school);
            this.writeInStorage('schools', this.schools);
            return true;
        } else {
            return false;
        }
    }

    /**
     * editSchool - редактируем школу
     * @param school{object} - новый элемент массива schools, параметры: id{number}, name{string}, students{number}
     * @param nameNew{string} - новое название школы
     * @param studentsNew{string} - новое количесвто студентов в школе
     * @param dataChanged{boolean} - поменялись ли данные
     * **/
    editSchool(school, nameNew, studentsNew, dataChanged) {
        if(dataChanged) {
            // проверяем, изменились ли данные
            if (nameNew !== school.name) {
                school.name = nameNew;
            }
            if (studentsNew !== school.students) {
                school.students = studentsNew;
            }
            if(this.validateSchool(school)) {
                return true;
            } else {
                return false;
            }
        } else {
            return true;
        }
    }

    /**
     * checkTime - проверяем промежуток времени, чтобы оба промежутка не пересекались и между ними было хотя бы 30 минут перерыва
     * @param dateExist - объект уже существующего временного промежутка
     * @param dateDesire - объект желаемого временного промежутка
     * **/
    checkTime(dateExist, dateDesire) {
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

    /**
     * validateLecture - проверяем формы добавления или редактирования лекции
     * @param inputDate - введенная дата проведения лекции
     * @param dateDesire - желаемые дата и время проведения лекции
     * @param selectedSchools - выбранные школы
     * @param inputLocation - выбранная аудитория
     * @param inputSpeaker - выбранный лектор
     * @param lectureEdit(optional) - если данные лекции редактируются - передаем объект данных редактируемой лекции
     * **/
    validateLecture(newLecture) {
        let formErrors = [],
            studentsCount = 0,
            inputDate = new Date(newLecture.date_utc),
            dateDesire = {
                date: new Date(newLecture.date_utc),
                start: {
                    hours: newLecture.time_start.split(':')[0],
                    minutes: newLecture.time_start.split(':')[1]
                },
                end: {
                    hours: newLecture.time_end.split(':')[0],
                    minutes: newLecture.time_end.split(':')[1]
                }
            };

        inputDate.setHours(dateDesire.start.hours);
        inputDate.setMinutes(dateDesire.start.minutes);

        // проверяем, что введенная дата не устарела
        if (inputDate <= (new Date()).getTime()) {
            formErrors.push({
                name: 'date',
                value: true
            });
        }

        for (let school of newLecture.schools_id) {
            studentsCount += this.schools.filter((item) => {
                return item.id == school;
            })[0].students;
            for (let lecture of this.lectures) {
                let dateExist = {
                        date: lecture.date_utc,
                        start: lecture.date_start_utc,
                        end: lecture.date_end_utc
                    };
                // проверяем, что редактируемая лекция не является текущей в объекте
                if (newLecture.id != lecture.id) {
                    // проверяем, что у введеной школы нет других лекций в данное время
                    if (lecture.schools_id.includes(school) && this.checkTime(dateExist, dateDesire)) {
                        formErrors.push({
                            name: 'schoolBusy',
                            value: true
                        });
                    }
                    // проверяем, что в указанной аудитории нет других лекций в данное время
                    if (lecture.location_id == newLecture.location_id && this.checkTime(dateExist, dateDesire)) {
                        formErrors.push({
                            name: 'locationBusy',
                            value: true
                        });
                    }
                    // проверяем, что у выбранного лектора нет других лекций в данное время
                    if (lecture.speaker_id == newLecture.speaker_id && this.checkTime(dateExist, dateDesire)) {
                        formErrors.push({
                            name: 'speakerBusy',
                            value: true
                        });
                    }
                }
            }
        }
        // проверяем, что вместимость выбранной аудитории больше, чем количество учеников в указанных школах
        let locationCapacity = this.locations.filter((item) => {
            return item.id == newLecture.location_id;
        })[0].capacity;
        if (locationCapacity < studentsCount) {
            formErrors.push({
                name: 'locationSmall',
                value: true
            });
        }
        return formErrors;
    }

    /**
     * addLecture - добавляем новую лекцию
     * @param newLecture{object} - объект данных добавляемой лекции
     * **/
    addLecture(newLecture) {
        const formErrors = this.validateLecture(newLecture),
            formInValid = formErrors.some((item) => {
                return item.value === true;
            });
        if(!formInValid) {
            this.lectures.push(newLecture);
            this.writeInStorage('lectures', this.lectures);
            return true;
        } else {
            return formErrors;
        }
    }

    /**
     * editLecture - редактируем лекцию
     * @param newLecture{object} - объект данных редактируемой лекции
     * **/
    editLecture(newLecture) {
        const formErrors = this.validateLecture(newLecture),
               formInValid = formErrors.some((item) => {
                   return item.value === true;
               });
        if(!formInValid) {
            scheduleLibrary.lectures.filter((item) => {
                return item.id == newLecture.id;
            })[0] = newLecture;
            this.writeInStorage('lectures', this.lectures);
            return true;
        } else {
            return formErrors;
        }
    }

}