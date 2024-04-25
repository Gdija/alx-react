import { fromJS } from 'immutable';

const accessImmutableObject = (object, array) => {
    const immutableObj = fromJS(object);
    return immutableObj.getIn(array, undefined);
}

export default accessImmutableObject;
