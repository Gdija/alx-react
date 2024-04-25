// Nested merge

import { Map } from 'immutable';

export function mergeDeeplyElements(page1, page2){
    const obj1 = Map(page1);
    const obj2 = Map(page2);
    return obj1.mergeDeep(obj2);
}
