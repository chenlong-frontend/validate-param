<h1 align="center">parameter decorators</h1>

This package based on [ts-decorator-validation](https://github.com/kanian/ts-decorator-validation)。

## install 

```
yarn add typescript-validate-param joi
```

## usage

```js
import {schema, validateArgs, paramSchema, propertySchema} from 'typescript-validate-param'
const Joi = require('joi')

// define validation rules
const personNameSchema = Joi.string().min(3)
const personAgeSchema = Joi.number().min(1)
const propertyAgeSchema = Joi.number().min(10)

const personSchema = Joi.object({
  name: personNameSchema,
  age: personAgeSchema
})

// handler error
function error(err, key) {
  // 'this' bind class 'Person' Instance
  console.log(this.age)
  // get error info
  console.error('err is', err)
  // error propertyKey
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
```

## schema

validate `class`

|  param |  type | introduce |
| ------------ | ------------ | -------|
| schema | Schema | validation rules |
| isValidateConstructor | Boolen | 'true' validate constructor param, 'false' not | 
| errorHandle | Function | error handle |

## propertySchema

validate `property`

|  param |  type | introduce |
| ------------ | ------------ | -------|
| schema | Schema | validation rules |

## validateArgs

validate `function`

|  param |  type | introduce |
| ------------ | ------------ | -------|
| errorHandle | Function | error handle |

## paramSchema

define param validation rules

|  param |  type | introduce |
| ------------ | ------------ | -------|
| schema | Schema | validation rules |
