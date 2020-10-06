(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.readNumber = factory());
}(this, (function () { 'use strict';

  function _defineProperty(obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }

    return obj;
  }

  function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);

    if (Object.getOwnPropertySymbols) {
      var symbols = Object.getOwnPropertySymbols(object);
      if (enumerableOnly) symbols = symbols.filter(function (sym) {
        return Object.getOwnPropertyDescriptor(object, sym).enumerable;
      });
      keys.push.apply(keys, symbols);
    }

    return keys;
  }

  function _objectSpread2(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i] != null ? arguments[i] : {};

      if (i % 2) {
        ownKeys(Object(source), true).forEach(function (key) {
          _defineProperty(target, key, source[key]);
        });
      } else if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
      } else {
        ownKeys(Object(source)).forEach(function (key) {
          Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
      }
    }

    return target;
  }

  function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
  }

  function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) return _arrayLikeToArray(arr);
  }

  function _iterableToArray(iter) {
    if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter);
  }

  function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
  }

  function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;

    for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

    return arr2;
  }

  function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }

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
    join: function join(char) {
      return function (arr) {
        return arr.join(char);
      };
    },
    flatten: function flatten(list) {
      return list.flat();
    },
    split: function split(char) {
      return function (str) {
        return str.split(char);
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
  var pureFns = _objectSpread2(_objectSpread2({}, reuseFns), dependentFns);

  var pipe = pureFns.pipe,
      split = pureFns.split,
      splitEvery$1 = pureFns.splitEvery,
      reverse = pureFns.reverse;

  var toString = function toString(str) {
    return str.toString();
  };

  var exportFunc = pipe(toString, reverse, split(''), splitEvery$1(3));

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

  var isHundres = function isHundres(position) {
    return position === 2;
  };

  var isTens = function isTens(position) {
    return position === 1;
  };

  var isUnits = function isUnits(position) {
    return position === 0;
  };

  var _handle0 = function _handle0(position, _ref) {
    var _ref$followingNumber = _ref.followingNumber,
        followingNumber = _ref$followingNumber === void 0 ? '' : _ref$followingNumber;
    return isHundres(position) ? 'không' : isTens(position) ? followingNumber === '0' ? '' : 'linh' : isUnits(position) && '';
  };

  var _handle1 = function _handle1(position, _ref2) {
    var _ref2$previousNumber = _ref2.previousNumber,
        previousNumber = _ref2$previousNumber === void 0 ? '' : _ref2$previousNumber;
    return isHundres(position) ? 'một' : isTens(position) ? 'mười' : isUnits(position) && (['', '0', '1'].includes(previousNumber) ? 'một' : 'mốt');
  };

  var _handle4 = function _handle4(position, _ref3) {
    var _ref3$previousNumber = _ref3.previousNumber,
        previousNumber = _ref3$previousNumber === void 0 ? '' : _ref3$previousNumber;
    return isHundres(position) || isTens(position) ? 'bốn' : isUnits(position) && (['', '0', '1'].includes(previousNumber) ? 'bốn' : 'tư');
  };

  var _handle5 = function _handle5(position, _ref4) {
    var _ref4$previousNumber = _ref4.previousNumber,
        previousNumber = _ref4$previousNumber === void 0 ? '' : _ref4$previousNumber;
    return isHundres(position) || isTens(position) ? 'năm' : isUnits(position) && (['', '0'].includes(previousNumber) ? 'năm' : 'lăm');
  };

  var complexCase = {
    _handle0: _handle0,
    _handle1: _handle1,
    _handle4: _handle4,
    _handle5: _handle5
  };

  var always = function always(x) {
    return function () {
      return x;
    };
  };

  var simpleConditions = {
    '2': always('hai'),
    '3': always('ba'),
    '6': always('sáu'),
    '7': always('bảy'),
    '8': always('tám'),
    '9': always('chín')
  };
  var complexConditions = {
    "0": complexCase._handle0,
    "1": complexCase._handle1,
    "4": complexCase._handle4,
    "5": complexCase._handle5
  };

  var readers = _objectSpread2(_objectSpread2({}, simpleConditions), complexConditions);

  var readSingle = function readSingle(number, posistion) {
    var otherNumbers = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {
      previousNumber: "",
      followingNumber: ""
    };

    // or function which's return the empty string
    var readThatNumber = readers[number] || function () {
      return '';
    };

    return readThatNumber(posistion, otherNumbers);
  };

  var createSub = (function (arrNumber) {
    return arrNumber.map(function (number, position) {
      if (position === 2) {
        // Hundred
        return 'trăm ';
      } else if (position === 1) {
        // Tens
        return ['0', '1'].includes(number) ? '' : 'mươi ';
      } else {
        // Unit
        return '';
      }
    });
  });

  var mapper = (function (arrNumber) {
    var words = arrNumber.map(function (number, position) {
      return readSingle(number, position, {
        previousNumber: arrNumber[position + 1] || '',
        followingNumber: arrNumber[position - 1] || ''
      });
    });
    var subs = createSub(arrNumber); // add sub to word and return

    return words.map(function (number, position) {
      return "".concat(number, " ").concat(subs[position]);
    }).reverse().join('');
  });

  var pipe$1 = pureFns.pipe,
      map = pureFns.map,
      trim = pureFns.trim,
      join = pureFns.join,
      flatten = pureFns.flatten;
  var index = pipe$1(exportFunc, map(mapper), toName, flatten, join(''), trim);

  return index;

})));
