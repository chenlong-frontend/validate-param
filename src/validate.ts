import "reflect-metadata";
const parameterSchemaMetadataKey = Symbol("parameterSchemaMetadataKey");

export function schema(schema, validateParams: boolean = false, errorHandle) {
  return function validateArgs(target: any) {
    var original = target;
    var f: any = function(...args) {
      if (validateParams) {
        validateConstructorParams(target, args, errorHandle); 
      }
      const instance = new original(...args);
      const { error } = schema.validate(instance);
      if (error instanceof Error) {
        errorHandle && errorHandle.apply(this, [error, target])
        throw error;
      }

      return instance;
    };
    f.prototype = original.prototype;
    return f;
  };
}

function validateConstructorParams(target: any, args: any[], errorHandle) {
  let existingConstrainedParameters = Reflect.getOwnMetadata(
    parameterSchemaMetadataKey,
    target,
    "constructor"
  );
  if (existingConstrainedParameters) {
    const parameterIndexes = Object.keys(existingConstrainedParameters);
    for (let parameterIndex of parameterIndexes) {
      const { error } = existingConstrainedParameters[parameterIndex].validate(
        args[Number.parseInt(parameterIndex)]
      );
      if (error instanceof Error) {
        errorHandle && errorHandle(error, target)
        throw error;
      }
    }
  }
}

export function propertySchema(schema) {
  return function(target: Object, key: string | symbol): void {
    let val = target[key];
    let propertyName = String(key);

    const getter = () => {
      return val;
    };
    const setter = value => {
      const { error } = schema.validate(value);
      if (error instanceof Error) {
        error.message = error.message.replace('"value"', `"${propertyName}"`);
        throw error;
      }
      val = value;
    };
    Object.defineProperty(target, key, {
      get: getter,
      set: setter,
      enumerable: true,
      configurable: true
    });
  };
}

export function paramSchema(schema) {
  return function setParamSchemaMetadata(
    target: Object,
    propertyKey: string | symbol,
    parameterIndex: number
  ) {
    propertyKey =
      typeof propertyKey === "undefined" ? "constructor" : propertyKey;
    let existingConstrainedParameters =
      Reflect.getOwnMetadata(parameterSchemaMetadataKey, target, propertyKey) ||
      [];
    existingConstrainedParameters[parameterIndex] = schema;
    Reflect.defineMetadata(
      parameterSchemaMetadataKey,
      existingConstrainedParameters,
      target,
      propertyKey
    );
  };
}

export function validateArgs(errorHandle) {
  return function validate(target, propertyKey, descriptor) {
    let existingConstrainedParameters = Reflect.getOwnMetadata(
      parameterSchemaMetadataKey,
      target,
      propertyKey
    ) || [];;
      const oldValue = descriptor.value;
      descriptor.value = function (...args) {
               if (existingConstrainedParameters) {
                 const parameterIndexes = Object.keys(existingConstrainedParameters);
                 for (let parameterIndex of parameterIndexes) {
                   const { error } = existingConstrainedParameters[parameterIndex].validate(
                     args[Number.parseInt(parameterIndex)]
                   );
                   if (error instanceof Error) {
                    errorHandle && errorHandle.apply(this, [error, propertyKey])
                    return
                   }
                 }
               }
              
          return oldValue.apply(this, args)
      }
      return descriptor
  };
}
 