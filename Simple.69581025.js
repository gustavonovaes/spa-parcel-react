// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"../node_modules/react-table/dist/index.es.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.addActions = exports.actions = exports.useBlockLayout = exports.useAbsoluteLayout = exports.useResizeColumns = exports.useColumnOrder = exports.useRowState = exports.useRowSelect = exports.usePagination = exports.useSortBy = exports.useGroupBy = exports.useFilters = exports.useExpanded = exports.defaultState = exports.useTable = exports.defaultColumn = exports.utils = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function () { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; if (obj != null) { var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

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
      ownKeys(source, true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(source).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

function _objectWithoutProperties(source, excluded) {
  if (source == null) return {};

  var target = _objectWithoutPropertiesLoose(source, excluded);

  var key, i;

  if (Object.getOwnPropertySymbols) {
    var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

    for (i = 0; i < sourceSymbolKeys.length; i++) {
      key = sourceSymbolKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
      target[key] = source[key];
    }
  }

  return target;
}

function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest();
}

function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread();
}

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) arr2[i] = arr[i];

    return arr2;
  }
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function _iterableToArray(iter) {
  if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);
}

function _iterableToArrayLimit(arr, i) {
  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance");
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance");
}

function _toPrimitive(input, hint) {
  if (typeof input !== "object" || input === null) return input;
  var prim = input[Symbol.toPrimitive];

  if (prim !== undefined) {
    var res = prim.call(input, hint || "default");
    if (typeof res !== "object") return res;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }

  return (hint === "string" ? String : Number)(input);
}

function _toPropertyKey(arg) {
  var key = _toPrimitive(arg, "string");

  return typeof key === "symbol" ? key : String(key);
}

var defaultColumn = {
  Cell: function Cell(_ref) {
    var _ref$cell$value = _ref.cell.value,
        value = _ref$cell$value === void 0 ? '' : _ref$cell$value;
    return String(value);
  },
  show: true,
  width: 150,
  minWidth: 0,
  maxWidth: Number.MAX_SAFE_INTEGER // SSR has issues with useLayoutEffect still, so use useEffect during SSR

};
exports.defaultColumn = defaultColumn;
var safeUseLayoutEffect = typeof window !== 'undefined' && "development" === 'production' ? _react.default.useLayoutEffect : _react.default.useEffect; // Find the depth of the columns

function findMaxDepth(columns) {
  var depth = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  return columns.reduce(function (prev, curr) {
    if (curr.columns) {
      return Math.max(prev, findMaxDepth(curr.columns, depth + 1));
    }

    return depth;
  }, 0);
}

function decorateColumn(column, userDefaultColumn, parent, depth, index) {
  // Apply the userDefaultColumn
  column = _objectSpread2({}, defaultColumn, {}, userDefaultColumn, {}, column); // First check for string accessor

  var _column = column,
      id = _column.id,
      accessor = _column.accessor,
      Header = _column.Header;

  if (typeof accessor === 'string') {
    id = id || accessor;
    var accessorPath = accessor.split('.');

    accessor = function accessor(row) {
      return getBy(row, accessorPath);
    };
  }

  if (!id && typeof Header === 'string' && Header) {
    id = Header;
  }

  if (!id && column.columns) {
    console.error(column);
    throw new Error('A column ID (or unique "Header" value) is required!');
  }

  if (!id) {
    console.error(column);
    throw new Error('A column ID (or string accessor) is required!');
  }

  column = _objectSpread2({
    // Make sure there is a fallback header, just in case
    Header: function Header() {
      return _react.default.createElement(_react.default.Fragment, null, "\xA0");
    }
  }, column, {
    // Materialize and override this stuff
    id: id,
    accessor: accessor,
    parent: parent,
    depth: depth,
    index: index
  });
  return column;
} // Build the visible columns, headers and flat column list


function decorateColumnTree(columns, defaultColumn, parent) {
  var depth = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
  return columns.map(function (column, columnIndex) {
    column = decorateColumn(column, defaultColumn, parent, depth, columnIndex);

    if (column.columns) {
      column.columns = decorateColumnTree(column.columns, defaultColumn, column, depth + 1);
    }

    return column;
  });
} // Build the header groups from the bottom up


function makeHeaderGroups(flatColumns, defaultColumn) {
  var headerGroups = []; // Build each header group from the bottom up

  var buildGroup = function buildGroup(columns, depth) {
    var headerGroup = {
      headers: []
    };
    var parentColumns = []; // Do any of these columns have parents?

    var hasParents = columns.some(function (col) {
      return col.parent;
    });
    columns.forEach(function (column) {
      // Are we the first column in this group?
      var isFirst = !parentColumns.length; // What is the latest (last) parent column?

      var latestParentColumn = [].concat(parentColumns).reverse()[0]; // If the column has a parent, add it if necessary

      if (column.parent) {
        var similarParentColumns = parentColumns.filter(function (d) {
          return d.originalID === column.parent.id;
        });

        if (isFirst || latestParentColumn.originalID !== column.parent.id) {
          parentColumns.push(_objectSpread2({}, column.parent, {
            originalID: column.parent.id,
            id: [column.parent.id, similarParentColumns.length].join('_')
          }));
        }
      } else if (hasParents) {
        // If other columns have parents, we'll need to add a place holder if necessary
        var originalID = [column.id, 'placeholder'].join('_');

        var _similarParentColumns = parentColumns.filter(function (d) {
          return d.originalID === originalID;
        });

        var placeholderColumn = decorateColumn({
          originalID: originalID,
          id: [column.id, 'placeholder', _similarParentColumns.length].join('_'),
          placeholderOf: column
        }, defaultColumn);

        if (isFirst || latestParentColumn.originalID !== placeholderColumn.originalID) {
          parentColumns.push(placeholderColumn);
        }
      } // Establish the new headers[] relationship on the parent


      if (column.parent || hasParents) {
        latestParentColumn = [].concat(parentColumns).reverse()[0];
        latestParentColumn.headers = latestParentColumn.headers || [];

        if (!latestParentColumn.headers.includes(column)) {
          latestParentColumn.headers.push(column);
        }
      }

      column.totalHeaderCount = column.headers ? column.headers.reduce(function (sum, header) {
        return sum + header.totalHeaderCount;
      }, 0) : 1; // Leaf node columns take up at least one count

      headerGroup.headers.push(column);
    });
    headerGroups.push(headerGroup);

    if (parentColumns.length) {
      buildGroup(parentColumns, depth + 1);
    }
  };

  buildGroup(flatColumns, 0);
  return headerGroups.reverse();
}

function determineHeaderVisibility(instance) {
  var headers = instance.headers;

  var handleColumn = function handleColumn(column, parentVisible) {
    column.isVisible = parentVisible ? typeof column.show === 'function' ? column.show(instance) : !!column.show : false;
    var totalVisibleHeaderCount = 0;

    if (column.headers && column.headers.length) {
      column.headers.forEach(function (subColumn) {
        return totalVisibleHeaderCount += handleColumn(subColumn, column.isVisible);
      });
    } else {
      totalVisibleHeaderCount = column.isVisible ? 1 : 0;
    }

    column.totalVisibleHeaderCount = totalVisibleHeaderCount;
    return totalVisibleHeaderCount;
  };

  var totalVisibleHeaderCount = 0;
  headers.forEach(function (subHeader) {
    return totalVisibleHeaderCount += handleColumn(subHeader, true);
  });
}

function getBy(obj, path, def) {
  if (!path) {
    return obj;
  }

  var pathObj = makePathArray(path);
  var val;

  try {
    val = pathObj.reduce(function (cursor, pathPart) {
      return cursor[pathPart];
    }, obj);
  } catch (e) {// continue regardless of error
  }

  return typeof val !== 'undefined' ? val : def;
}

function defaultOrderByFn(arr, funcs, dirs) {
  return _toConsumableArray(arr).sort(function (rowA, rowB) {
    for (var i = 0; i < funcs.length; i += 1) {
      var sortFn = funcs[i];
      var desc = dirs[i] === false || dirs[i] === 'desc';
      var sortInt = sortFn(rowA, rowB);

      if (sortInt !== 0) {
        return desc ? -sortInt : sortInt;
      }
    }

    return dirs[0] ? rowA.index - rowB.index : rowB.index - rowA.index;
  });
}

function getFirstDefined() {
  for (var i = 0; i < arguments.length; i += 1) {
    if (typeof (i < 0 || arguments.length <= i ? undefined : arguments[i]) !== 'undefined') {
      return i < 0 || arguments.length <= i ? undefined : arguments[i];
    }
  }
}

function defaultGroupByFn(rows, columnID) {
  return rows.reduce(function (prev, row, i) {
    // TODO: Might want to implement a key serializer here so
    // irregular column values can still be grouped if needed?
    var resKey = "".concat(row.values[columnID]);
    prev[resKey] = Array.isArray(prev[resKey]) ? prev[resKey] : [];
    prev[resKey].push(row);
    return prev;
  }, {});
}

function getElementDimensions(element) {
  var rect = element.getBoundingClientRect();
  var style = window.getComputedStyle(element);
  var margins = {
    left: parseInt(style.marginLeft),
    right: parseInt(style.marginRight)
  };
  var padding = {
    left: parseInt(style.paddingLeft),
    right: parseInt(style.paddingRight)
  };
  return {
    left: Math.ceil(rect.left),
    width: Math.ceil(rect.width),
    outerWidth: Math.ceil(rect.width + margins.left + margins.right + padding.left + padding.right),
    marginLeft: margins.left,
    marginRight: margins.right,
    paddingLeft: padding.left,
    paddingRight: padding.right,
    scrollWidth: element.scrollWidth
  };
}

function flexRender(Comp, props) {
  return isReactComponent(Comp) ? _react.default.createElement(Comp, props) : Comp;
}

function isClassComponent(component) {
  return typeof component === 'function' && !!Object.getPrototypeOf(component).isReactComponent;
}

function isFunctionComponent(component) {
  return typeof component === 'function';
}

function isReactComponent(component) {
  return isClassComponent(component) || isFunctionComponent(component);
}

var mergeProps = function mergeProps() {
  var props = {};

  for (var _len = arguments.length, groups = new Array(_len), _key = 0; _key < _len; _key++) {
    groups[_key] = arguments[_key];
  }

  groups.forEach(function () {
    var _ref2 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        _ref2$style = _ref2.style,
        style = _ref2$style === void 0 ? {} : _ref2$style,
        className = _ref2.className,
        rest = _objectWithoutProperties(_ref2, ["style", "className"]);

    props = _objectSpread2({}, props, {}, rest, {
      style: _objectSpread2({}, props.style || {}, {}, style),
      className: [props.className, className].filter(Boolean).join(' ')
    });
  });
  return props;
};

var applyHooks = function applyHooks(hooks, initial) {
  for (var _len2 = arguments.length, args = new Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
    args[_key2 - 2] = arguments[_key2];
  }

  return hooks.reduce(function (prev, next) {
    var nextValue = next.apply(void 0, [prev].concat(args));

    if (typeof nextValue === 'undefined') {
      throw new Error('React Table: A hook just returned undefined! This is not allowed.');
    }

    return nextValue;
  }, initial);
};

var applyPropHooks = function applyPropHooks(hooks) {
  for (var _len3 = arguments.length, args = new Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
    args[_key3 - 1] = arguments[_key3];
  }

  return hooks.reduce(function (prev, next) {
    return mergeProps(prev, next.apply(void 0, args));
  }, {});
};

var warnUnknownProps = function warnUnknownProps(props) {
  if (Object.keys(props).length) {
    throw new Error("Unknown options passed to useReactTable:\n\n".concat(JSON.stringify(props, null, 2)));
  }
};

function sum(arr) {
  return arr.reduce(function (prev, curr) {
    return prev + curr;
  }, 0);
}

function isFunction(a) {
  if (typeof a === 'function') {
    return a;
  }
}

function flattenBy(columns, childKey) {
  var flatColumns = [];

  var recurse = function recurse(columns) {
    columns.forEach(function (d) {
      if (!d[childKey]) {
        flatColumns.push(d);
      } else {
        recurse(d[childKey]);
      }
    });
  };

  recurse(columns);
  return flatColumns;
}

function ensurePluginOrder(plugins, befores, pluginName, afters) {
  var pluginIndex = plugins.findIndex(function (plugin) {
    return plugin.pluginName === pluginName;
  });

  if (pluginIndex === -1) {
    throw new Error("The plugin ".concat(pluginName, " was not found in the plugin list!\nThis usually means you need to need to name your plugin hook by setting the 'pluginName' property of the hook function, eg:\n\n  ").concat(pluginName, ".pluginName = '").concat(pluginName, "'\n"));
  }

  befores.forEach(function (before) {
    var beforeIndex = plugins.findIndex(function (plugin) {
      return plugin.pluginName === before;
    });

    if (beforeIndex > -1 && beforeIndex > pluginIndex) {
      throw new Error("React Table: The ".concat(pluginName, " plugin hook must be placed after the ").concat(before, " plugin hook!"));
    }
  });
  afters.forEach(function (after) {
    var afterIndex = plugins.findIndex(function (plugin) {
      return plugin.pluginName === after;
    });

    if (afterIndex > -1 && afterIndex < pluginIndex) {
      throw new Error("React Table: The ".concat(pluginName, " plugin hook must be placed before the ").concat(after, " plugin hook!"));
    }
  });
}

function expandRows(rows, _ref3) {
  var manualExpandedKey = _ref3.manualExpandedKey,
      expanded = _ref3.expanded,
      _ref3$expandSubRows = _ref3.expandSubRows,
      expandSubRows = _ref3$expandSubRows === void 0 ? true : _ref3$expandSubRows;
  var expandedRows = [];

  var handleRow = function handleRow(row) {
    var key = row.path.join('.');
    row.isExpanded = row.original && row.original[manualExpandedKey] || expanded.includes(key);
    row.canExpand = row.subRows && !!row.subRows.length;
    expandedRows.push(row);

    if (expandSubRows && row.subRows && row.subRows.length && row.isExpanded) {
      row.subRows.forEach(handleRow);
    }
  };

  rows.forEach(handleRow);
  return expandedRows;
} //


function makePathArray(obj) {
  return flattenDeep(obj) // remove all periods in parts
  .map(function (d) {
    return String(d).replace('.', '_');
  }) // join parts using period
  .join('.') // replace brackets with periods
  .replace(/\[/g, '.').replace(/\]/g, '') // split it back out on periods
  .split('.');
}

function flattenDeep(arr) {
  var newArr = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];

  if (!Array.isArray(arr)) {
    newArr.push(arr);
  } else {
    for (var i = 0; i < arr.length; i += 1) {
      flattenDeep(arr[i], newArr);
    }
  }

  return newArr;
}

var utils =
/*#__PURE__*/
Object.freeze({
  defaultColumn: defaultColumn,
  safeUseLayoutEffect: safeUseLayoutEffect,
  findMaxDepth: findMaxDepth,
  decorateColumn: decorateColumn,
  decorateColumnTree: decorateColumnTree,
  makeHeaderGroups: makeHeaderGroups,
  determineHeaderVisibility: determineHeaderVisibility,
  getBy: getBy,
  defaultOrderByFn: defaultOrderByFn,
  getFirstDefined: getFirstDefined,
  defaultGroupByFn: defaultGroupByFn,
  getElementDimensions: getElementDimensions,
  flexRender: flexRender,
  mergeProps: mergeProps,
  applyHooks: applyHooks,
  applyPropHooks: applyPropHooks,
  warnUnknownProps: warnUnknownProps,
  sum: sum,
  isFunction: isFunction,
  flattenBy: flattenBy,
  ensurePluginOrder: ensurePluginOrder,
  expandRows: expandRows
});
exports.utils = utils;
var propTypes = {
  // General
  data: _propTypes.default.array.isRequired,
  columns: _propTypes.default.arrayOf(_propTypes.default.object).isRequired,
  defaultColumn: _propTypes.default.object,
  getSubRows: _propTypes.default.func,
  getRowID: _propTypes.default.func,
  debug: _propTypes.default.bool
};
var renderErr = 'You must specify a valid render component. This could be "column.Cell", "column.Header", "column.Filter", "column.Aggregated" or any other custom renderer component.';
var defaultState = {};
exports.defaultState = defaultState;
var defaultInitialState = {};
var defaultColumnInstance = {};

var defaultReducer = function defaultReducer(old, newState) {
  return newState;
};

var defaultGetSubRows = function defaultGetSubRows(row, index) {
  return row.subRows || [];
};

var defaultGetRowID = function defaultGetRowID(row, index) {
  return index;
};

var useTable = function useTable(props) {
  // Validate props
  _propTypes.default.checkPropTypes(propTypes, props, 'property', 'useTable'); // Destructure props


  var data = props.data,
      userColumns = props.columns,
      _props$initialState = props.initialState,
      initialState = _props$initialState === void 0 ? defaultInitialState : _props$initialState,
      userState = props.state,
      _props$defaultColumn = props.defaultColumn,
      defaultColumn$$1 = _props$defaultColumn === void 0 ? defaultColumnInstance : _props$defaultColumn,
      _props$getSubRows = props.getSubRows,
      getSubRows = _props$getSubRows === void 0 ? defaultGetSubRows : _props$getSubRows,
      _props$getRowID = props.getRowID,
      getRowID = _props$getRowID === void 0 ? defaultGetRowID : _props$getRowID,
      _props$reducer = props.reducer,
      reducer = _props$reducer === void 0 ? defaultReducer : _props$reducer,
      debug = props.debug;
  debug = "development" === 'production' ? false : debug; // But use the users table state if provided

  var _React$useState = _react.default.useState(_objectSpread2({}, defaultState, {}, initialState)),
      _React$useState2 = _slicedToArray(_React$useState, 2),
      originalState = _React$useState2[0],
      originalSetState = _React$useState2[1];

  var state = _react.default.useMemo(function () {
    if (userState) {
      var newState = _objectSpread2({}, originalState);

      Object.keys(userState).forEach(function (key) {
        newState[key] = userState[key];
      });
      return newState;
    }

    return originalState;
  }, [originalState, userState]);

  var setState = _react.default.useCallback(function (updater, type) {
    return originalSetState(function (old) {
      var newState = typeof updater === 'function' ? updater(old) : updater;
      return reducer(old, newState, type);
    });
  }, [reducer]); // The table instance ref


  var instanceRef = _react.default.useRef({});

  for (var _len = arguments.length, plugins = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    plugins[_key - 1] = arguments[_key];
  }

  Object.assign(instanceRef.current, _objectSpread2({}, props, {
    data: data,
    // The raw data
    state: state,
    setState: setState,
    // The resolved table state
    plugins: plugins,
    // All resolved plugins
    hooks: {
      columnsBeforeHeaderGroups: [],
      columnsBeforeHeaderGroupsDeps: [],
      useBeforeDimensions: [],
      useMain: [],
      useRows: [],
      prepareRow: [],
      getTableProps: [],
      getTableBodyProps: [],
      getRowProps: [],
      getHeaderGroupProps: [],
      getHeaderProps: [],
      getCellProps: []
    }
  })); // Allow plugins to register hooks

  if ("development" === 'development' && debug) console.time('plugins');
  plugins.filter(Boolean).forEach(function (plugin) {
    plugin(instanceRef.current.hooks);
  });
  if ("development" === 'development' && debug) console.timeEnd('plugins'); // Decorate All the columns

  var columns = _react.default.useMemo(function () {
    return decorateColumnTree(userColumns, defaultColumn$$1);
  }, [defaultColumn$$1, userColumns]); // Get the flat list of all columns andllow hooks to decorate
  // those columns (and trigger this memoization via deps)


  var flatColumns = _react.default.useMemo(function () {
    if ("development" === 'development' && debug) console.time('hooks.columnsBeforeHeaderGroups');
    var newColumns = applyHooks(instanceRef.current.hooks.columnsBeforeHeaderGroups, flattenBy(columns, 'columns'), instanceRef.current);
    if ("development" === 'development' && debug) console.timeEnd('hooks.columnsBeforeHeaderGroups');
    return newColumns;
  }, [columns, debug].concat(_toConsumableArray(applyHooks(instanceRef.current.hooks.columnsBeforeHeaderGroupsDeps, [], instanceRef.current)))); // Make the headerGroups


  var headerGroups = _react.default.useMemo(function () {
    return makeHeaderGroups(flatColumns, defaultColumn$$1);
  }, [defaultColumn$$1, flatColumns]);

  var headers = _react.default.useMemo(function () {
    return headerGroups[0].headers;
  }, [headerGroups]);

  Object.assign(instanceRef.current, {
    columns: columns,
    flatColumns: flatColumns,
    headerGroups: headerGroups,
    headers: headers
  }); // Access the row model

  var _React$useMemo = _react.default.useMemo(function () {
    if ("development" === 'development' && debug) console.time('getAccessedRows');
    var flatRows = []; // Access the row's data

    var accessRow = function accessRow(originalRow, i) {
      var depth = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
      var parentPath = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : []; // Keep the original reference around

      var original = originalRow;
      var rowID = getRowID(originalRow, i); // Make the new path for the row

      var path = [].concat(_toConsumableArray(parentPath), [rowID]);
      var row = {
        original: original,
        index: i,
        path: path,
        // used to create a key for each row even if not nested
        depth: depth,
        cells: [{}] // This is a dummy cell

      };
      flatRows.push(row); // Process any subRows

      var subRows = getSubRows(originalRow, i);

      if (subRows) {
        row.subRows = subRows.map(function (d, i) {
          return accessRow(d, i, depth + 1, path);
        });
      } // Override common array functions (and the dummy cell's getCellProps function)
      // to show an error if it is accessed without calling prepareRow


      var unpreparedAccessWarning = function unpreparedAccessWarning() {
        throw new Error('React-Table: You have not called prepareRow(row) one or more rows you are attempting to render.');
      };

      row.cells.map = unpreparedAccessWarning;
      row.cells.filter = unpreparedAccessWarning;
      row.cells.forEach = unpreparedAccessWarning;
      row.cells[0].getCellProps = unpreparedAccessWarning; // Create the cells and values

      row.values = {};
      flatColumns.forEach(function (column) {
        row.values[column.id] = column.accessor ? column.accessor(originalRow, i, {
          subRows: subRows,
          depth: depth,
          data: data
        }) : undefined;
      });
      return row;
    }; // Use the resolved data


    var accessedData = data.map(function (d, i) {
      return accessRow(d, i);
    });
    if ("development" === 'development' && debug) console.timeEnd('getAccessedRows');
    return [accessedData, flatRows];
  }, [debug, data, getRowID, getSubRows, flatColumns]),
      _React$useMemo2 = _slicedToArray(_React$useMemo, 2),
      rows = _React$useMemo2[0],
      flatRows = _React$useMemo2[1];

  instanceRef.current.rows = rows;
  instanceRef.current.flatRows = flatRows; // Determine column visibility

  determineHeaderVisibility(instanceRef.current); // Provide a flat header list for utilities

  instanceRef.current.flatHeaders = headerGroups.reduce(function (all, headerGroup) {
    return [].concat(_toConsumableArray(all), _toConsumableArray(headerGroup.headers));
  }, []);
  if ("development" === 'development' && debug) console.time('hooks.useBeforeDimensions');
  instanceRef.current = applyHooks(instanceRef.current.hooks.useBeforeDimensions, instanceRef.current);
  if ("development" === 'development' && debug) console.timeEnd('hooks.useBeforeDimensions');
  calculateDimensions(instanceRef.current);
  if ("development" === 'development' && debug) console.time('hooks.useMain');
  instanceRef.current = applyHooks(instanceRef.current.hooks.useMain, instanceRef.current);
  if ("development" === 'development' && debug) console.timeEnd('hooks.useMain'); // Each materialized header needs to be assigned a render function and other
  // prop getter properties here.

  instanceRef.current.flatHeaders.forEach(function (column) {
    // Give columns/headers rendering power
    column.render = function (type) {
      var userProps = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      var Comp = typeof type === 'string' ? column[type] : type;

      if (typeof Comp === 'undefined') {
        throw new Error(renderErr);
      }

      return flexRender(Comp, _objectSpread2({}, instanceRef.current, {
        column: column
      }, userProps));
    }; // Give columns/headers a default getHeaderProps


    column.getHeaderProps = function (props) {
      return mergeProps({
        key: ['header', column.id].join('_'),
        colSpan: column.totalVisibleHeaderCount
      }, applyPropHooks(instanceRef.current.hooks.getHeaderProps, column, instanceRef.current), props);
    };
  });
  instanceRef.current.headerGroups.forEach(function (headerGroup, i) {
    // Filter out any headers and headerGroups that don't have visible columns
    headerGroup.headers = headerGroup.headers.filter(function (header) {
      var recurse = function recurse(headers) {
        return headers.filter(function (header) {
          if (header.headers) {
            return recurse(header.headers);
          }

          return header.isVisible;
        }).length;
      };

      if (header.headers) {
        return recurse(header.headers);
      }

      return header.isVisible;
    }); // Give headerGroups getRowProps

    if (headerGroup.headers.length) {
      headerGroup.getHeaderGroupProps = function () {
        var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
        return mergeProps({
          key: ["header".concat(i)].join('_')
        }, applyPropHooks(instanceRef.current.hooks.getHeaderGroupProps, headerGroup, instanceRef.current), props);
      };

      return true;
    }
  }); // Run the rows (this could be a dangerous hook with a ton of data)

  if ("development" === 'development' && debug) console.time('hooks.useRows');
  instanceRef.current.rows = applyHooks(instanceRef.current.hooks.useRows, instanceRef.current.rows, instanceRef.current);
  if ("development" === 'development' && debug) console.timeEnd('hooks.useRows'); // The prepareRow function is absolutely necessary and MUST be called on
  // any rows the user wishes to be displayed.

  instanceRef.current.prepareRow = _react.default.useCallback(function (row) {
    row.getRowProps = function (props) {
      return mergeProps({
        key: ['row'].concat(_toConsumableArray(row.path)).join('_')
      }, applyPropHooks(instanceRef.current.hooks.getRowProps, row, instanceRef.current), props);
    }; // Build the visible cells for each row


    row.cells = instanceRef.current.flatColumns.filter(function (d) {
      return d.isVisible;
    }).map(function (column) {
      var cell = {
        column: column,
        row: row,
        value: row.values[column.id] // Give each cell a getCellProps base

      };

      cell.getCellProps = function (props) {
        var columnPathStr = [].concat(_toConsumableArray(row.path), [column.id]).join('_');
        return mergeProps({
          key: ['cell', columnPathStr].join('_')
        }, applyPropHooks(instanceRef.current.hooks.getCellProps, cell, instanceRef.current), props);
      }; // Give each cell a renderer function (supports multiple renderers)


      cell.render = function (type) {
        var userProps = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        var Comp = typeof type === 'string' ? column[type] : type;

        if (typeof Comp === 'undefined') {
          throw new Error(renderErr);
        }

        return flexRender(Comp, _objectSpread2({}, instanceRef.current, {
          column: column,
          row: row,
          cell: cell
        }, userProps));
      };

      return cell;
    }); // need to apply any row specific hooks (useExpanded requires this)

    applyHooks(instanceRef.current.hooks.prepareRow, row, instanceRef.current);
  }, []);

  instanceRef.current.getTableProps = function (userProps) {
    return mergeProps(applyPropHooks(instanceRef.current.hooks.getTableProps, instanceRef.current), userProps);
  };

  instanceRef.current.getTableBodyProps = function (userProps) {
    return mergeProps(applyPropHooks(instanceRef.current.hooks.getTableBodyProps, instanceRef.current), userProps);
  };

  return instanceRef.current;
};

exports.useTable = useTable;

function calculateDimensions(instance) {
  var headers = instance.headers;
  instance.totalColumnsWidth = calculateHeaderWidths(headers);
}

function calculateHeaderWidths(headers) {
  var left = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  var sumTotalWidth = 0;
  headers.forEach(function (header) {
    var subHeaders = header.headers;
    header.totalLeft = left;

    if (subHeaders && subHeaders.length) {
      header.totalWidth = calculateHeaderWidths(subHeaders, left);
    } else {
      header.totalWidth = Math.min(Math.max(header.minWidth, header.width), header.maxWidth);
    }

    left += header.totalWidth;
    sumTotalWidth += header.totalWidth;
  });
  return sumTotalWidth;
}

var actions = {};
exports.actions = actions;

var addActions = function addActions() {
  for (var _len = arguments.length, acts = new Array(_len), _key = 0; _key < _len; _key++) {
    acts[_key] = arguments[_key];
  }

  acts.forEach(function (action) {
    // Action values are formatted this way to discourage
    // you (the dev) from interacting with them in any way
    // other than importing `{ actions } from 'react-table'`
    // and referencing an action via `actions[actionName]`
    actions[action] = "React Table Action: ".concat(action);
  });
};

exports.addActions = addActions;
defaultState.expanded = [];
addActions('toggleExpanded', 'useExpanded');
var propTypes$1 = {
  manualExpandedKey: _propTypes.default.string,
  paginateExpandedRows: _propTypes.default.bool
};

var useExpanded = function useExpanded(hooks) {
  hooks.getExpandedToggleProps = [];
  hooks.useMain.push(useMain);
};

exports.useExpanded = useExpanded;
useExpanded.pluginName = 'useExpanded';

function useMain(instance) {
  _propTypes.default.checkPropTypes(propTypes$1, instance, 'property', 'useExpanded');

  var debug = instance.debug,
      rows = instance.rows,
      _instance$manualExpan = instance.manualExpandedKey,
      manualExpandedKey = _instance$manualExpan === void 0 ? 'expanded' : _instance$manualExpan,
      _instance$paginateExp = instance.paginateExpandedRows,
      paginateExpandedRows = _instance$paginateExp === void 0 ? true : _instance$paginateExp,
      _instance$expandSubRo = instance.expandSubRows,
      expandSubRows = _instance$expandSubRo === void 0 ? true : _instance$expandSubRo,
      hooks = instance.hooks,
      expanded = instance.state.expanded,
      setState = instance.setState;

  var toggleExpandedByPath = function toggleExpandedByPath(path, set) {
    var key = path.join('.');
    return setState(function (old) {
      var exists = old.expanded.includes(key);
      var shouldExist = typeof set !== 'undefined' ? set : !exists;
      var newExpanded = new Set(old.expanded);

      if (!exists && shouldExist) {
        newExpanded.add(key);
      } else if (exists && !shouldExist) {
        newExpanded.delete(key);
      } else {
        return old;
      }

      return _objectSpread2({}, old, {
        expanded: _toConsumableArray(newExpanded.values())
      });
    }, actions.toggleExpanded);
  };

  hooks.prepareRow.push(function (row) {
    row.toggleExpanded = function (set) {
      return toggleExpandedByPath(row.path, set);
    };

    row.getExpandedToggleProps = function (props) {
      return mergeProps({
        onClick: function onClick(e) {
          e.persist();
          row.toggleExpanded();
        },
        style: {
          cursor: 'pointer'
        },
        title: 'Toggle Expanded'
      }, applyPropHooks(instance.hooks.getExpandedToggleProps, row, instance), props);
    };

    return row;
  });
  var expandedRows = (0, _react.useMemo)(function () {
    if ("development" === 'development' && debug) console.info('getExpandedRows');

    if (paginateExpandedRows) {
      return expandRows(rows, {
        manualExpandedKey: manualExpandedKey,
        expanded: expanded,
        expandSubRows: expandSubRows
      });
    }

    return rows;
  }, [debug, paginateExpandedRows, rows, manualExpandedKey, expanded, expandSubRows]);
  var expandedDepth = findExpandedDepth(expanded);
  return _objectSpread2({}, instance, {
    toggleExpandedByPath: toggleExpandedByPath,
    expandedDepth: expandedDepth,
    rows: expandedRows
  });
}

function findExpandedDepth(expanded) {
  var maxDepth = 0;
  expanded.forEach(function (key) {
    var path = key.split('.');
    maxDepth = Math.max(maxDepth, path.length);
  });
  return maxDepth;
}

var text = function text(rows, id, filterValue) {
  rows = rows.filter(function (row) {
    var rowValue = row.values[id];
    return String(rowValue).toLowerCase().includes(String(filterValue).toLowerCase());
  });
  return rows;
};

text.autoRemove = function (val) {
  return !val;
};

var exactText = function exactText(rows, id, filterValue) {
  return rows.filter(function (row) {
    var rowValue = row.values[id];
    return rowValue !== undefined ? String(rowValue).toLowerCase() === String(filterValue).toLowerCase() : true;
  });
};

exactText.autoRemove = function (val) {
  return !val;
};

var exactTextCase = function exactTextCase(rows, id, filterValue) {
  return rows.filter(function (row) {
    var rowValue = row.values[id];
    return rowValue !== undefined ? String(rowValue) === String(filterValue) : true;
  });
};

exactTextCase.autoRemove = function (val) {
  return !val;
};

var includes = function includes(rows, id, filterValue) {
  return rows.filter(function (row) {
    var rowValue = row.values[id];
    return filterValue.includes(rowValue);
  });
};

includes.autoRemove = function (val) {
  return !val || !val.length;
};

var includesAll = function includesAll(rows, id, filterValue) {
  return rows.filter(function (row) {
    var rowValue = row.values[id];
    return rowValue && rowValue.length && filterValue.every(function (val) {
      return rowValue.includes(val);
    });
  });
};

includesAll.autoRemove = function (val) {
  return !val || !val.length;
};

var exact = function exact(rows, id, filterValue) {
  return rows.filter(function (row) {
    var rowValue = row.values[id];
    return rowValue === filterValue;
  });
};

exact.autoRemove = function (val) {
  return typeof val === 'undefined';
};

var equals = function equals(rows, id, filterValue) {
  return rows.filter(function (row) {
    var rowValue = row.values[id]; // eslint-disable-next-line eqeqeq

    return rowValue == filterValue;
  });
};

equals.autoRemove = function (val) {
  return val == null;
};

var between = function between(rows, id, filterValue) {
  var _ref = filterValue || [],
      _ref2 = _slicedToArray(_ref, 2),
      min = _ref2[0],
      max = _ref2[1];

  min = typeof min === 'number' ? min : -Infinity;
  max = typeof max === 'number' ? max : Infinity;

  if (min > max) {
    var temp = min;
    min = max;
    max = temp;
  }

  return rows.filter(function (row) {
    var rowValue = row.values[id];
    return rowValue >= min && rowValue <= max;
  });
};

between.autoRemove = function (val) {
  return !val || typeof val[0] !== 'number' && typeof val[1] !== 'number';
};

var filterTypes =
/*#__PURE__*/
Object.freeze({
  text: text,
  exactText: exactText,
  exactTextCase: exactTextCase,
  includes: includes,
  includesAll: includesAll,
  exact: exact,
  equals: equals,
  between: between
});
defaultState.filters = {};
addActions('setFilter', 'setAllFilters');
var propTypes$2 = {
  columns: _propTypes.default.arrayOf(_propTypes.default.shape({
    disableFilters: _propTypes.default.bool,
    Filter: _propTypes.default.any
  })),
  manualFilters: _propTypes.default.bool
};

var useFilters = function useFilters(hooks) {
  hooks.useMain.push(useMain$1);
};

exports.useFilters = useFilters;
useFilters.pluginName = 'useFilters';

function useMain$1(instance) {
  _propTypes.default.checkPropTypes(propTypes$2, instance, 'property', 'useFilters');

  var debug = instance.debug,
      rows = instance.rows,
      flatRows = instance.flatRows,
      flatColumns = instance.flatColumns,
      userFilterTypes = instance.filterTypes,
      manualFilters = instance.manualFilters,
      disableFilters = instance.disableFilters,
      filters = instance.state.filters,
      setState = instance.setState;
  var preFilteredRows = rows;
  var preFilteredFlatRows = flatRows;

  var setFilter = function setFilter(id, updater) {
    var column = flatColumns.find(function (d) {
      return d.id === id;
    });

    if (!column) {
      throw new Error("React-Table: Could not find a column with id: ".concat(id));
    }

    var filterMethod = getFilterMethod(column.filter, userFilterTypes || {}, filterTypes);
    return setState(function (old) {
      var newFilter = typeof updater === 'function' ? updater(old.filters[id]) : updater; //

      if (shouldAutoRemove(filterMethod.autoRemove, newFilter)) {
        var _old$filters = old.filters,
            remove = _old$filters[id],
            newFilters = _objectWithoutProperties(_old$filters, [id].map(_toPropertyKey));

        return _objectSpread2({}, old, {
          filters: newFilters
        });
      }

      return _objectSpread2({}, old, {
        filters: _objectSpread2({}, old.filters, _defineProperty({}, id, newFilter))
      });
    }, actions.setFilter);
  };

  var setAllFilters = function setAllFilters(updater) {
    return setState(function (old) {
      var newFilters = typeof updater === 'function' ? updater(old) : updater; // Filter out undefined values

      Object.keys(newFilters).forEach(function (id) {
        var newFilter = newFilters[id];
        var column = flatColumns.find(function (d) {
          return d.id === id;
        });
        var filterMethod = getFilterMethod(column.filter, userFilterTypes || {}, filterTypes);

        if (shouldAutoRemove(filterMethod.autoRemove, newFilter)) {
          delete newFilters[id];
        }
      });
      return _objectSpread2({}, old, {
        filters: newFilters
      });
    }, actions.setAllFilters);
  };

  flatColumns.forEach(function (column) {
    var id = column.id,
        accessor = column.accessor,
        columnDisableFilters = column.disableFilters; // Determine if a column is filterable

    column.canFilter = accessor ? getFirstDefined(columnDisableFilters === true ? false : undefined, disableFilters === true ? false : undefined, true) : false; // Provide the column a way of updating the filter value

    column.setFilter = function (val) {
      return setFilter(column.id, val);
    }; // Provide the current filter value to the column for
    // convenience


    column.filterValue = filters[id];
  }); // TODO: Create a filter cache for incremental high speed multi-filtering
  // This gets pretty complicated pretty fast, since you have to maintain a
  // cache for each row group (top-level rows, and each row's recursive subrows)
  // This would make multi-filtering a lot faster though. Too far?

  var _React$useMemo = _react.default.useMemo(function () {
    if (manualFilters || !Object.keys(filters).length) {
      return {
        filteredRows: rows,
        filteredFlatRows: flatRows
      };
    }

    var filteredFlatRows = [];
    if ("development" === 'development' && debug) console.info('getFilteredRows'); // Filters top level and nested rows

    var filterRows = function filterRows(rows) {
      var depth = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
      var filteredRows = rows;
      filteredRows = Object.entries(filters).reduce(function (filteredSoFar, _ref) {
        var _ref2 = _slicedToArray(_ref, 2),
            columnID = _ref2[0],
            filterValue = _ref2[1]; // Find the filters column


        var column = flatColumns.find(function (d) {
          return d.id === columnID;
        });

        if (!column) {
          return filteredSoFar;
        }

        if (depth === 0) {
          column.preFilteredRows = filteredSoFar;
        }

        var filterMethod = getFilterMethod(column.filter, userFilterTypes || {}, filterTypes);

        if (!filterMethod) {
          console.warn("Could not find a valid 'column.filter' for column with the ID: ".concat(column.id, "."));
          return filteredSoFar;
        } // Pass the rows, id, filterValue and column to the filterMethod
        // to get the filtered rows back


        column.filteredRows = filterMethod(filteredSoFar, columnID, filterValue, column);
        return column.filteredRows;
      }, rows); // Apply the filter to any subRows
      // We technically could do this recursively in the above loop,
      // but that would severely hinder the API for the user, since they
      // would be required to do that recursion in some scenarios

      filteredRows = filteredRows.map(function (row) {
        filteredFlatRows.push(row);

        if (!row.subRows) {
          return row;
        }

        return _objectSpread2({}, row, {
          subRows: row.subRows && row.subRows.length > 0 ? filterRows(row.subRows, depth + 1) : row.subRows
        });
      });
      return filteredRows;
    };

    return {
      filteredRows: filterRows(rows),
      filteredFlatRows: filteredFlatRows
    };
  }, [manualFilters, filters, debug, rows, flatRows, flatColumns, userFilterTypes]),
      filteredRows = _React$useMemo.filteredRows,
      filteredFlatRows = _React$useMemo.filteredFlatRows;

  _react.default.useMemo(function () {
    // Now that each filtered column has it's partially filtered rows,
    // lets assign the final filtered rows to all of the other columns
    var nonFilteredColumns = flatColumns.filter(function (column) {
      return !Object.keys(filters).includes(column.id);
    }); // This essentially enables faceted filter options to be built easily
    // using every column's preFilteredRows value

    nonFilteredColumns.forEach(function (column) {
      column.preFilteredRows = filteredRows;
      column.filteredRows = filteredRows;
    });
  }, [filteredRows, filters, flatColumns]);

  return _objectSpread2({}, instance, {
    setFilter: setFilter,
    setAllFilters: setAllFilters,
    preFilteredRows: preFilteredRows,
    preFilteredFlatRows: preFilteredFlatRows,
    rows: filteredRows,
    flatRows: filteredFlatRows
  });
}

function shouldAutoRemove(autoRemove, value) {
  return autoRemove ? autoRemove(value) : typeof value === 'undefined';
}

function getFilterMethod(filter, userFilterTypes, filterTypes) {
  return isFunction(filter) || userFilterTypes[filter] || filterTypes[filter] || filterTypes.text;
}

function sum$1(values, rows) {
  return values.reduce(function (sum, next) {
    return sum + next;
  }, 0);
}

function average(values, rows) {
  return Math.round(sum$1(values, rows) / values.length * 100) / 100;
}

function median(values) {
  var min = values[0] || '';
  var max = values[0] || '';
  values.forEach(function (value) {
    min = Math.min(min, value);
    max = Math.max(max, value);
  });
  return (min + max) / 2;
}

function uniqueCount(values) {
  return new Set(values).size;
}

function count(values) {
  return values.length;
}

var aggregations =
/*#__PURE__*/
Object.freeze({
  sum: sum$1,
  average: average,
  median: median,
  uniqueCount: uniqueCount,
  count: count
});
defaultState.groupBy = [];
addActions('toggleGroupBy');
var propTypes$3 = {
  // General
  columns: _propTypes.default.arrayOf(_propTypes.default.shape({
    aggregate: _propTypes.default.oneOfType([_propTypes.default.func, _propTypes.default.string, _propTypes.default.arrayOf(_propTypes.default.oneOfType([_propTypes.default.func, _propTypes.default.string]))]),
    disableGrouping: _propTypes.default.bool,
    Aggregated: _propTypes.default.any
  })),
  groupByFn: _propTypes.default.func,
  manualGrouping: _propTypes.default.bool,
  disableGrouping: _propTypes.default.bool,
  aggregations: _propTypes.default.object
};

var useGroupBy = function useGroupBy(hooks) {
  hooks.columnsBeforeHeaderGroups.push(columnsBeforeHeaderGroups);
  hooks.columnsBeforeHeaderGroupsDeps.push(function (deps, instance) {
    deps.push(instance.state.groupBy);
    return deps;
  });
  hooks.useMain.push(useMain$2);
};

exports.useGroupBy = useGroupBy;
useGroupBy.pluginName = 'useGroupBy';

function columnsBeforeHeaderGroups(flatColumns, _ref) {
  var groupBy = _ref.state.groupBy; // Sort grouped columns to the start of the column list
  // before the headers are built

  var groupByColumns = groupBy.map(function (g) {
    return flatColumns.find(function (col) {
      return col.id === g;
    });
  });
  var nonGroupByColumns = flatColumns.filter(function (col) {
    return !groupBy.includes(col.id);
  }); // If a groupByBoundary column is found, place the groupBy's after it

  var groupByBoundaryColumnIndex = flatColumns.findIndex(function (column) {
    return column.groupByBoundary;
  }) + 1;
  return [].concat(_toConsumableArray(nonGroupByColumns.slice(0, groupByBoundaryColumnIndex)), _toConsumableArray(groupByColumns), _toConsumableArray(nonGroupByColumns.slice(groupByBoundaryColumnIndex)));
}

function useMain$2(instance) {
  _propTypes.default.checkPropTypes(propTypes$3, instance, 'property', 'useGroupBy');

  var debug = instance.debug,
      rows = instance.rows,
      flatColumns = instance.flatColumns,
      flatHeaders = instance.flatHeaders,
      _instance$groupByFn = instance.groupByFn,
      groupByFn = _instance$groupByFn === void 0 ? defaultGroupByFn : _instance$groupByFn,
      manualGroupBy = instance.manualGroupBy,
      disableGrouping = instance.disableGrouping,
      _instance$aggregation = instance.aggregations,
      userAggregations = _instance$aggregation === void 0 ? {} : _instance$aggregation,
      hooks = instance.hooks,
      plugins = instance.plugins,
      groupBy = instance.state.groupBy,
      setState = instance.setState;
  ensurePluginOrder(plugins, [], 'useGroupBy', ['useSortBy', 'useExpanded']);
  flatColumns.forEach(function (column) {
    var id = column.id,
        accessor = column.accessor,
        columnDisableGrouping = column.disableGrouping;
    column.isGrouped = groupBy.includes(id);
    column.groupedIndex = groupBy.indexOf(id);
    column.canGroupBy = accessor ? getFirstDefined(columnDisableGrouping, disableGrouping === true ? false : undefined, true) : false;

    if (column.canGroupBy) {
      column.toggleGroupBy = function () {
        return toggleGroupBy(column.id);
      };
    }

    column.Aggregated = column.Aggregated || column.Cell;
  });

  var toggleGroupBy = function toggleGroupBy(id, toggle) {
    return setState(function (old) {
      var resolvedToggle = typeof toggle !== 'undefined' ? toggle : !groupBy.includes(id);

      if (resolvedToggle) {
        return _objectSpread2({}, old, {
          groupBy: [].concat(_toConsumableArray(groupBy), [id])
        });
      }

      return _objectSpread2({}, old, {
        groupBy: groupBy.filter(function (d) {
          return d !== id;
        })
      });
    }, actions.toggleGroupBy);
  };

  hooks.getGroupByToggleProps = [];
  flatHeaders.forEach(function (header) {
    var canGroupBy = header.canGroupBy;

    header.getGroupByToggleProps = function (props) {
      return mergeProps({
        onClick: canGroupBy ? function (e) {
          e.persist();
          header.toggleGroupBy();
        } : undefined,
        style: {
          cursor: canGroupBy ? 'pointer' : undefined
        },
        title: 'Toggle GroupBy'
      }, applyPropHooks(instance.hooks.getGroupByToggleProps, header, instance), props);
    };
  });
  hooks.prepareRow.push(function (row) {
    row.cells.forEach(function (cell) {
      // Grouped cells are in the groupBy and the pivot cell for the row
      cell.isGrouped = cell.column.isGrouped && cell.column.id === row.groupByID; // Repeated cells are any columns in the groupBy that are not grouped

      cell.isRepeatedValue = !cell.isGrouped && cell.column.isGrouped; // Aggregated cells are not grouped, not repeated, but still have subRows

      cell.isAggregated = !cell.isGrouped && !cell.isRepeatedValue && row.canExpand;
    });
    return row;
  });
  var groupedRows = (0, _react.useMemo)(function () {
    if (manualGroupBy || !groupBy.length) {
      return rows;
    }

    if ("development" === 'development' && debug) console.info('getGroupedRows'); // Find the columns that can or are aggregating
    // Uses each column to aggregate rows into a single value

    var aggregateRowsToValues = function aggregateRowsToValues(rows, isSourceRows) {
      var values = {};
      flatColumns.forEach(function (column) {
        // Don't aggregate columns that are in the groupBy
        if (groupBy.includes(column.id)) {
          values[column.id] = rows[0] ? rows[0].values[column.id] : null;
          return;
        }

        var columnValues = rows.map(function (d) {
          return d.values[column.id];
        });
        var aggregator = column.aggregate;

        if (Array.isArray(aggregator)) {
          if (aggregator.length !== 2) {
            console.info({
              column: column
            });
            throw new Error("React Table: Complex aggregators must have 2 values, eg. aggregate: ['sum', 'count']. More info above...");
          }

          if (isSourceRows) {
            aggregator = aggregator[1];
          } else {
            aggregator = aggregator[0];
          }
        }

        var aggregateFn = typeof aggregator === 'function' ? aggregator : userAggregations[aggregator] || aggregations[aggregator];

        if (aggregateFn) {
          values[column.id] = aggregateFn(columnValues, rows);
        } else if (aggregator) {
          console.info({
            column: column
          });
          throw new Error("React Table: Invalid aggregate option for column listed above");
        } else {
          values[column.id] = null;
        }
      });
      return values;
    }; // Recursively group the data


    var groupRecursively = function groupRecursively(rows) {
      var depth = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
      var parentPath = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : []; // This is the last level, just return the rows

      if (depth >= groupBy.length) {
        return rows;
      }

      var columnID = groupBy[depth]; // Group the rows together for this level

      var groupedRows = groupByFn(rows, columnID); // Recurse to sub rows before aggregation

      groupedRows = Object.entries(groupedRows).map(function (_ref2, index) {
        var _ref3 = _slicedToArray(_ref2, 2),
            groupByVal = _ref3[0],
            subRows = _ref3[1];

        var path = [].concat(_toConsumableArray(parentPath), ["".concat(columnID, ":").concat(groupByVal)]);
        subRows = groupRecursively(subRows, depth + 1, path);
        var values = aggregateRowsToValues(subRows, depth + 1 >= groupBy.length);
        var row = {
          isAggregated: true,
          groupByID: columnID,
          groupByVal: groupByVal,
          values: values,
          subRows: subRows,
          depth: depth,
          index: index,
          path: path
        };
        return row;
      });
      return groupedRows;
    }; // Assign the new data


    return groupRecursively(rows);
  }, [manualGroupBy, groupBy, debug, rows, flatColumns, userAggregations, groupByFn]);
  return _objectSpread2({}, instance, {
    toggleGroupBy: toggleGroupBy,
    rows: groupedRows,
    preGroupedRows: rows
  });
}

var reSplitAlphaNumeric = /([0-9]+)/gm; // Mixed sorting is slow, but very inclusive of many edge cases.
// It handles numbers, mixed alphanumeric combinations, and even
// null, undefined, and Infinity

var alphanumeric = function alphanumeric(rowA, rowB, columnID) {
  var a = getRowValueByColumnID(rowA, columnID);
  var b = getRowValueByColumnID(rowB, columnID); // Force to strings (or "" for unsupported types)

  a = toString(a);
  b = toString(b); // Split on number groups, but keep the delimiter
  // Then remove falsey split values

  a = a.split(reSplitAlphaNumeric).filter(Boolean);
  b = b.split(reSplitAlphaNumeric).filter(Boolean); // While

  while (a.length && b.length) {
    var aa = a.shift();
    var bb = b.shift();
    var an = parseInt(aa, 10);
    var bn = parseInt(bb, 10);
    var combo = [an, bn].sort(); // Both are string

    if (isNaN(combo[0])) {
      if (aa > bb) {
        return 1;
      }

      if (bb > aa) {
        return -1;
      }

      continue;
    } // One is a string, one is a number


    if (isNaN(combo[1])) {
      return isNaN(an) ? -1 : 1;
    } // Both are numbers


    if (an > bn) {
      return 1;
    }

    if (bn > an) {
      return -1;
    }
  }

  return a.length - b.length;
};

function datetime(rowA, rowB, columnID) {
  var a = getRowValueByColumnID(rowA, columnID);
  var b = getRowValueByColumnID(rowB, columnID);
  a = a.getTime();
  b = b.getTime();
  return compareBasic(a, b);
}

function basic(rowA, rowB, columnID) {
  var a = getRowValueByColumnID(rowA, columnID);
  var b = getRowValueByColumnID(rowB, columnID);
  return compareBasic(a, b);
} // Utils


function compareBasic(a, b) {
  return a === b ? 0 : a > b ? 1 : -1;
}

function getRowValueByColumnID(row, columnID) {
  return row.values[columnID];
}

function toString(a) {
  if (typeof a === 'number') {
    if (isNaN(a) || a === Infinity || a === -Infinity) {
      return '';
    }

    return String(a);
  }

  if (typeof a === 'string') {
    return a;
  }

  return '';
}

var sortTypes =
/*#__PURE__*/
Object.freeze({
  alphanumeric: alphanumeric,
  datetime: datetime,
  basic: basic
});
defaultState.sortBy = [];
defaultColumn.sortType = 'alphanumeric';
defaultColumn.sortDescFirst = false;
addActions('sortByChange');
var propTypes$4 = {
  // General
  columns: _propTypes.default.arrayOf(_propTypes.default.shape({
    sortType: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.func]),
    sortDescFirst: _propTypes.default.bool,
    disableSorting: _propTypes.default.bool
  })),
  orderByFn: _propTypes.default.func,
  sortTypes: _propTypes.default.object,
  manualSorting: _propTypes.default.bool,
  disableSorting: _propTypes.default.bool,
  disableMultiSort: _propTypes.default.bool,
  isMultiSortEvent: _propTypes.default.func,
  maxMultiSortColCount: _propTypes.default.number,
  disableSortRemove: _propTypes.default.bool,
  disableMultiRemove: _propTypes.default.bool
};

var useSortBy = function useSortBy(hooks) {
  hooks.useMain.push(useMain$3);
};

exports.useSortBy = useSortBy;
useSortBy.pluginName = 'useSortBy';

function useMain$3(instance) {
  _propTypes.default.checkPropTypes(propTypes$4, instance, 'property', 'useSortBy');

  var debug = instance.debug,
      rows = instance.rows,
      flatColumns = instance.flatColumns,
      _instance$orderByFn = instance.orderByFn,
      orderByFn = _instance$orderByFn === void 0 ? defaultOrderByFn : _instance$orderByFn,
      userSortTypes = instance.sortTypes,
      manualSorting = instance.manualSorting,
      disableSorting = instance.disableSorting,
      disableSortRemove = instance.disableSortRemove,
      disableMultiRemove = instance.disableMultiRemove,
      disableMultiSort = instance.disableMultiSort,
      _instance$isMultiSort = instance.isMultiSortEvent,
      isMultiSortEvent = _instance$isMultiSort === void 0 ? function (e) {
    return e.shiftKey;
  } : _instance$isMultiSort,
      _instance$maxMultiSor = instance.maxMultiSortColCount,
      maxMultiSortColCount = _instance$maxMultiSor === void 0 ? Number.MAX_SAFE_INTEGER : _instance$maxMultiSor,
      flatHeaders = instance.flatHeaders,
      hooks = instance.hooks,
      sortBy = instance.state.sortBy,
      setState = instance.setState,
      plugins = instance.plugins;
  ensurePluginOrder(plugins, ['useFilters'], 'useSortBy', []); // Add custom hooks

  hooks.getSortByToggleProps = []; // Updates sorting based on a columnID, desc flag and multi flag

  var toggleSortBy = function toggleSortBy(columnID, desc, multi) {
    return setState(function (old) {
      var sortBy = old.sortBy; // Find the column for this columnID

      var column = flatColumns.find(function (d) {
        return d.id === columnID;
      });
      var sortDescFirst = column.sortDescFirst; // Find any existing sortBy for this column

      var existingSortBy = sortBy.find(function (d) {
        return d.id === columnID;
      });
      var existingIndex = sortBy.findIndex(function (d) {
        return d.id === columnID;
      });
      var hasDescDefined = typeof desc !== 'undefined' && desc !== null;
      var newSortBy = []; // What should we do with this sort action?

      var action;

      if (!disableMultiSort && multi) {
        if (existingSortBy) {
          action = 'toggle';
        } else {
          action = 'add';
        }
      } else {
        // Normal mode
        if (existingIndex !== sortBy.length - 1) {
          action = 'replace';
        } else if (existingSortBy) {
          action = 'toggle';
        } else {
          action = 'replace';
        }
      } // Handle toggle states that will remove the sortBy


      if (action === 'toggle' && // Must be toggling
      !disableSortRemove && // If disableSortRemove, disable in general
      !hasDescDefined && ( // Must not be setting desc
      multi ? !disableMultiRemove : true) && ( // If multi, don't allow if disableMultiRemove
      existingSortBy && // Finally, detect if it should indeed be removed
      existingSortBy.desc && !sortDescFirst || !existingSortBy.desc && sortDescFirst)) {
        action = 'remove';
      }

      if (action === 'replace') {
        newSortBy = [{
          id: columnID,
          desc: hasDescDefined ? desc : sortDescFirst
        }];
      } else if (action === 'add') {
        newSortBy = [].concat(_toConsumableArray(sortBy), [{
          id: columnID,
          desc: hasDescDefined ? desc : sortDescFirst
        }]); // Take latest n columns

        newSortBy.splice(0, newSortBy.length - maxMultiSortColCount);
      } else if (action === 'toggle') {
        // This flips (or sets) the
        newSortBy = sortBy.map(function (d) {
          if (d.id === columnID) {
            return _objectSpread2({}, d, {
              desc: hasDescDefined ? desc : !existingSortBy.desc
            });
          }

          return d;
        });
      } else if (action === 'remove') {
        newSortBy = sortBy.filter(function (d) {
          return d.id !== columnID;
        });
      }

      return _objectSpread2({}, old, {
        sortBy: newSortBy
      });
    }, actions.sortByChange);
  }; // Add the getSortByToggleProps method to columns and headers


  flatHeaders.forEach(function (column) {
    var accessor = column.accessor,
        columnDisableSorting = column.disableSorting,
        id = column.id;
    var canSort = accessor ? getFirstDefined(columnDisableSorting === true ? false : undefined, disableSorting === true ? false : undefined, true) : false;
    column.canSort = canSort;

    if (column.canSort) {
      column.toggleSortBy = function (desc, multi) {
        return toggleSortBy(column.id, desc, multi);
      };

      column.clearSorting = function () {
        return setState(function (old) {
          var sortBy = old.sortBy;
          var newSortBy = sortBy.filter(function (d) {
            return d.id !== column.id;
          });
          return _objectSpread2({}, old, {
            sortBy: newSortBy
          });
        }, actions.sortByChange);
      };
    }

    column.getSortByToggleProps = function (props) {
      return mergeProps({
        onClick: canSort ? function (e) {
          e.persist();
          column.toggleSortBy(undefined, !instance.disableMultiSort && isMultiSortEvent(e));
        } : undefined,
        style: {
          cursor: canSort ? 'pointer' : undefined
        },
        title: 'Toggle SortBy'
      }, applyPropHooks(instance.hooks.getSortByToggleProps, column, instance), props);
    };

    var columnSort = sortBy.find(function (d) {
      return d.id === id;
    });
    column.isSorted = !!columnSort;
    column.sortedIndex = sortBy.findIndex(function (d) {
      return d.id === id;
    });
    column.isSortedDesc = column.isSorted ? columnSort.desc : undefined;
  });

  var sortedRows = _react.default.useMemo(function () {
    if (manualSorting || !sortBy.length) {
      return rows;
    }

    if ("development" === 'development' && debug) console.time('getSortedRows'); // Filter out sortBys that correspond to non existing columns

    var availableSortBy = sortBy.filter(function (sort) {
      return flatColumns.find(function (col) {
        return col.id === sort.id;
      });
    });

    var sortData = function sortData(rows) {
      // Use the orderByFn to compose multiple sortBy's together.
      // This will also perform a stable sorting using the row index
      // if needed.
      var sortedData = orderByFn(rows, availableSortBy.map(function (sort) {
        // Support custom sorting methods for each column
        var column = flatColumns.find(function (d) {
          return d.id === sort.id;
        });

        if (!column) {
          throw new Error("React-Table: Could not find a column with id: ".concat(sort.id, " while sorting"));
        }

        var sortType = column.sortType; // Look up sortBy functions in this order:
        // column function
        // column string lookup on user sortType
        // column string lookup on built-in sortType
        // default function
        // default string lookup on user sortType
        // default string lookup on built-in sortType

        var sortMethod = isFunction(sortType) || (userSortTypes || {})[sortType] || sortTypes[sortType];

        if (!sortMethod) {
          throw new Error("React-Table: Could not find a valid sortType of '".concat(sortType, "' for column '").concat(sort.id, "'."));
        } // Return the correct sortFn.
        // This function should always return in ascending order


        return function (a, b) {
          return sortMethod(a, b, sort.id);
        };
      }), // Map the directions
      availableSortBy.map(function (sort) {
        // Detect and use the sortInverted option
        var column = flatColumns.find(function (d) {
          return d.id === sort.id;
        });

        if (column && column.sortInverted) {
          return sort.desc;
        }

        return !sort.desc;
      })); // If there are sub-rows, sort them

      sortedData.forEach(function (row) {
        if (!row.subRows || row.subRows.length <= 1) {
          return;
        }

        row.subRows = sortData(row.subRows);
      });
      return sortedData;
    };

    if ("development" === 'development' && debug) console.timeEnd('getSortedRows');
    return sortData(rows);
  }, [manualSorting, sortBy, debug, rows, flatColumns, orderByFn, userSortTypes]);

  return _objectSpread2({}, instance, {
    toggleSortBy: toggleSortBy,
    rows: sortedRows,
    preSortedRows: rows
  });
}

defaultState.pageSize = 10;
defaultState.pageIndex = 0;
addActions('pageChange', 'pageSizeChange');
var propTypes$5 = {
  // General
  manualPagination: _propTypes.default.bool,
  paginateExpandedRows: _propTypes.default.bool
};

var usePagination = function usePagination(hooks) {
  hooks.useMain.push(useMain$4);
};

exports.usePagination = usePagination;
usePagination.pluginName = 'usePagination';

function useMain$4(instance) {
  _propTypes.default.checkPropTypes(propTypes$5, instance, 'property', 'usePagination');

  var data = instance.data,
      rows = instance.rows,
      manualPagination = instance.manualPagination,
      disablePageResetOnDataChange = instance.disablePageResetOnDataChange,
      _instance$manualExpan = instance.manualExpandedKey,
      manualExpandedKey = _instance$manualExpan === void 0 ? 'expanded' : _instance$manualExpan,
      debug = instance.debug,
      plugins = instance.plugins,
      userPageCount = instance.pageCount,
      _instance$paginateExp = instance.paginateExpandedRows,
      paginateExpandedRows = _instance$paginateExp === void 0 ? true : _instance$paginateExp,
      _instance$expandSubRo = instance.expandSubRows,
      expandSubRows = _instance$expandSubRo === void 0 ? true : _instance$expandSubRo,
      _instance$state = instance.state,
      pageSize = _instance$state.pageSize,
      pageIndex = _instance$state.pageIndex,
      filters = _instance$state.filters,
      groupBy = _instance$state.groupBy,
      sortBy = _instance$state.sortBy,
      expanded = _instance$state.expanded,
      setState = instance.setState;
  ensurePluginOrder(plugins, ['useFilters', 'useGroupBy', 'useSortBy', 'useExpanded'], 'usePagination', []);
  var rowDep = manualPagination ? null : data;

  var isPageIndexMountedRef = _react.default.useRef(); // Bypass any effects from firing when this changes


  var disablePageResetOnDataChangeRef = _react.default.useRef();

  disablePageResetOnDataChangeRef.current = disablePageResetOnDataChange;
  safeUseLayoutEffect(function () {
    if (isPageIndexMountedRef.current && !disablePageResetOnDataChangeRef.current) {
      setState(function (old) {
        return _objectSpread2({}, old, {
          pageIndex: 0
        });
      }, actions.pageChange);
    }

    isPageIndexMountedRef.current = true;
  }, [setState, rowDep, filters, groupBy, sortBy]);
  var pageCount = manualPagination ? userPageCount : Math.ceil(rows.length / pageSize);

  var pageOptions = _react.default.useMemo(function () {
    return pageCount > 0 ? _toConsumableArray(new Array(pageCount)).map(function (d, i) {
      return i;
    }) : [];
  }, [pageCount]);

  var page = _react.default.useMemo(function () {
    var page;

    if (manualPagination) {
      page = rows;
    } else {
      if ("development" === 'development' && debug) console.info('getPage');
      var pageStart = pageSize * pageIndex;
      var pageEnd = pageStart + pageSize;
      page = rows.slice(pageStart, pageEnd);
    }

    if (paginateExpandedRows) {
      return page;
    }

    return expandRows(page, {
      manualExpandedKey: manualExpandedKey,
      expanded: expanded,
      expandSubRows: expandSubRows
    });
  }, [debug, expandSubRows, expanded, manualExpandedKey, manualPagination, pageIndex, pageSize, paginateExpandedRows, rows]);

  var canPreviousPage = pageIndex > 0;
  var canNextPage = pageCount === -1 || pageIndex < pageCount - 1;

  var gotoPage = _react.default.useCallback(function (updater) {
    if ("development" === 'development' && debug) console.info('gotoPage');
    return setState(function (old) {
      var newPageIndex = typeof updater === 'function' ? updater(old.pageIndex) : updater;

      if (newPageIndex < 0 || newPageIndex > pageCount - 1) {
        return old;
      }

      return _objectSpread2({}, old, {
        pageIndex: newPageIndex
      });
    }, actions.pageChange);
  }, [debug, pageCount, setState]);

  var previousPage = _react.default.useCallback(function () {
    return gotoPage(function (old) {
      return old - 1;
    });
  }, [gotoPage]);

  var nextPage = _react.default.useCallback(function () {
    return gotoPage(function (old) {
      return old + 1;
    });
  }, [gotoPage]);

  var setPageSize = _react.default.useCallback(function (pageSize) {
    setState(function (old) {
      var topRowIndex = old.pageSize * old.pageIndex;
      var pageIndex = Math.floor(topRowIndex / pageSize);
      return _objectSpread2({}, old, {
        pageIndex: pageIndex,
        pageSize: pageSize
      });
    }, actions.pageSizeChange);
  }, [setState]);

  return _objectSpread2({}, instance, {
    pageOptions: pageOptions,
    pageCount: pageCount,
    page: page,
    canPreviousPage: canPreviousPage,
    canNextPage: canNextPage,
    gotoPage: gotoPage,
    previousPage: previousPage,
    nextPage: nextPage,
    setPageSize: setPageSize,
    pageIndex: pageIndex,
    pageSize: pageSize
  });
}

defaultState.selectedRowPaths = [];
addActions('toggleRowSelected', 'toggleRowSelectedAll');
var propTypes$6 = {
  manualRowSelectedKey: _propTypes.default.string
};

var useRowSelect = function useRowSelect(hooks) {
  hooks.getToggleRowSelectedProps = [];
  hooks.getToggleAllRowsSelectedProps = [];
  hooks.useRows.push(useRows);
  hooks.useMain.push(useMain$5);
};

exports.useRowSelect = useRowSelect;
useRowSelect.pluginName = 'useRowSelect';

function useRows(rows, instance) {
  _propTypes.default.checkPropTypes(propTypes$6, instance, 'property', 'useRowSelect');

  var selectedRowPaths = instance.state.selectedRowPaths;
  instance.selectedFlatRows = _react.default.useMemo(function () {
    var selectedFlatRows = [];
    rows.forEach(function (row) {
      if (row.isAggregated) {
        var subRowPaths = row.subRows.map(function (row) {
          return row.path;
        });
        row.isSelected = subRowPaths.every(function (path) {
          return selectedRowPaths.includes(path.join('.'));
        });
      } else {
        row.isSelected = selectedRowPaths.includes(row.path.join('.'));
      }

      if (row.isSelected) {
        selectedFlatRows.push(row);
      }
    });
    return selectedFlatRows;
  }, [rows, selectedRowPaths]);
  return rows;
}

function useMain$5(instance) {
  _propTypes.default.checkPropTypes(propTypes$6, instance, 'property', 'useRowSelect');

  var hooks = instance.hooks,
      _instance$manualRowSe = instance.manualRowSelectedKey,
      manualRowSelectedKey = _instance$manualRowSe === void 0 ? 'isSelected' : _instance$manualRowSe,
      disableSelectedRowsResetOnDataChange = instance.disableSelectedRowsResetOnDataChange,
      plugins = instance.plugins,
      flatRows = instance.flatRows,
      data = instance.data,
      selectedRowPaths = instance.state.selectedRowPaths,
      setState = instance.setState;
  ensurePluginOrder(plugins, ['useFilters', 'useGroupBy', 'useSortBy'], 'useRowSelect', []);
  var flatRowPaths = flatRows.map(function (d) {
    return d.path.join('.');
  });
  var isAllRowsSelected = !!flatRowPaths.length && !!selectedRowPaths.length;

  if (isAllRowsSelected) {
    if (flatRowPaths.some(function (d) {
      return !selectedRowPaths.includes(d);
    })) {
      isAllRowsSelected = false;
    }
  }

  var isRowSelectedMountedRef = _react.default.useRef(); // Bypass any effects from firing when this changes


  var disableSelectedRowsResetOnDataChangeRef = _react.default.useRef();

  disableSelectedRowsResetOnDataChangeRef.current = disableSelectedRowsResetOnDataChange;
  safeUseLayoutEffect(function () {
    if (isRowSelectedMountedRef.current && !disableSelectedRowsResetOnDataChangeRef.current) {
      setState(function (old) {
        return _objectSpread2({}, old, {
          selectedRowPaths: []
        });
      }, actions.pageChange);
    }

    isRowSelectedMountedRef.current = true;
  }, [setState, data]);

  var toggleRowSelectedAll = function toggleRowSelectedAll(set) {
    setState(function (old) {
      var selectAll = typeof set !== 'undefined' ? set : !isAllRowsSelected;
      return _objectSpread2({}, old, {
        selectedRowPaths: selectAll ? flatRowPaths : []
      });
    }, actions.toggleRowSelectedAll);
  };

  var updateParentRow = function updateParentRow(selectedRowPaths, path) {
    var parentPath = path.slice(0, path.length - 1);
    var parentKey = parentPath.join('.');
    var selected = flatRowPaths.filter(function (rowPath) {
      var path = rowPath;
      return path !== parentKey && path.startsWith(parentKey) && !selectedRowPaths.has(path);
    }).length === 0;

    if (selected) {
      selectedRowPaths.add(parentKey);
    } else {
      selectedRowPaths.delete(parentKey);
    }

    if (parentPath.length > 1) updateParentRow(selectedRowPaths, parentPath);
  };

  var toggleRowSelected = function toggleRowSelected(path, set) {
    var key = path.join('.');
    var childRowPrefixKey = [key, '.'].join('');
    return setState(function (old) {
      // Join the paths of deep rows
      // to make a key, then manage all of the keys
      // in a flat object
      var exists = old.selectedRowPaths.includes(key);
      var shouldExist = typeof set !== 'undefined' ? set : !exists;
      var newSelectedRows = new Set(old.selectedRowPaths);

      if (!exists && shouldExist) {
        flatRowPaths.forEach(function (rowPath) {
          if (rowPath === key || rowPath.startsWith(childRowPrefixKey)) {
            newSelectedRows.add(rowPath);
          }
        });
      } else if (exists && !shouldExist) {
        flatRowPaths.forEach(function (rowPath) {
          if (rowPath === key || rowPath.startsWith(childRowPrefixKey)) {
            newSelectedRows.delete(rowPath);
          }
        });
      } else {
        return old;
      } // If the row is a subRow update
      // its parent row to reflect changes


      if (path.length > 1) updateParentRow(newSelectedRows, path);
      return _objectSpread2({}, old, {
        selectedRowPaths: _toConsumableArray(newSelectedRows.values())
      });
    }, actions.toggleRowSelected);
  };

  var getToggleAllRowsSelectedProps = function getToggleAllRowsSelectedProps(props) {
    return mergeProps({
      onChange: function onChange(e) {
        toggleRowSelectedAll(e.target.checked);
      },
      style: {
        cursor: 'pointer'
      },
      checked: isAllRowsSelected,
      title: 'Toggle All Rows Selected'
    }, applyPropHooks(instance.hooks.getToggleAllRowsSelectedProps, instance), props);
  };

  hooks.prepareRow.push(function (row) {
    // Aggregate rows have entirely different select logic
    if (row.isAggregated) {
      var subRowPaths = row.subRows.map(function (row) {
        return row.path;
      });

      row.toggleRowSelected = function (set) {
        set = typeof set !== 'undefined' ? set : !row.isSelected;
        subRowPaths.forEach(function (path) {
          toggleRowSelected(path, set);
        });
      };

      row.getToggleRowSelectedProps = function (props) {
        var checked = false;

        if (row.original && row.original[manualRowSelectedKey]) {
          checked = true;
        } else {
          checked = row.isSelected;
        }

        return mergeProps({
          onChange: function onChange(e) {
            row.toggleRowSelected(e.target.checked);
          },
          style: {
            cursor: 'pointer'
          },
          checked: checked,
          title: 'Toggle Row Selected'
        }, applyPropHooks(instance.hooks.getToggleRowSelectedProps, row, instance), props);
      };
    } else {
      row.toggleRowSelected = function (set) {
        return toggleRowSelected(row.path, set);
      };

      row.getToggleRowSelectedProps = function (props) {
        var checked = false;

        if (row.original && row.original[manualRowSelectedKey]) {
          checked = true;
        } else {
          checked = row.isSelected;
        }

        return mergeProps({
          onChange: function onChange(e) {
            row.toggleRowSelected(e.target.checked);
          },
          style: {
            cursor: 'pointer'
          },
          checked: checked,
          title: 'Toggle Row Selected'
        }, applyPropHooks(instance.hooks.getToggleRowSelectedProps, row, instance), props);
      };
    }

    return row;
  });
  return _objectSpread2({}, instance, {
    toggleRowSelected: toggleRowSelected,
    toggleRowSelectedAll: toggleRowSelectedAll,
    getToggleAllRowsSelectedProps: getToggleAllRowsSelectedProps,
    isAllRowsSelected: isAllRowsSelected
  });
}

defaultState.rowState = {};
addActions('setRowState', 'setCellState');
var propTypes$7 = {
  initialRowStateAccessor: _propTypes.default.func
};

var useRowState = function useRowState(hooks) {
  hooks.useMain.push(useMain$6);
};

exports.useRowState = useRowState;
useRowState.pluginName = 'useRowState';

function useMain$6(instance) {
  _propTypes.default.checkPropTypes(propTypes$7, instance, 'property', 'useRowState');

  var hooks = instance.hooks,
      rows = instance.rows,
      initialRowStateAccessor = instance.initialRowStateAccessor,
      rowState = instance.state.rowState,
      setState = instance.setState;

  var setRowState = _react.default.useCallback(function (path, updater) {
    var action = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : actions.setRowState;
    var pathKey = path.join('.');
    return setState(function (old) {
      return _objectSpread2({}, old, {
        rowState: _objectSpread2({}, old.rowState, _defineProperty({}, pathKey, typeof updater === 'function' ? updater(old.rowState[pathKey]) : updater))
      });
    }, action);
  }, [setState]);

  var setCellState = _react.default.useCallback(function (rowPath, columnID, updater) {
    return setRowState(rowPath, function (old) {
      return _objectSpread2({}, old, {
        cellState: _objectSpread2({}, old.cellState, _defineProperty({}, columnID, typeof updater === 'function' ? updater(old.cellState[columnID]) : updater))
      });
    }, actions.setCellState);
  }, [setRowState]);

  var rowsMountedRef = _react.default.useRef(); // When data changes, reset row and cell state


  _react.default.useEffect(function () {
    if (rowsMountedRef.current) {
      setState(function (old) {
        return _objectSpread2({}, old, {
          rowState: {}
        });
      }, actions.setRowState);
    }

    rowsMountedRef.current = true;
  }, [rows, setState]);

  hooks.prepareRow.push(function (row) {
    var pathKey = row.path.join('.');

    if (row.original) {
      row.state = (typeof rowState[pathKey] !== 'undefined' ? rowState[pathKey] : initialRowStateAccessor && initialRowStateAccessor(row)) || {};

      row.setState = function (updater) {
        return setRowState(row.path, updater);
      };

      row.cells.forEach(function (cell) {
        cell.state = row.state.cellState || {};

        cell.setState = function (updater) {
          return setCellState(row.path, cell.column.id, updater);
        };
      });
    }

    return row;
  });
  return _objectSpread2({}, instance, {
    setRowState: setRowState,
    setCellState: setCellState
  });
}

defaultState.columnOrder = [];
addActions('setColumnOrder');
var propTypes$8 = {
  initialRowStateAccessor: _propTypes.default.func
};

var useColumnOrder = function useColumnOrder(hooks) {
  hooks.columnsBeforeHeaderGroupsDeps.push(function (deps, instance) {
    return [].concat(_toConsumableArray(deps), [instance.state.columnOrder]);
  });
  hooks.columnsBeforeHeaderGroups.push(columnsBeforeHeaderGroups$1);
  hooks.useMain.push(useMain$7);
};

exports.useColumnOrder = useColumnOrder;
useColumnOrder.pluginName = 'useColumnOrder';

function columnsBeforeHeaderGroups$1(columns, instance) {
  var columnOrder = instance.state.columnOrder; // If there is no order, return the normal columns

  if (!columnOrder || !columnOrder.length) {
    return columns;
  }

  var columnOrderCopy = _toConsumableArray(columnOrder); // If there is an order, make a copy of the columns


  var columnsCopy = _toConsumableArray(columns); // And make a new ordered array of the columns


  var columnsInOrder = []; // Loop over the columns and place them in order into the new array

  var _loop = function _loop() {
    var targetColumnID = columnOrderCopy.shift();
    var foundIndex = columnsCopy.findIndex(function (d) {
      return d.id === targetColumnID;
    });

    if (foundIndex > -1) {
      columnsInOrder.push(columnsCopy.splice(foundIndex, 1)[0]);
    }
  };

  while (columnsCopy.length && columnOrderCopy.length) {
    _loop();
  } // If there are any columns left, add them to the end


  return [].concat(columnsInOrder, _toConsumableArray(columnsCopy));
}

function useMain$7(instance) {
  _propTypes.default.checkPropTypes(propTypes$8, instance, 'property', 'useColumnOrder');

  var setState = instance.setState;

  var setColumnOrder = _react.default.useCallback(function (updater) {
    return setState(function (old) {
      return _objectSpread2({}, old, {
        columnOrder: typeof updater === 'function' ? updater(old.columnOrder) : updater
      });
    }, actions.setColumnOrder);
  }, [setState]);

  return _objectSpread2({}, instance, {
    setColumnOrder: setColumnOrder
  });
}

defaultState.columnResizing = {
  columnWidths: {}
};
defaultColumn.canResize = true;
var propTypes$9 = {};

var useResizeColumns = function useResizeColumns(hooks) {
  hooks.useBeforeDimensions.push(useBeforeDimensions);
};

exports.useResizeColumns = useResizeColumns;
useResizeColumns.pluginName = 'useResizeColumns';

var useBeforeDimensions = function useBeforeDimensions(instance) {
  _propTypes.default.checkPropTypes(propTypes$9, instance, 'property', 'useResizeColumns');

  instance.hooks.getResizerProps = [];
  var flatHeaders = instance.flatHeaders,
      disableResizing = instance.disableResizing,
      getHeaderProps = instance.hooks.getHeaderProps,
      columnResizing = instance.state.columnResizing,
      setState = instance.setState;
  getHeaderProps.push(function () {
    return {
      style: {
        position: 'relative'
      }
    };
  });

  var _onMouseDown = function onMouseDown(e, header) {
    var headersToResize = getLeafHeaders(header);
    var startWidths = headersToResize.map(function (header) {
      return header.totalWidth;
    });
    var startX = e.clientX;

    var onMouseMove = function onMouseMove(e) {
      var currentX = e.clientX;
      var deltaX = currentX - startX;
      var percentageDeltaX = deltaX / headersToResize.length;
      var newColumnWidths = {};
      headersToResize.forEach(function (header, index) {
        newColumnWidths[header.id] = Math.max(startWidths[index] + percentageDeltaX, 0);
      });
      setState(function (old) {
        return _objectSpread2({}, old, {
          columnResizing: _objectSpread2({}, old.columnResizing, {
            columnWidths: _objectSpread2({}, old.columnResizing.columnWidths, {}, newColumnWidths)
          })
        });
      });
    };

    var onMouseUp = function onMouseUp(e) {
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseup', onMouseUp);
      setState(function (old) {
        return _objectSpread2({}, old, {
          columnResizing: _objectSpread2({}, old.columnResizing, {
            startX: null,
            isResizingColumn: null
          })
        });
      });
    };

    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);
    setState(function (old) {
      return _objectSpread2({}, old, {
        columnResizing: _objectSpread2({}, old.columnResizing, {
          startX: startX,
          isResizingColumn: header.id
        })
      });
    });
  };

  flatHeaders.forEach(function (header) {
    var canResize = getFirstDefined(header.disableResizing === true ? false : undefined, disableResizing === true ? false : undefined, true);
    header.canResize = canResize;
    header.width = columnResizing.columnWidths[header.id] || header.width;
    header.isResizing = columnResizing.isResizingColumn === header.id;

    if (canResize) {
      header.getResizerProps = function (userProps) {
        return mergeProps({
          onMouseDown: function onMouseDown(e) {
            return e.persist() || _onMouseDown(e, header);
          },
          style: {
            cursor: 'ew-resize'
          },
          draggable: false
        }, applyPropHooks(instance.hooks.getResizerProps, header, instance), userProps);
      };
    }
  });
  return instance;
};

function getLeafHeaders(header) {
  var leafHeaders = [];

  var recurseHeader = function recurseHeader(header) {
    if (header.columns && header.columns.length) {
      header.columns.map(recurseHeader);
    }

    leafHeaders.push(header);
  };

  recurseHeader(header);
  return leafHeaders;
}

var propTypes$a = {};

var useAbsoluteLayout = function useAbsoluteLayout(hooks) {
  hooks.useMain.push(useMain$8);
};

exports.useAbsoluteLayout = useAbsoluteLayout;
useAbsoluteLayout.pluginName = 'useAbsoluteLayout';

var useMain$8 = function useMain(instance) {
  _propTypes.default.checkPropTypes(propTypes$a, instance, 'property', 'useAbsoluteLayout');

  var totalColumnsWidth = instance.totalColumnsWidth,
      _instance$hooks = instance.hooks,
      getRowProps = _instance$hooks.getRowProps,
      getTableBodyProps = _instance$hooks.getTableBodyProps,
      getHeaderGroupProps = _instance$hooks.getHeaderGroupProps,
      getHeaderProps = _instance$hooks.getHeaderProps,
      getCellProps = _instance$hooks.getCellProps;
  var rowStyles = {
    style: {
      position: 'relative',
      width: "".concat(totalColumnsWidth, "px")
    }
  };
  getTableBodyProps.push(function () {
    return rowStyles;
  });
  getRowProps.push(function () {
    return rowStyles;
  });
  getHeaderGroupProps.push(function () {
    return rowStyles;
  }); // Calculating column/cells widths

  var cellStyles = {
    position: 'absolute',
    top: 0
  };
  getHeaderProps.push(function (header) {
    return {
      style: _objectSpread2({}, cellStyles, {
        left: "".concat(header.totalLeft, "px"),
        width: "".concat(header.totalWidth, "px")
      })
    };
  });
  getCellProps.push(function (cell) {
    return {
      style: _objectSpread2({}, cellStyles, {
        left: "".concat(cell.column.totalLeft, "px"),
        width: "".concat(cell.column.totalWidth, "px")
      })
    };
  });
  return instance;
};

var propTypes$b = {};

var useBlockLayout = function useBlockLayout(hooks) {
  hooks.useMain.push(useMain$9);
};

exports.useBlockLayout = useBlockLayout;
useBlockLayout.pluginName = 'useBlockLayout';

var useMain$9 = function useMain(instance) {
  _propTypes.default.checkPropTypes(propTypes$b, instance, 'property', 'useBlockLayout');

  var totalColumnsWidth = instance.totalColumnsWidth,
      _instance$hooks = instance.hooks,
      getRowProps = _instance$hooks.getRowProps,
      getHeaderGroupProps = _instance$hooks.getHeaderGroupProps,
      getHeaderProps = _instance$hooks.getHeaderProps,
      getCellProps = _instance$hooks.getCellProps;
  var rowStyles = {
    style: {
      display: 'flex',
      width: "".concat(totalColumnsWidth, "px")
    }
  };
  getRowProps.push(function () {
    return rowStyles;
  });
  getHeaderGroupProps.push(function () {
    return rowStyles;
  });
  var cellStyles = {
    display: 'inline-block',
    boxSizing: 'border-box'
  };
  getHeaderProps.push(function (header) {
    return {
      style: _objectSpread2({}, cellStyles, {
        width: "".concat(header.totalWidth, "px")
      })
    };
  });
  getCellProps.push(function (cell) {
    return {
      style: _objectSpread2({}, cellStyles, {
        width: "".concat(cell.column.totalWidth, "px")
      })
    };
  });
  return instance;
};
},{"react":"../node_modules/react/index.js","prop-types":"../node_modules/prop-types/index.js"}],"../src/components/Tables/SortedTable.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactTable = require("react-table");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function SortedTable(_ref) {
  var columns = _ref.columns,
      data = _ref.data;

  var _useTable = (0, _reactTable.useTable)({
    columns: columns,
    data: data
  }, _reactTable.useSortBy),
      getTableProps = _useTable.getTableProps,
      getTableBodyProps = _useTable.getTableBodyProps,
      headerGroups = _useTable.headerGroups,
      rows = _useTable.rows,
      prepareRow = _useTable.prepareRow;

  var theadRows = headerGroups.map(function (headerGroup) {
    return _react.default.createElement("tr", headerGroup.getHeaderGroupProps(), headerGroup.headers.map(function (column) {
      return _react.default.createElement("th", column.getHeaderProps(column.getSortByToggleProps()), column.render('Header'), _react.default.createElement("span", null, column.isSorted ? column.isSortedDesc ? ' 🔽' : ' 🔼' : ''));
    }));
  });
  var tbodyRows = rows.map(function (row, i) {
    return prepareRow(row) || _react.default.createElement("tr", row.getRowProps(), row.cells.map(function (cell) {
      return _react.default.createElement("td", cell.getCellProps(), cell.render('Cell'));
    }));
  });
  return _react.default.createElement("table", getTableProps(), _react.default.createElement("thead", null, theadRows), _react.default.createElement("tbody", getTableBodyProps(), tbodyRows));
}

var _default = SortedTable;
exports.default = _default;
},{"react":"../node_modules/react/index.js","react-table":"../node_modules/react-table/dist/index.es.js"}],"../src/components/Tables/Simple.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _SortedTable = _interopRequireDefault(require("./SortedTable"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  width: 100%;\n\n  table {\n    width: 100%;\n    border-collapse: collapse;\n    border-spacing: 0;\n\n    thead {\n      tr { \n        th {\n          background: white;\n          position: sticky;\n          top: 0;\n          z-index: 10;\n        }\n      }\n    }\n\n    th,\n    td {\n      margin: 0;\n      border: 1px solid #dbdbdb;\n      border-width: 0 0 1px;\n      padding: .5em .75em;\n      vertical-align: top;\n\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var columns = [{
  Header: 'Name',
  columns: [{
    Header: 'First Name',
    accessor: 'firstName'
  }, {
    Header: 'Last Name',
    accessor: 'lastName'
  }]
}, {
  Header: 'Info',
  columns: [{
    Header: 'Age',
    accessor: 'age'
  }, {
    Header: 'Visits',
    accessor: 'visits'
  }, {
    Header: 'Status',
    accessor: 'status'
  }, {
    Header: 'Profile Progress',
    accessor: 'progress'
  }]
}];
var data = makeData(20);

function Simple() {
  return _react.default.createElement(Style, null, _react.default.createElement(_SortedTable.default, {
    columns: columns,
    data: data
  }));
}

var Style = _styledComponents.default.div(_templateObject());

function makeData(len) {
  return _toConsumableArray(Array(len)).map(function (d) {
    var statusChance = Math.random();
    return {
      firstName: 'Gustavo',
      lastName: 'Novaes',
      age: Math.floor(Math.random() * 30),
      visits: Math.floor(Math.random() * 100),
      progress: Math.floor(Math.random() * 100),
      status: statusChance > 0.66 ? 'relationship' : statusChance > 0.33 ? 'complicated' : 'single'
    };
  });
}

var _default = Simple;
exports.default = _default;
},{"react":"../node_modules/react/index.js","styled-components":"../node_modules/styled-components/dist/styled-components.browser.esm.js","./SortedTable":"../src/components/Tables/SortedTable.js"}],"../node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "36361" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["../node_modules/parcel-bundler/src/builtins/hmr-runtime.js"], null)
//# sourceMappingURL=/Simple.69581025.js.map