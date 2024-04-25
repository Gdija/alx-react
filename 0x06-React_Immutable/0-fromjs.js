// Converting into an Immutable object using fromJS

import { fromJS } from './node_modules/immutable/dist/immutable';

const getImmutableObject = (object) => fromJS(object);

export default getImmutableObject;
