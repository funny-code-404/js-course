import React from 'react';
import { Link } from 'react-router-dom';

const TelBook = () => (
  <header>
    <div>
      <h2>Имена</h2>
      <ul>
        <li>
          <Link to="/pit">Pit</Link>
        </li>
        <li>
          <Link to="/helen">Helen</Link>
        </li>
      </ul>
    </div>
    <div>
      <h2>Телефоны</h2>
      <ul>
        <li>
          555-555-555
        </li>
        <li>
          333-333-333
        </li>
      </ul>
    </div>
  </header>
  );

export default TelBook;
