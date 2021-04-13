import React from 'react';

import styles from './app.module.scss';

import { ReactComponent as Logo } from './qe-m-icon.svg';
import star from './star.svg';

import { Route, Link } from 'react-router-dom';

export function App() {
  return (
    <div className={styles.app}>
      <header className="flex">
        <Logo width="75" height="75" />
        <h1>Welcome to QE-Mature!</h1>
      </header>

      <Route
        path="/"
        exact
        render={() => (
          <main>
        <h2>Quality Engineering Maturity Assesment</h2>
        <br />
        <p>Thank you for using and showing some ♥ for QE-Mature.</p>
        <div className="flex github-star-container">
          <a
            href="https://github.com/ale-sanchez-g/qe-mature"
            target="_blank"
            rel="noopener noreferrer"
          >
            {' '}
            If you like QE-Mature, please give it a star:
            <div className="github-star-badge">
              <img src={star} className="material-icons" alt="" />
              Star
            </div>
          </a>
        </div>
        <p>Let's get started.</p>
        <ul className="resources">
          <li className="col-span-2">
            <a
              className="resource flex"
              href="/org"
            >
              Set up your Organisation
            </a>
          </li>
        </ul>
      </main>
        )}
      />

      <Route
        path="/org"
        exact
        render={() => (
          <div>
            <Link to="/">Click here to go back to root page.</Link>
          </div>
        )}
      />
      {/* END: routes */}
      
      <hr />
      <div role="navigation">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/org">Org</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default App;
