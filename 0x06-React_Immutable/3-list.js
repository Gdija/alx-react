import { List } from './node_modules/immutable/dist/immutable';

export function getListObject(array) {
    const list = List(array);
    return list;
}


export function addElementToList(list, element) {
    const finalList = list.push(element);
    return finalList;
}
