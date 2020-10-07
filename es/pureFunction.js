"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var splitEvery = function splitEvery(every) {
  return function (array) {
    return array.map(function (val, idx) {
      return idx !== 0 && (idx + 1) % every === 0 ? [array[idx - 2], array[idx - 1], val] : undefined;
    }, array).filter(function (x) {
      return x !== undefined;
    });
  };
};

var reuseFns = {
  trim: function trim(str) {
    return str.trim();
  },
  length: function length(str) {
    return str.length;
  },
  map: function map(cb) {
    return function (arr) {
      return arr.map(function (x) {
        return cb(x);
      });
    };
  },
  mapIdx: function mapIdx(cb) {
    return function (arr) {
      return arr.map(cb);
    };
  },
  pipe: function pipe() {
    for (var _len = arguments.length, fns = new Array(_len), _key = 0; _key < _len; _key++) {
      fns[_key] = arguments[_key];
    }

    return function (x) {
      return fns.reduce(function (v, f) {
        return f(v);
      }, x);
    };
  },
  join: function join(_char) {
    return function (arr) {
      return arr.join(_char);
    };
  },
  flatten: function flatten(list) {
    return list.flat();
  },
  split: function split(_char2) {
    return function (str) {
      return str.split(_char2);
    };
  },
  splitEvery: splitEvery,
  reverseArr: function reverseArr(arr) {
    return arr.reverse();
  },
  reverseStr: function reverseStr(str) {
    return str.split('').reverse().join('');
  }
};
var dependentFns = {
  reverse: function reverse(val) {
    return typeof val === 'string' ? reuseFns.reverseStr(val) : reuseFns.reverseArr(val);
  }
};

var _default = /*#__PURE__*/_objectSpread( /*#__PURE__*/_objectSpread({}, reuseFns), dependentFns);

exports["default"] = _default;