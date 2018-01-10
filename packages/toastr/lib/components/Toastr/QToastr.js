'use strict';Object.defineProperty(exports, "__esModule", { value: true });var _createClass = function () {function defineProperties(target, props) {for (var i = 0; i < props.length; i++) {var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);}}return function (Constructor, protoProps, staticProps) {if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;};}();var _react = require('react');var _react2 = _interopRequireDefault(_react);
var _bind = require('classnames/bind');var _bind2 = _interopRequireDefault(_bind);
var _QToastr = require('../Toastr/styles/QToastr.scss');var _QToastr2 = _interopRequireDefault(_QToastr);
var _propTypes = require('prop-types');var _propTypes2 = _interopRequireDefault(_propTypes);function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function _classCallCheck(instance, Constructor) {if (!(instance instanceof Constructor)) {throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self, call) {if (!self) {throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call && (typeof call === "object" || typeof call === "function") ? call : self;}function _inherits(subClass, superClass) {if (typeof superClass !== "function" && superClass !== null) {throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);}subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;}

var cx = _bind2.default.bind(_QToastr2.default);var

QToastr = function (_PureComponent) {_inherits(QToastr, _PureComponent);function QToastr() {var _ref;var _temp, _this, _ret;_classCallCheck(this, QToastr);for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {args[_key] = arguments[_key];}return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = QToastr.__proto__ || Object.getPrototypeOf(QToastr)).call.apply(_ref, [this].concat(args))), _this), _this.






























    getShapeStyle = function () {var _this$props =
      _this.props,width = _this$props.width,height = _this$props.height;
      var paddingPixel = 48;
      var widthWithoutPadding = width - paddingPixel;
      var heightWithoutPadding = height - paddingPixel;

      return {
        width: widthWithoutPadding + 'px',
        height: heightWithoutPadding + 'px' };

    }, _temp), _possibleConstructorReturn(_this, _ret);}_createClass(QToastr, [{ key: 'render', value: function render()

    {var _props =
      this.props,toastrStyle = _props.toastrStyle,children = _props.children,className = _props.className;

      return (
        _react2.default.createElement('div', {
            style: this.getShapeStyle(),
            className: cx(['toastr', toastrStyle, className]) },

          _react2.default.createElement('div', null, children)));


    } }]);return QToastr;}(_react.PureComponent);QToastr.propTypes = { toastrStyle: _propTypes2.default.oneOf(['qts', 'photo-st', 'music-st', 'file-st', 'download-st', 'video-st']), children: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number, _propTypes2.default.element, _propTypes2.default.array]), className: _propTypes2.default.string, width: _propTypes2.default.number, height: _propTypes2.default.number, childProps: _propTypes2.default.oneOf([_propTypes2.default.string, _propTypes2.default.number, _propTypes2.default.element, _propTypes2.default.array]) };QToastr.defaultProps = { toastrStyle: 'qts' };exports.default = QToastr;