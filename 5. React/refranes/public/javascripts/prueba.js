var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var x = 42;
var f = function f() {
  return console.log('hola');
};

var C = function () {
  function C() {
    _classCallCheck(this, C);
  }

  _createClass(C, [{
    key: 'm',
    value: function m() {
      console.log('Soy una instancia de C');
    }
  }]);

  return C;
}();

var c = new C();
c.m();
var elem = React.createElement(
  'p',
  null,
  'Hola ',
  6 * 7,
  '!'
);