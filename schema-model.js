
var SchemaTransformer = {
  fromSchema: function (schema, data) {
    var self = {};
    Object.keys(schema).forEach(function (key) {
      self[key] = data[schema[key]];
    });
    return self;
  },
  toSchema: function (schema, formatedBySchema) {
    var res = {};
    Object.keys(schema).forEach(function (key) {
      res[schema[key]] = formatedBySchema[key];
    });
    return res;
  }
};
