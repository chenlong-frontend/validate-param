import {schema, validateArgs, paramSchema, propertySchema} from '../dist/validate.min.js'
const Joi = require('joi')

const personNameSchema = Joi.string().min(3)
const personAgeSchema = Joi.number().min(1)
const propertyAgeSchema = Joi.number().min(10)

const personSchema = Joi.object({
  name: personNameSchema,
  age: personAgeSchema
})

function error(err, key) {
  console.error('err is', err)
  console.log(key)
}

@schema(personSchema, true, error)
class Person {
  @propertySchema(propertyAgeSchema)
  age: number
  @propertySchema(personNameSchema)
  name: string

  constructor(@paramSchema(personNameSchema) name: string,@paramSchema(personAgeSchema) age: number) {
    this.age = age
    this.name = name
  }  
  @validateArgs(error)
  test2  (
    @paramSchema(personNameSchema) name,
    @paramSchema(personAgeSchema) age
  ) {
    this.age = age
    this.name = name
  }
}
let a = new Person('Jake', 10)
a.test2('3', 1)