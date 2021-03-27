export default class StorageService {
    constructor() {
        this.key = -1;
        this.mas = new Map();
        console.log('\n-- Объект создан --\n');
    }

    add(value) {
        let sz = this.mas.size;
        if (value === Object(value)) {
            this.key += 1;
            this.mas.set(this.key.toString(), value);
        }
        if (sz < this.mas.size) {
            console.log('-- Новый элемент добавлен: --');
        } else {
            console.log('-- Неудалось добавить элемент --');
        }
    }

    getById(id) {
        if (this.mas.has(id)) {
            console.log('-- Найден элемент: ', this.mas.get(id));
        } else {
            console.log('-- Элемент не существует -- ', null);
        }
    }

    getAll() {
        if (this.mas.size > 0) {
            console.log('\n-- Все найденные элементы --');
            this.mas.forEach((values, keys) => {
                console.log(keys, ':', values)
            })
            console.log('-- Всего элементов: ', this.mas.size, '\n');
        } else {
            console.log('-- Коллекция пуста --');
        }
    }

    deleteById(id) {
        if (this.mas.has(id)) {
            console.log('-- Будет удален элемент: ', this.mas.get(id));
            this.mas.delete(id);
            console.log('-- Элемент удален --');
        } else {
            console.log('-- Неудалось удалить элемент --');
        }
    }

    updateById(key, newValue) {
        if (this.mas.has(key) && newValue === Object(newValue)) {
            if (JSON.stringify(Object.keys(this.mas.get(key))) == JSON.stringify(Object.keys(newValue))) {
                for (let i of Object.keys(this.mas.get(key))) {
                    this.mas.get(key)[i] = newValue[i];
                }
                console.log('-- Значение элемента с индексом ', key, ' обновлено : ', this.mas.get(key));
                return;
            }
        }
        console.log('-- Неудалось обновить значение элемента --');
    }

    replaceById(key, newValue) {
        if (this.mas.has(key) && newValue === Object(newValue)) {
            this.mas.set(key, newValue);
            console.log('-- Значение элемента с индексом ', key, ' заменено : ', this.mas.get(key));
        } else {
            console.log('-- Неудалось заменить элемент --');
        }
    }
}