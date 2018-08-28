import Inflector from 'ember-inflector';
import DS from 'ember-data';

const inflector = Inflector.inflector;

export default DS.RESTSerializer.extend({
  normalizeResponse(store, primaryModelClass, payload, id, requestType) {
    let tlk;

    switch (requestType) {
      case 'query':
        tlk = inflector.pluralize(primaryModelClass.modelName);
        if (primaryModelClass.modelName !== 'issue') {
          payload = payload.map(rawItem => {
            rawItem.oldId = rawItem.id;
            rawItem.id = rawItem.login || rawItem.name;
            return rawItem;
          });
        }
        break;
      case 'queryRecord':
        tlk = inflector.singularize(primaryModelClass.modelName);
        payload.oldId = payload.id;
        payload.id = payload.login || payload.name;
        break;
      default:
        return;
    }

    return this._super(
      store,
      primaryModelClass,
      {
        [`${tlk}`]: payload,
      },
      id,
      requestType
    );
  },
});
