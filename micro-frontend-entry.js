import React from 'react';
import ReactDOM from 'react-dom';
import App from './src/App'

function MicroFrontendApp() {
  return <div>This is a micro-frontend application</div>;
}

// Export the lifecycle functions for Single-spa
export function bootstrap() {
  return Promise.resolve();
}

export function mount(props) {
  return new Promise((resolve, reject) => {
    ReactDOM.render(<App />, props.domElement);
    resolve();
  });
}

export function unmount(props) {
  return new Promise((resolve, reject) => {
    ReactDOM.unmountComponentAtNode(props.domElement);
    resolve();
  });
}