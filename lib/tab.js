'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

var _get = function get(_x, _x2, _x3) { var _again = true; _function: while (_again) { var object = _x, property = _x2, receiver = _x3; _again = false; if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { _x = parent; _x2 = property; _x3 = receiver; _again = true; desc = parent = undefined; continue _function; } } else if ('value' in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } } };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var Tab = (function (_React$Component) {
  _inherits(Tab, _React$Component);

  _createClass(Tab, null, [{
    key: 'propTypes',
    value: {
      name: _react2['default'].PropTypes.string.isRequired,
      clicked: _react2['default'].PropTypes.func,
      active: _react2['default'].PropTypes.bool,
      children: _react2['default'].PropTypes.any.isRequired,
      liStyle: _react2['default'].PropTypes.object,
      liClass: _react2['default'].PropTypes.string
    },
    enumerable: true
  }]);

  function Tab(props) {
    var _this = this;

    _classCallCheck(this, Tab);

    _get(Object.getPrototypeOf(Tab.prototype), 'constructor', this).call(this, props);

    this.clicked = function () {
      _this.props.clicked(_this.props.name);
    };

    this.state = {};
  }

  _createClass(Tab, [{
    key: 'render',
    value: function render() {
      var _props = this.props;
      var liClass = _props.liClass;
      var liStyle = _props.liStyle;
      var contentClass = _props.contentClass;
      var active = _props.active;
      var name = _props.name;
      var children = _props.children;

      var rest = _objectWithoutProperties(_props, ['liClass', 'liStyle', 'contentClass', 'active', 'name', 'children']);

      delete rest.clicked;
      var linkClass = active ? 'is-active' : null;

      return _react2['default'].createElement(
        'li',
        { className: 'tab-header-and-content ' + liClass, style: liStyle || null },
        _react2['default'].createElement(
          'a',
          {
            className: 'tab-link ' + linkClass,
            onClick: this.clicked },
          name
        ),
        active ? _react2['default'].createElement(
          'div',
          _extends({}, rest, { className: 'tab-content ' + contentClass }),
          children
        ) : null
      );
    }
  }]);

  return Tab;
})(_react2['default'].Component);

exports['default'] = Tab;
module.exports = exports['default'];