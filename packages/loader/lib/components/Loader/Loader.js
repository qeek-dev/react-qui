'use strict';Object.defineProperty(exports, "__esModule", { value: true });var _createClass = function () {function defineProperties(target, props) {for (var i = 0; i < props.length; i++) {var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);}}return function (Constructor, protoProps, staticProps) {if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;};}();var _react = require('react');var _react2 = _interopRequireDefault(_react);
var _propTypes = require('prop-types');var _propTypes2 = _interopRequireDefault(_propTypes);
var _bind = require('classnames/bind');var _bind2 = _interopRequireDefault(_bind);
var _ramda = require('ramda');
var _Observable = require('rxjs/Observable');
require('rxjs/add/observable/interval');function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function _classCallCheck(instance, Constructor) {if (!(instance instanceof Constructor)) {throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self, call) {if (!self) {throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call && (typeof call === "object" || typeof call === "function") ? call : self;}function _inherits(subClass, superClass) {if (typeof superClass !== "function" && superClass !== null) {throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);}subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;}

// import styles from './/Loader.scss'

// const cx = classnames.bind(styles)

var getRenderQueue = (0, _ramda.compose)(_ramda.flatten, (0, _ramda.map)(function (_ref) {var render = _ref.render,duration = _ref.duration;return (0, _ramda.repeat)(render, duration);}));var

Loader = function (_Component) {_inherits(Loader, _Component);
















  function Loader(props) {_classCallCheck(this, Loader);var _this = _possibleConstructorReturn(this, (Loader.__proto__ || Object.getPrototypeOf(Loader)).call(this,
    props));var
    phases = props.phases;

    if (phases.length < 1) throw new Error('phases prop must has at least one element');

    _this.state = {
      currentPhase: 0,
      renderQueue: getRenderQueue(_this.props.phases) };return _this;

  }_createClass(Loader, [{ key: 'componentDidMount', value: function componentDidMount()

    {

    } }, { key: 'render', value: function render()



    {
      return (
        _react2.default.createElement('div', null, this.state.renderQueue.map(function (render) {return render();})));

    } }]);return Loader;}(_react.Component);Loader.propTypes = { mode: _propTypes2.default.oneOf(['icon', 'progress']), percentage: _propTypes2.default.number, visible: _propTypes2.default.bool, onCancel: _propTypes2.default.func, onTimeout: _propTypes2.default.func, phases: _propTypes2.default.arrayOf(_propTypes2.default.shape({ render: _propTypes2.default.func.isRequired, duration: _propTypes2.default.number.isRequired })).isRequired };Loader.defaultProps = { visible: false };exports.default =


Loader;