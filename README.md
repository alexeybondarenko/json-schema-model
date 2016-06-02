# JSON Schema Model [![](https://travis-ci.org/alexeybondarenko/schema-model.svg)](https://travis-ci.org/alexeybondarenko/schema-model)

Parser and compiler for JS models by JSON schema. 

## Installation

```sh
bower i json-schema-model --save
# or
npm i json-schema-model --save
```

## Usage

```js

function User (obj) {
  
  SchemaModel.call(this, {
    firstName: 'first_name',
    lastName: 'last_name',
    middleName: 'middle_name'
  });
  
  this.fromSchema(obj);
}
```

## Methods

`fromSchema` - parse data by the schema object.

`toSchema` - convert data to the schema object.

## Properties

`schema` - schema object

## Contributing

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D

## History

2.06.16 Initial config

## Credits

Author: Alexey Bondarenko [bondalex.com](bondalex.com)

## License

MIT
