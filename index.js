var recipes = {};

var updateObjectWithKeyAndValue = function(object, key, value){
  return Object.assign({}, object, {[key]: value})
}

var destructivelyUpdateObjectWithKeyAndValue = function(object, key, value){
  return Object.assign(object, {[key]: value})
}

var deleteFromObjectByKey = function(object, key){
  var newObj = Object.assign({}, obj)
  delete newObj[key]
  return newObj
}

var destructivelyDeleteFromObjectByKey = function(object, key){
  delete object[key]
  return object
}
