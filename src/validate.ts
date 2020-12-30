import "reflect-metadata";
const parameterSchemaMetadataKey = Symbol("parameterSchemaMetadataKey");

export function schema(schema, validateParams: boolean = false) {
  return function validateArgs(target: any) {
    var original = target;
    var f: any = function(...args) {
      if (validateParams) {
        validateConstructorParams(target, args); 
      }
      const instance = new original(...args);
      const { error } = schema.validate(instance);
      if (error instanceof Error) {
        throw error;
      }

      return instance;
    };
    f.prototype = original.prototype;
    return f;
  };
}

export function validateConstructorParams(target: any, args: any[]) {
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
        throw error;
      }
    }
  }
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

export function validateArgs(target, propertyKey, descriptor) {
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
                   console.log(error)
                  return
                 }
               }
             }
            
        return oldValue.apply(this, args)
    }
    return descriptor
};