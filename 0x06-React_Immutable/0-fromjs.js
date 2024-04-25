import { fromJS } from "./node_modules/immutable/dist/immutable";

const getImmutableObject = (object) => {
    return fromJS(object);
}
export default getImmutableObject;