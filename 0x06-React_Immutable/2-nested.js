import { fromJS } from './node_modules/immutable/dist/immutable';

export default function accessImmutableObject(object, array) {
    const immutableObj = fromJS(object);
    const firstName = immutableObj.getIn(array, undefined);
    return firstName;
}
