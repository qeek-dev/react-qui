'use strict';Object.defineProperty(exports, "__esModule", { value: true });var _createClass = function () {function defineProperties(target, props) {for (var i = 0; i < props.length; i++) {var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);}}return function (Constructor, protoProps, staticProps) {if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;};}();var _react = require('react');var _react2 = _interopRequireDefault(_react);
var _bind = require('classnames/bind');var _bind2 = _interopRequireDefault(_bind);
var _ToastrContainer = require('../Toastr/styles/ToastrContainer.scss');var _ToastrContainer2 = _interopRequireDefault(_ToastrContainer);
var _propTypes = require('prop-types');var _propTypes2 = _interopRequireDefault(_propTypes);
var _shortid = require('shortid');var _shortid2 = _interopRequireDefault(_shortid);
var _reactAddonsCssTransitionGroup = require('react-addons-css-transition-group');var _reactAddonsCssTransitionGroup2 = _interopRequireDefault(_reactAddonsCssTransitionGroup);
require('./styles/animation.css');function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}function _classCallCheck(instance, Constructor) {if (!(instance instanceof Constructor)) {throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self, call) {if (!self) {throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call && (typeof call === "object" || typeof call === "function") ? call : self;}function _inherits(subClass, superClass) {if (typeof superClass !== "function" && superClass !== null) {throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);}subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;}

var cx = _bind2.default.bind(_ToastrContainer2.default);var

ToastrContainer = function (_Component) {_inherits(ToastrContainer, _Component);













  function ToastrContainer(props) {_classCallCheck(this, ToastrContainer);var _this = _possibleConstructorReturn(this, (ToastrContainer.__proto__ || Object.getPrototypeOf(ToastrContainer)).call(this,
    props));_this.










    trigger = function () {var _this$props =
      _this.props,width = _this$props.width,height = _this$props.height,duration = _this$props.duration;
      var children = _react2.default.Children.map(_this.props.children, function (child) {
        return _react2.default.cloneElement(child, {
          width: width,
          height: height,
          duration: duration,
          key: _shortid2.default.generate() });

      });

      if (_this.state.queue.length < 0) return;
      _this.setState(function (prevState) {return {
          queue: prevState.queue.concat(children) };});



      if (_this.state.queue.length < 0) return;
      window.setTimeout(function () {
        var newItems = _this.state.queue.slice(1);

        _this.setState(function (prevState) {return {
            queue: newItems };});

      }, 3000);
    };_this.

    animationLeaveTimeout = function () {var
      duration = _this.props.duration;
      return {
        opacity: '0.01ms',
        transition: 'opacity ' + duration + 'ms ease-in' };

    };_this.state = { queue: [] };return _this;}_createClass(ToastrContainer, [{ key: 'shouldComponentUpdate', value: function shouldComponentUpdate(nextProps, nextState) {return this.state.queue !== nextState.queue;} }, { key: 'render', value: function render()

    {var _props =
      this.props,position = _props.position,className = _props.className,duration = _props.duration;



      return (
        _react2.default.createElement('div', { className: cx([position, className]) },
          _react2.default.createElement('div', null,
            _react2.default.createElement(_reactAddonsCssTransitionGroup2.default, {
                transitionName: 'example',
                transitionEnterTimeout: 0.1,
                transitionLeaveTimeout: duration,
                style: this.animationLeaveTimeout() },

              this.state.queue))));





    } }]);return ToastrContainer;}(_react.Component);ToastrContainer.propTypes = { width: _propTypes2.default.number, height: _propTypes2.default.number, duration: _propTypes2.default.number, position: _propTypes2.default.string, className: _propTypes2.default.string, render: _propTypes2.default.func };ToastrContainer.defaultProps = { duration: 5, position: 'top-right' };exports.default = ToastrContainer;