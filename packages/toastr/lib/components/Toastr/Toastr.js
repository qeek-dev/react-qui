'use strict';Object.defineProperty(exports, "__esModule", { value: true });var _createClass = function () {function defineProperties(target, props) {for (var i = 0; i < props.length; i++) {var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);}}return function (Constructor, protoProps, staticProps) {if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;};}();var _react = require('react');var _react2 = _interopRequireDefault(_react);
var _bind = require('classnames/bind');var _bind2 = _interopRequireDefault(_bind);
var _Toastr = require('../Toastr/styles/Toastr.scss');var _Toastr2 = _interopRequireDefault(_Toastr);
var _propTypes = require('prop-types');var _propTypes2 = _interopRequireDefault(_propTypes);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function _classCallCheck(instance, Constructor) {if (!(instance instanceof Constructor)) {throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self, call) {if (!self) {throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call && (typeof call === "object" || typeof call === "function") ? call : self;}function _inherits(subClass, superClass) {if (typeof superClass !== "function" && superClass !== null) {throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);}subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;}

var cx = _bind2.default.bind(_Toastr2.default);var

Toastr = function (_PureComponent) {_inherits(Toastr, _PureComponent);function Toastr() {_classCallCheck(this, Toastr);return _possibleConstructorReturn(this, (Toastr.__proto__ || Object.getPrototypeOf(Toastr)).apply(this, arguments));}_createClass(Toastr, [{ key: 'render', value: function render()























    {var _props =
      this.props,btnStyle = _props.btnStyle,children = _props.children,className = _props.className,width = _props.width,height = _props.height;

      return (
        _react2.default.createElement('div', { style: { width: width + 'px', height: height + 'px' }, className: cx(['toastr', btnStyle, className]) }, ' ', children, ' '));

    } }]);return Toastr;}(_react.PureComponent);Toastr.propTypes = { btnStyle: _propTypes2.default.oneOf(['qts', 'photo-st', 'music-st', 'file-st', 'download-st', 'video-st']), children: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number, _propTypes2.default.element]), className: _propTypes2.default.string, width: _propTypes2.default.number, height: _propTypes2.default.number };Toastr.defaultProps = { btnStyle: 'qts' };exports.default = Toastr;


Toastr.PropTypes = {
  btnStyle: _propTypes2.default.string,
  children: _propTypes2.default.oneOfType([
  _propTypes2.default.string,
  _propTypes2.default.number,
  _propTypes2.default.element]),

  className: _propTypes2.default.string,
  width: _propTypes2.default.number,
  height: _propTypes2.default.number };