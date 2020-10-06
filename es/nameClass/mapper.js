"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var NAMES = [' ', 'nghìn ', 'triệu ', 'tỷ '];

var take = function take(length, arr) {
  return arr.slice(0, length);
};

var compose = function compose() {
  for (var _len = arguments.length, fns = new Array(_len), _key = 0; _key < _len; _key++) {
    fns[_key] = arguments[_key];
  }

  return function (x) {
    return fns.reduceRight(function (v, f) {
      return f(v);
    }, x);
  };
};

var length = function length(str) {
  return str.length;
};

var nameStretched = function nameStretched(length) {
  return length <= 4 ? take(length, NAMES) :
  /** otherwise */
  Array.from({
    length: length
  }).reduce(function (accum, _, index) {
    return index < 4 ? _toConsumableArray(accum) :
    /** otherwise */
    [].concat(_toConsumableArray(accum), [accum[index - 3] + 'tỷ ']);
  }, NAMES);
};

var createNameStretched = compose(nameStretched, length);

var crossConcat = function crossConcat(leftArr, rightArr) {
  return leftArr.map(function (val, index) {
    return [val, rightArr[index]];
  });
};

var toName = function toName(arrNumber) {
  var names = createNameStretched(arrNumber);
  return crossConcat(arrNumber, names).reverse();
};

var _default = toName;
exports["default"] = _default;