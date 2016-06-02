import chai from 'chai';
import JsonSchemaModel from '../lib/json-schema-model';

chai.expect();

const expect = chai.expect;

var schemaModel;

var schema = {
  firstName: 'first_name',
  lastName: 'last_name'
};
var testData = {
  first_name: 'Alexey',
  last_name: 'Bondarenko'
};

describe('Given an instance of SchemaModel', function () {

  beforeEach(function () {
    schemaModel = new JsonSchemaModel(schema);
  });
  describe('when I need the schema', function () {
    it('should return the object', () => {
      expect(schemaModel.schema).to.be.equal(schema);
    });
  });
  describe('when I call fromSchema', function () {

    it('should parse data by schema', function () {

      schemaModel.fromSchema(testData);

      expect(schemaModel.firstName).to.be.equal(testData.first_name);
      expect(schemaModel.lastName).to.be.equal(testData.last_name);

    });

    it('should not parse null data', function () {

      schemaModel.fromSchema(null);

      expect(schemaModel.firstName).to.not.exist;
      expect(schemaModel.lastName).to.not.exist;

    });
    it('should parse empty object', function () {

      schemaModel.fromSchema({});

      expect(schemaModel.firstName).to.be.empty;
      expect(schemaModel.lastName).to.be.empty;

    });

  });

  describe('when I call toSchema', function () {

    beforeEach(function () {
      schemaModel.fromSchema(testData);
    });

    it('should convert model data to the schema format', function () {

      expect(schemaModel.toSchema()).to.deep.equal(testData);
    });

    describe('when I pass schema as argument', function () {
      it('should use it', function () {

        expect(schemaModel.toSchema({
          firstName: 'fname',
          lastName: 'lname'
        })).to.deep.equal({
          fname: 'Alexey',
          lname: 'Bondarenko'
        });
      });
      it('should support schema with less properties', function () {

        expect(schemaModel.toSchema({
          firstName: 'fname'
        })).to.deep.equal({
          fname: 'Alexey'
        });
      });
      it('should support empty schema object', function () {

        expect(schemaModel.toSchema({})).to.deep.equal({});
      });
    });

  })
});
