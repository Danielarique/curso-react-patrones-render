import React from "react";
import ReactDOM from "react-dom";
//import App from './App/index.js';
import "./index.css";

function App(props) {
  return (
    <h1>
      !{props.saludo}! {props.nombre}
    </h1>
  );
}
function withSaludo(WrappedComponent) {
  return function wrappedComponentWithSaludo(saludo){
    return function ComponenteDeVerdad(props) {
      return (
        <React.Fragment>
          <WrappedComponent {...props} saludo={saludo}/>
          <p>Estamos acompañando el WrappedComponent</p>
        </React.Fragment>
      );
    };
  }
}
/* ReactDOM.render(
  <App />,
  document.getElementById('root')
); */

const AppWithSaludo = withSaludo(App)('Wuenas');
ReactDOM.render(<AppWithSaludo  nombre="dani" />,  document.getElementById('root'));
