
export default class JsonSchemaModel {

  constructor(schemaObj) {

    this._schema = schemaObj;

    this.fromSchema = function (data) {
      var self = this;
      if (!data) return;
      Object.keys(this._schema).forEach(function (key) {
        self[key] = data[self._schema[key]];
      });
    };

    this.toSchema = function (schema) {
      var res = {};
      var self = this;
      var schemaObj = schema || this._schema;
      Object.keys(schemaObj).forEach(function (key) {
        res[schemaObj[key]] = self[key];
      });
      return res;
    };
  }

  get schema() {
    return this._schema;
  }
}
