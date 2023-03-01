class Aeroplain{
    constructor(model ,capacity){
        this._model =model;
        this._capacity =capacity;
    }

    get getModelMethod(){
        return  this._model;
    }
    get GetCapacityMethod(){
        return this._capacity;
    }
    //it a must u to pass exactly one parameter to the set method as below

   set modelMethodSetter(model){
    return this._model =model;
   }
   set capacityMethodSetter(capacity){
    return this._capacity =capacity;
   }
}
const AirBus1 = new Aeroplain('A001', 800);

console.log(Object.getOwnPropertyDescriptor(AirBus1,'_model')) 
//{ value: 'A001', writable: true, enumerable: true, configurable: true }

console.log(Object.getOwnPropertyDescriptors(Aeroplain.prototype,'_capacity'))
// {
//     constructor: {
//       value: [class Aeroplain],
//       writable: true,
//       enumerable: false,
//       configurable: true
//     },
//     getModelMethod: {
//       get: [Function: get getModelMethod],
//       set: undefined,
//       enumerable: false,
//       configurable: true
//     },
//     GetCapacityMethod: {
//       get: [Function: get GetCapacityMethod],
//       set: undefined,
//       enumerable: false,
//       configurable: true
//     },
//     modelMethodSetter: {
//       get: undefined,
//       set: [Function: set modelMethodSetter],
//       enumerable: false,
//       configurable: true
//     },
//     capacityMethodSetter: {
  
//   Admin@DESKTOP-UP6BR8U MINGW64 /d/javaScript/3 On The Go/Topic js/new/class in Es6/class get and Set
//   $ node app.js
//   {
//     constructor: {
//       value: [class Aeroplain],
//       writable: true,
//       enumerable: false,
//       configurable: true
//     },
//     getModelMethod: {
//       get: [Function: get getModelMethod],
//       set: undefined,
//       enumerable: false,
//       configurable: true
//     },
//     GetCapacityMethod: {
//       get: [Function: get GetCapacityMethod],
//       set: undefined,
//       enumerable: false,
//       configurable: true
//     },
//     modelMethodSetter: {
//       get: undefined,
//       set: [Function: set modelMethodSetter],
//       enumerable: false,
//       configurable: true
//     },
//     capacityMethodSetter: {
//       get: undefined,
//       set: [Function: set capacityMethodSetter],
//       enumerable: false,
//       configurable: true
//     }
//   }