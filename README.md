## parameter decorators

The inspiration comes from [this article](https://www.typescriptlang.org/docs/handbook/decorators.html#parameter-decorators)。

## install 

```
yarn add typescript-validate-param
```

## usage

```js
import {validateArgs,paramSchema} from 'typescript-validate-param'
const Joi = require('joi')

// define validation rules
const personNameSchema = Joi.string().min(3)
const personAgeSchema = Joi.number().min(1)

// handler error here
function error(err, key) {
  // 'this' bind class 'Person' Instance
  console.log(this.age)
  // get error info here
  console.error('err is', err)
  // error propertyKey
  console.log(key)
}

@schema(personSchema,true)
    class Person {
      age: number
      name: string
      constructor(name: string, age: number
      ) {
        ;(this.age = age), (this.name = name)
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
let a = new Person('Jake', 9)
a.test2('3', 1)
```


