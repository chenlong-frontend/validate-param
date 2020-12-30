import {schema,validateArgs,paramSchema} from '../src/validate'

import Joi = require('./lib');

const personNameSchema = Joi.string().min(3)
const personAgeSchema = Joi.number().min(1)

const personSchema = Joi.object({
  name: personNameSchema,
  age: personAgeSchema
})

const nameSchema = Joi.number().min(3)
const ageSchema = Joi.number().min(1)

@schema(personSchema,true)
    class Person {
      age: number
      name: string
      constructor(name: string, age: number
      ) {
        ;(this.age = age), (this.name = name)
      }
    @validateArgs
    test (
        @paramSchema(nameSchema) name,
        @paramSchema(ageSchema) age: number
    ) {
      this.test2('100', 1)
      this.age = age
    }
    @validateArgs
    test2  (
      @paramSchema(personNameSchema) name,
      @paramSchema(personAgeSchema) age: number
    ) {
      this.age = age
      this.name = name
    }
}
let a = new Person('Jake', 9)
a.test2('3', 1)