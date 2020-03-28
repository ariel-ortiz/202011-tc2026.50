var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/* global React, ReactDOM, fetch */

var Cabeza = function Cabeza() {
  return React.createElement(
    "div",
    { className: "w3-bar w3-teal" },
    React.createElement(
      "div",
      { className: "w3-container" },
      React.createElement(
        "h1",
        null,
        "Refranes aleatorios"
      )
    )
  );
};

var Pie = function Pie() {
  return React.createElement(
    "footer",
    { className: "w3-container w3-center w3-small" },
    React.createElement(
      "span",
      { className: "w3-mobile" },
      "\xA9 2020 por Pepper Pots (A01166611)"
    )
  );
};

var Texto = function Texto(props) {
  return React.createElement(
    "div",
    { className: "w3-panel w3-sand w3-card-4" },
    React.createElement(
      "p",
      null,
      React.createElement(
        "em",
        null,
        props.mensaje
      )
    )
  );
};

var Aplicacion = function (_React$Component) {
  _inherits(Aplicacion, _React$Component);

  function Aplicacion(props) {
    _classCallCheck(this, Aplicacion);

    var _this = _possibleConstructorReturn(this, (Aplicacion.__proto__ || Object.getPrototypeOf(Aplicacion)).call(this, props));

    _this.state = {
      mensaje: 'Presiona el botón para obtener un refrán al azar.'
    };
    _this.cliquea = _this.cliquea.bind(_this);
    return _this;
  }

  _createClass(Aplicacion, [{
    key: "cliquea",
    value: function cliquea() {
      var _this2 = this;

      fetch("/refran") // llamada de AJAX
      .then(function (res) {
        return res.json();
      }).then(function (result) {
        _this2.setState({
          mensaje: result.refran
        });
      }, function (error) {
        _this2.setState({
          mensaje: error.message
        });
      });
    }
  }, {
    key: "render",
    value: function render() {
      var mensaje = this.state.mensaje;

      return React.createElement(
        "div",
        null,
        React.createElement(Cabeza, null),
        React.createElement(
          "div",
          { className: "w3-container" },
          React.createElement(Texto, { mensaje: mensaje }),
          React.createElement(
            "p",
            null,
            React.createElement(
              "button",
              { className: "w3-button w3-black w3-round-xlarge",
                onClick: this.cliquea },
              "Genera refr\xE1n"
            )
          )
        ),
        React.createElement("hr", null),
        React.createElement(Pie, null)
      );
    }
  }]);

  return Aplicacion;
}(React.Component);

ReactDOM.render(React.createElement(Aplicacion, null), document.getElementById('root'));