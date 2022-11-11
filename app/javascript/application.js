// // Entry point for the build script in your package.json
// import React from 'react';
// import ReactDOM from 'react-dom';

// function App() {
//   return (<h1>Hello world</h1>);
// }

// ReactDOM.render(
//   <App />,
//   document.getElementById('root'),
// );
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import App from './components/App';
import store from './redux/store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
);
