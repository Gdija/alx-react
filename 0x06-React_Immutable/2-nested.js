import { fromJS } from './node_modules/immutable/dist/immutable';

const accessImmutableObject = (object, array) => {

    const immutableObj = fromJS(object);
    return immutableObj.getIn(array, undefined);
}
export default accessImmutableObject;