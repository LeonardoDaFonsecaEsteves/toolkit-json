"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.JsonCircularStringify = void 0;

var _typeof2 = _interopRequireDefault(require("@babel/runtime/helpers/typeof"));

/**
 * recursive function which will be called to process 
 * the entire depth of the file or the object pass to args
 * @param {string | object } subject  
 * @param {object} _refs weakSet
 * @returns  JSON
 */
var execRecursively = function execRecursively(subject) {
  var _refs = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;

  // create WeakSet
  if (!_refs) _refs = new WeakSet(); //if the subject is already in the refs then we stop the recursivity

  if (_refs.has(subject)) return; // if the subject is of type object 

  if ("object" === (0, _typeof2["default"])(subject)) {
    // add refs subject
    _refs.add(subject); // then we loop through its content and recall the function


    for (var key in subject) {
      execRecursively(subject[key], _refs);
    }
  }
};
/**
 * recursive function but flat the whole JSON object file passed in args
 * @param {any} args 
 * @returns JSON file stringify
 */


var JsonCircularStringify = function JsonCircularStringify() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  /**
   * returns a JSON.stringify with arguments as parameters
   *  and recursive function to deepen it
   */
  return JSON.stringify(args, execRecursively(args));
};

exports.JsonCircularStringify = JsonCircularStringify;