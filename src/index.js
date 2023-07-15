// import React from 'react';
// import ReactDOM from 'react-dom';
// import App from './App';
// import Spinner from 'react-bootstrap/Spinner';

// const rootElement = document.getElementById('root');

// const renderApp = () => {
//   ReactDOM.render(
//     <React.StrictMode>
//       <App />
//     </React.StrictMode>,
//     rootElement
//   );
// };

// const renderSpinner = () => {
//   ReactDOM.render(
//     <div className="spinner-container">
//       <Spinner animation="grow" role="status" variant="primary">
//         <span className="visually-hidden">Loading...</span>
//       </Spinner>&nbsp;&nbsp;&nbsp;&nbsp;
//       <Spinner animation="grow" role="status" variant="info">
//         <span className="visually-hidden">Loading...</span>
//       </Spinner>&nbsp;&nbsp;&nbsp;&nbsp;
//       <Spinner animation="grow" role="status" variant="danger">
//         <span className="visually-hidden">Loading...</span>
//       </Spinner>&nbsp;&nbsp;&nbsp;&nbsp;
//       <Spinner animation="grow" role="status" variant="success">
//         <span className="visually-hidden">Loading...</span>
//       </Spinner>
//     </div>,
//     rootElement
//   );
// };

// renderSpinner();

// setTimeout(() => {
//   renderApp();
// }, 2000);
import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Spinner from 'react-bootstrap/Spinner';

const Root = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <div>
      {isLoading ? (
        <div className="spinner-container">
          <Spinner animation="grow" role="status" variant="primary">
            <span className="visually-hidden">Loading...</span>
          </Spinner>&nbsp;&nbsp;&nbsp;&nbsp;
          <Spinner animation="grow" role="status" variant="info">
            <span className="visually-hidden">Loading...</span>
          </Spinner>&nbsp;&nbsp;&nbsp;&nbsp;
          <Spinner animation="grow" role="status" variant="danger">
            <span className="visually-hidden">Loading...</span>
          </Spinner>&nbsp;&nbsp;&nbsp;&nbsp;
          <Spinner animation="grow" role="status" variant="success">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        </div>
      ) : (
        <React.StrictMode>
          <App />
        </React.StrictMode>
      )}
    </div>
  );
};

ReactDOM.render(<Root />, document.getElementById('root'));
