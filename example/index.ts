import {schema,validateArgs,paramSchema} from '../dist/validate.min.js'
const Joi = require('joi')

export const fn = Joi.function()
export const str = Joi.string().allow('')
export const num = Joi.number()
export const bool = Joi.boolean();
export const obj = Joi.object();

export const showLayers = Joi.object({
  privateIds: Joi.array().items(Joi.number())
}).unknown()

export const setTollgate = Joi.array().items(
  Joi.object({
    channelId: Joi.string().required(),
    position: Joi.object({
      x: Joi.number().required(),
      y: Joi.number().required()
    }).unknown(),
    title: Joi.string().required()
  }).unknown()
)

export const openScreenTrack = Joi.object({
  mode: Joi.number().allow(
    'TRACKCOLOR.SINGLE', 'TRACKCOLOR.MULTIPLE'
  ).only().required()
})

export const getPresetImage = Joi.object({
  id: Joi.number().required()
}).unknown()

export const ptzSet = Joi.object({
  lon: Joi.number().required(),
  lat: Joi.number().required(),
  alt: Joi.number().required()
}).unknown()

export const ptzControlEnum = Joi.string().allow(
  ...Object.entries({PTZCONTROL: 'PTZCONTROL'}).map(v => v[1])
).only()

export const ptzCtrlParam = Joi.object({
  deviceId: Joi.string().required(),
  action: ptzControlEnum.required(),
  Type: Joi.number(),
  Pan: Joi.number(),
  Tilt: Joi.number(),
  Zoom: Joi.number(),
}).unknown()

export const ptzControl = Joi.alternatives().try(ptzCtrlParam, ptzControlEnum)

export const ptzSetStatic = getPresetImage

export const ptzBox = Joi.object({
  mode: Joi.string().allow('PTZCONTROL.ZOOMOUT','PTZCONTROL.ZOOMIN').only().required(),
  midPointX: Joi.number().required(),
  midPointY: Joi.number().required(),
  lengthX: Joi.number().required(),
  lengthY: Joi.number().required(),
}).unknown().required()

export const ptzSpeed = Joi.number().min(1).max(100)

export const changeSceneMode = Joi.number().allow(
  ...Object.entries('SCENEMODE').map(v => v[1])
).only().required()

export const threedMode = Joi.object({
  alpha: Joi.number()
})

export const changeChannel = Joi.string().required()

export const setMarkWarn = Joi.object({
  id: Joi.number(),
  ids: Joi.array().items(Joi.number())
}).required()

export const removeMarkWarn = Joi.object({
  ids: Joi.array().items(Joi.number()).required()
}).required()

export const addPreset = Joi.object({
  name: Joi.string().required()
}).unknown()

const personNameSchema = Joi.string().min(3)
const personAgeSchema = Joi.number().min(1)

const personSchema = Joi.object({
  name: personNameSchema,
  age: personAgeSchema
})

function error(err, key) {
  console.error('err is', err)
  console.log(this.age)
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