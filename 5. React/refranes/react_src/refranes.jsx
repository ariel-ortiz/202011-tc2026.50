/* global React, ReactDOM, fetch */

const Cabeza = () => (
  <div className="w3-bar w3-teal">
    <div className="w3-container">
      <h1>
        Refranes aleatorios
      </h1>
    </div>
  </div>
);

const Pie = () => (
  <footer className="w3-container w3-center w3-small">
    <span className="w3-mobile">
      &copy; 2020 por Pepper Pots (A01166611)
    </span>
  </footer>
);

const Texto = props => (
  <div className="w3-panel w3-sand w3-card-4">
    <p>
      <em>{props.mensaje}</em>
    </p>
  </div>
);

class Aplicacion extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      mensaje: 'Presiona el botón para obtener un refrán al azar.'
    };
    this.cliquea = this.cliquea.bind(this);
  }

  cliquea() {
    fetch("/refran")  // llamada de AJAX
      .then(res =>
        res.json())
      .then(
        result => {
          this.setState({
            mensaje: result.refran
          });
        },
        error => {
          this.setState({
            mensaje: error.message
          });
        }
      );
  }

  render() {
    const { mensaje } = this.state;
    return (
      <div>
        <Cabeza />
        <div className="w3-container">
          <Texto mensaje={mensaje} />
          <p>
            <button className="w3-button w3-black w3-round-xlarge"
                    onClick={this.cliquea}>
              Genera refrán
            </button>
          </p>
        </div>
        <hr />
        <Pie />
      </div>
    );
  }
}

ReactDOM.render(
  <Aplicacion />,
  document.getElementById('root')
);