import React from 'react';

// COMENTADO POR GENERAR CONFLICTO CUANDO SE IMPORTA EN App.js
// import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';

import './Spinner.css';
import { Watch } from 'react-loader-spinner';
const Spinner = () => {
  return (
    <div className="spinner">
      <Watch height="120" width="120" color="red" ariaLabel="loading" />
    </div>
  );
};

export default Spinner;
